const PORT=process.env.PORT || 8080
import {join} from "path"
import dotenv from "dotenv"

const dotenvConfig=join(process.cwd(),"src",".env")
dotenv.config({path:dotenvConfig})
const sequelizeConfig={
  database:process.env.PG_DATABASE,
  username:process.env.PG_USER,
  password:process.env.PG_PASSWORD,
  host:process.env.PG_HOST,
  dialect:"postgres"
}
export{
  PORT,
  sequelizeConfig,
  dotenvConfig
}