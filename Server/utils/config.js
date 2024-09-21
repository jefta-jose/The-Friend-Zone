import sql from 'mssql'
import dotenv from 'dotenv'
import Logger from './Logger.js'

dotenv.config();

const { SQL_USER, SQL_PASSWORD, SQL_SERVER, SQL_DB, SQL_SERVER_PORT, SQL_ENCRYPT, SQL_TRUST_SERVER_CERTIFICATE } = process.env;


const sqlConfig = {
    user: SQL_USER,
    password: SQL_PASSWORD,
    server: SQL_SERVER,
    database: SQL_DB,
    port: Number(SQL_SERVER_PORT),
    options: {
      encrypt: Boolean(SQL_ENCRYPT),
      trustServerCertificate: Boolean(SQL_TRUST_SERVER_CERTIFICATE)
    }
  }

let appPool;
let poolRequest;

try {
    appPool = await sql.connect(sqlConfig)
    poolRequest = ()=> appPool.request();

    if(appPool){
        Logger.info("connected to sql server");
    }
} catch (error) {
    Logger.error("Failed to connect to sql server", error);
}

export {poolRequest, sql};
