import express from 'express';
import bodyParser from 'body-parser';
import ClienteRouter from "./routes/ClienteRoute.js"
import ContaRouter from "./routes/ContaRoute.js"
import FinancialTransationsRouter from "./routes/FInancialTransitionController.js"
import IterationsRouter from "./routes/IterationRoutes.js"
import HistoryTransationsRouter from "./routes/TransationsRoute.js"
import sequelize from './db/connection.js';
import FuncionarioRouter from "./routes/FuncionarioRoute.js"
const dotenvModule = await import("dotenv");
const dotenv = dotenvModule.default;
const app = express();
const PORT = process.env.PORT
app.use(express.json());
app.use(bodyParser.json());
app.use("/",ClienteRouter)
app.use("/",ContaRouter)
app.use("/",FinancialTransationsRouter)
app.use("/",IterationsRouter)
app.use("/",HistoryTransationsRouter)
app.use("/",FuncionarioRouter)


app.listen(PORT,(req,res)=>{
    sequelize
  .authenticate()
  .then(() => {
    console.log('Conexão estabelecida com sucesso.');
  })
  .catch((error) => {
    console.error('Erro ao conectar-se ao banco de dados:', error);
  })
  
})






