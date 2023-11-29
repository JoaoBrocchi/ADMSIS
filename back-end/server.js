import  Express  from "express";
import sequelize from "./db/connection.js"

const app = Express()


app.listen(3000,(req,res)=>{
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


