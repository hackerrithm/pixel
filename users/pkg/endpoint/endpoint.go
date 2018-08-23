package endpoint

import (
	"context"
	endpoint "github.com/go-kit/kit/endpoint"
	service "github.com/hackerrithm/pixel/users/pkg/service"
)

// CreateRequest collects the request parameters for the Create method.
type CreateRequest struct {
	Email string `json:"email"`
}

// CreateResponse collects the response parameters for the Create method.
type CreateResponse struct {
	Rs  string `json:"rs"`
	Err error  `json:"err"`
}

// MakeCreateEndpoint returns an endpoint that invokes Create on the service.
func MakeCreateEndpoint(s service.UsersService) endpoint.Endpoint {
	return func(ctx context.Context, request interface{}) (interface{}, error) {
		req := request.(CreateRequest)
		rs, err := s.Create(ctx, req.Email)
		return CreateResponse{
			Err: err,
			Rs:  rs,
		}, nil
	}
}

// Failed implements Failer.
func (r CreateResponse) Failed() error {
	return r.Err
}

// Failer is an interface that should be implemented by response types.
// Response encoders can check if responses are Failer, and if so they've
// failed, and if so encode them using a separate write path based on the error.
type Failure interface {
	Failed() error
}

// Create implements Service. Primarily useful in a client.
func (e Endpoints) Create(ctx context.Context, email string) (rs string, err error) {
	request := CreateRequest{Email: email}
	response, err := e.CreateEndpoint(ctx, request)
	if err != nil {
		return
	}
	return response.(CreateResponse).Rs, response.(CreateResponse).Err
}
