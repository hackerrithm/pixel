FROM golang

RUN mkdir -p /go/src/github.com/hackerrithm/pixel

ADD . /go/src/github.com/hackerrithm/pixel

RUN go get  -t -v ./...
RUN go get  github.com/canthefason/go-watcher
RUN go install github.com/canthefason/go-watcher/cmd/watcher

ENTRYPOINT  watcher -run github.com/hackerrithm/pixel/bugs/cmd  -watch github.com/hackerrithm/pixel/bugs
