import express from 'express';
import bodyParser from 'body-parser';
import routes from './routes.js';
import ClienteRouter from "./routes/ClienteRoute"
import ContaRouter from "./routes/ContaRoute.js"
import FinancialTransationsRouter from "./routes/FInancialTransitionController.js"
import IterationsRouter from "./routes/IterationRoutes.js"
import HistoryTransationsRouter from "./routes/TransationsRoute.js"

const dotenvModule = await import("dotenv");
const dotenv = dotenvModule.default;
const app = express();
const PORT = process.env.PORT
app.use(bodyParser.json());







app.listen(PORT,(req,res)=>{
    sequelize
  .authenticate()
  .then(() => {
    console.log('Conexão estabelecida com sucesso.');
  })
  .catch((error) => {
    console.error('Erro ao conectar-se ao banco de dados:', error);
  })
  .finally(() => {
    // Fechar a conexão após os testes
    sequelize.close();
  });
})


