import express from "express";
import routes from "./routes/routes.js";


const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));


app.use("/app", routes);

app.use((req, res, next) => {
  res.status(404).send({
    success: false,
    message: "not found",
  });
});

app.listen(8080, () => {
  console.log(`🚀 ~ app.listen ~ localhost:${8080}`);
});
