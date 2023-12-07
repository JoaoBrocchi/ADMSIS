import { Jwt } from "jsonwebtoken"

import Funcionario from "../models/FuncionarioModel.js"

const getFuncionarioByToken = async(token)=>{
    const decoded = jwt.verify(token,process.env.SECRET)
    
    return  await Funcionario.findByPk(decoded.id);
    
}

export default getFuncionarioByToken;