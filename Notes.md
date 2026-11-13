# SETTING UP A SERVER WITH HTTP

### Introduction to HTTP
HTTP, short for Hypertext Transfer Protocol, is a request-response protocol that serves as the foundation of data exchange and computing within the client-server computing model.

Simpler terms is that HTTP helps facilitate the exchange of information between a client (i.e. website, mobile app) and a server.

 1. The client submits an HTTP request message to the server.
 2. The sever receives the HTTP request, performs some function on behalf of the client according to the request.
 3. The server returns a response message to the client containing important information about the processing of the request.

```text
        Client                              Server
   (Running Browser)                 (Listening at port 80)
            |                                   |
            |---------- HTTP Request ---------->|
            |                                   |
            |<--------- HTTP Response ----------|
```

```mermaid
flowchart LR
  Client["Client<br/>Running Browser"]
  Server["Server<br/>Listening at port 80"]
  Client -->|HTTP Request| Server
  Server -->|HTTP Response| Client
```
### The Structure of HTTP
HTTP requests and responses have specific structures to help facilitate the exchange of information between a client and a server.

### Requests
1. HTTP Method: The Http method is usually a verb, such as GET or POST, or a noun such as OPTIONS or HEAD
2. Path: The path denotes the path of the resource relative to the root URL. for example, making a GET request to **https://codeacademy.com/api/lessons** would strip common elements such as the protocol (**https://) and domain (codeacademy.com,) leaving the path of /api/lessons**
3. HTTP Protocol Version: The version of the HTTP protocol (I.e. HTTP/1.1, HTTP/2, and HTTP/3)
4. Headers: Headers are optional information that may be important in processing a request by a server.
5. Body: The body contains data required to be sent to the server to process a request, most common to see a body attached to requests with verbs such as POST, PUT, and PATCH.

### Responses
Responses are comprised of elements similar to those in requests, with a few differences.
1. HTTP Protocol Version: The version of the HTTP protocol
2. Status Code: The status code indicates whether or not the request was successful and why.
3. Status Message: The status message provides a short description of the corresponding status code.
4. Header: These response header are similar to those provided in a request
5. Body: The body of a response contains data corresponding to the fetched resource.


### The movement of HTTP
The requests/responses contain all of the information needed to communicate with other entities on the web efficiently, but how do these messages actually make it to their destinations? Just as a letter requires a carrier to arrive at its destination, so too does an HTTP requesr.

#### TCP
The most common transport protocol used in conjunction with HTTP is **TCP**
stands for Transmission Control Protocol and allows two hosts to connect and exchange data streams, guaranteeing the delivery of data packets in the order as they were sent.

Before any other data is sent, the client and server establish a connection via a method called **handshaking**. This connection means that TCP ensures that packets are delivered reliably and free from errors

#### UDP
UDP, or User Datagram Protocol, is a less commonly used transport protocol. It operates using a connectionless communication model, requiring no handshaking

#### TLS 
TLS, also known as Transport Layer Security, is a widely adopted security protocol designed to facilitate secure data transmission via encryption.
TLS evolved out of the encryption protocol known as SSL (Secure Sockets Layer)
