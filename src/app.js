import express from "express";
import db from "./config/dbConfig.js";
import routes from "./routes/index.js";
import manipuladorErros from "./middlewares/manipuladorErros.js";
import manipulador404 from "./middlewares/manipulador404.js";

db.on("error", console.error.bind(console, "Falha de autenticação."));
db.once("open", () => {
    console.log("Banco de dados conectado.");    
});

const app = express();
routes(app);
app.use(manipulador404)

app.use(manipuladorErros);

export default app;