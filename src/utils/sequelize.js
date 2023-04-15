import { Sequelize} from "sequelize";
import { sequelizeConfig } from "../config/config.js";
const sequelize=new Sequelize(sequelizeConfig)

async function startSequelize(models){
  try {
    await sequelize.authenticate()
    console.log('Connection has been established successfully.');
    await models[0].sync()
  } catch (error) {
    throw error
  }
}
export{
  sequelize,
  startSequelize
}