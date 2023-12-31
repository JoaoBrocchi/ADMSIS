import { Sequelize } from "sequelize"; // importar o sequelize

const dotenvModule = await import("dotenv");
const dotenv = dotenvModule.default;

// Agora você pode usar o dotenv normalmente
dotenv.config();
// Agora você pode usar o dotenv normalmente
const dbName = process.env.DB_NAME; // passar os dados do .env para as constantes
const dbUser = process.env.DB_USER;
const dbHost = process.env.DB_HOST;
const dbPassword = process.env.DB_PASSWORD;

const sequelize = new Sequelize(dbName, dbUser, dbPassword, {
  //passar os dados para o sequelize
  dialect: "mysql", //informar o tipo de banco que vamos utilizar
  host: dbHost, //o host, neste caso estamos com um banco local
});

export default sequelize; //exportar