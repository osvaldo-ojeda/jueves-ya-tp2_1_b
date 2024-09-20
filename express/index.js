import express from "express";
// console.log(`🚀 ~ express:`, express)

const server = express();
// console.log(`🚀 ~ server:`, server)

server.use(express.urlencoded({ extends: true }));
let users = [
  { nombre: "Emanuel", id: 1 },
  { nombre: "Rodolfo", id: 2 },
  { nombre: "Martin", id: 3 },
  { nombre: "Carolina", id: 4 },
];
server.use(express.static("public"));
server.get("/user", (request, response) => {
  //   console.log(`🚀 ~ server.get ~ request:`, request);
  response.send(users);
});
server.get("/user/:id", (request, response) => {
  //   console.log(`🚀 ~ server.get ~ request:`, request);
  // const id= request.params.id
  const { id } = request.params;
  const data = users.find((user) => user.id === parseInt(id));
  response.send(data);
});
server.post("/user", (request, response) => {
  //   console.log(`🚀 ~ server.get ~ request:`, request);
  const { nombre } = request.body;
  const data = { nombre, id: users.length + 1 };
  //   console.log(`🚀 ~ server.post ~ nombre:`, nombre);
  users.push(data);
  response.send(data);
});
server.put("/user/:id", (request, response) => {
  //   console.log(`🚀 ~ server.get ~ request:`, request);
  //   const { nombre } = request.body;
  //   const { id } = request.params;
  //   users.forEach((element) => {
  //     if (element.id === parseInt(id)) {
  //       element.nombre = nombre;
  //     }
  //   });
  //   response.send("update user");
  const id = parseInt(request.params.id);
  const usuario = users.find((u) => u.id === id);
  if (usuario) {
    const { nombre } = request.body;
    usuario.nombre = nombre;
    response.send(usuario);
  } else {
    response.status(404).send("Usuario no encontrado");
  }
});
server.delete("/user/:id", (request, response) => {
  //   console.log(`🚀 ~ server.get ~ request:`, request);
  const id = parseInt(request.params.id);
  const index = users.findIndex((u) => u.id === id);
  console.log(`🚀 ~ server.delete ~ index:`, index)
  if (index!=-1) {
    users.splice(index, 1);
    response.startus(200).send("usuario eliminado  ");
  } else {
    response.status(404).send("Usuario no encontrado");
  }
});

server.listen(8080, () => {
  console.log(`🚀 ~ server.listen ~ 8080`);
});
