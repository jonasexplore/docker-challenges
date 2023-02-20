FROM golang:alpine as build

WORKDIR /go/src/hello

COPY . .

RUN CGO_ENABLED=0 go build -o /hello hello-world.go

FROM scratch

COPY --from=build /hello /hello

CMD ["/hello"]