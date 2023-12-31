import express from "express";
import db from "./Config/dbConnect.js";
import routes from "./routes/index.js";
import manipuladorDeErros from "./Middlewares/manipuladorDeErros.js";
import manipulador404 from "./Middlewares/manipulador404.js";

db.on("error", console.log.bind(console, "Erro de conexão"));
db.once("open", () => {
    console.log("conexão com o banco feita com sucesso");
});

const app = express();
app.use(express.json());
routes(app);

app.use(manipulador404);
// eslint-disable-next-line no-unused-vars
app.use(manipuladorDeErros);

export default app;
