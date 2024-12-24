import { DataSource } from "typeorm";
import { gradepoint_user } from "./entities/gradepoint_user";
import dotenv from "dotenv";

dotenv.config();

console.log("dsdsd---", process.env.DB_HOST)

export const AppDataSource = new DataSource({
  type: "mysql",
  host: process.env.DB_HOST,
  port: Number(process.env.DB_PORT),
  username: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
  synchronize: true,
  logging: false,
  //entities:[gradepoint_user],
  entities: [__dirname + "/entities/*.ts"],
  migrations: [],
  subscribers: [],
});
