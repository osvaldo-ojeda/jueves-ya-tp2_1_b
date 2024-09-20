import express from "express";
// console.log(`🚀 ~ express:`, express)

const server = express();
// console.log(`🚀 ~ server:`, server)

server.use(express.urlencoded({extends:true}))

server.use(express.static('public'))
server.get("/user", (request, response) => {
  console.log(`🚀 ~ server.get ~ request:`, request);
  response.send("get all user");
});
server.get("/user/:id", (request, response) => {
  console.log(`🚀 ~ server.get ~ request:`, request);
  response.send("get user by id?");
});
server.post("/user", (request, response) => {
  console.log(`🚀 ~ server.get ~ request:`, request);
  response.send("create user");
});
server.put("/user/:id", (request, response) => {
  console.log(`🚀 ~ server.get ~ request:`, request);
  response.send("update user");
});
server.delete("/user/:id", (request, response) => {
  console.log(`🚀 ~ server.get ~ request:`, request);
  response.send("delete user");
});

server.listen(8080, () => {
  console.log(`🚀 ~ server.listen ~ 8080`);
});
