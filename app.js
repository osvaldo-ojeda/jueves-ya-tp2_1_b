import express from "express";
import routes from "./routes/routes.js";
import { logger } from "./midlewares/logger.js";
import morgan from "morgan"

const app = express();

// function logger(req, res, next) {
//   console.log(`🚀 ~ logger ~ req:`, req.url);
//   next();
// }
// app.use((req, res, next) => {
//   console.log(`🚀 ~ logger ~ req:`, req.url);
//   next();
// });

app.use(logger);
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(morgan('tiny'))


// app.use("/app", logger,  routes);
app.use("/app", routes);

app.use((req, res, next) => {
  res.status(404).send({
    success: false,
    message: "not found",
  });
});

app.listen(8000, () => {
  console.log(`🚀 ~ app.listen ~ localhost:8000`);
});
