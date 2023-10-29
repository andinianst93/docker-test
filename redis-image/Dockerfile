# Use an existing docker image as a base/installing OS
FROM alpine

# download and install a dependency
RUN apk add --update redis gcc

# tell the image what to do when it starts as a container
CMD ["redis-server"]
