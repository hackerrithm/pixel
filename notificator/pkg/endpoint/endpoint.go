package endpoint

import (
	"context"

	endpoint "github.com/go-kit/kit/endpoint"
	service "github.com/hackerrithm/pixel/notificator/pkg/service"
)

// SendEmailRequest collects the request parameters for the SendEmail method.
type SendEmailRequest struct {
	Email   string `json:"email"`
	Content string `json:"content"`
}

// SendEmailResponse collects the response parameters for the SendEmail method.
type SendEmailResponse struct {
	ID string `json:"id"`
	E1 error  `json:"e1"`
}

// MakeSendEmailEndpoint returns an endpoint that invokes SendEmail on the service.
func MakeSendEmailEndpoint(s service.NotificatorService) endpoint.Endpoint {
	return func(ctx context.Context, request interface{}) (interface{}, error) {
		req := request.(SendEmailRequest)
		id, s0 := s.SendEmail(ctx, req.Email, req.Content)
		return SendEmailResponse{
			ID: id,
			S0: s0,
		}, nil
	}
}

// Failed implements Failer.
func (r SendEmailResponse) Failed() error {
	return r.E1
}

// Failer is an interface that should be implemented by response types.
// Response encoders can check if responses are Failer, and if so they've
// failed, and if so encode them using a separate write path based on the error.
type Failure interface {
	Failed() error
}

// SendEmail implements Service. Primarily useful in a client.
func (e Endpoints) SendEmail(ctx context.Context, email string, content string) (s0 string, e1 error) {
	request := SendEmailRequest{
		Content: content,
		Email:   email,
	}
	response, err := e.SendEmailEndpoint(ctx, request)
	if err != nil {
		return
	}
	return response.(SendEmailResponse).S0, response.(SendEmailResponse).E1
}
