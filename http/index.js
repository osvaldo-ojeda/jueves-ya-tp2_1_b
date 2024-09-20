import http from "node:http";
// console.log(`🚀 ~ http:`, http)

const server = http.createServer((request, response) => {
     if (request.method==="GET") {
               response.end("hola get")
     }
     if (request.method==="POST") {
               response.end("hola post")
     }
});
// console.log(`🚀 ~ server:`, server)

server.listen(8080, () => {
  console.log(`🚀 ~ server.listen ~ server: localhost:${8080}`);
});
