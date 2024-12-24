"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppDataSource = void 0;
var typeorm_1 = require("typeorm");
var dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
console.log("dsdsd---", process.env.DB_HOST);
exports.AppDataSource = new typeorm_1.DataSource({
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
//# sourceMappingURL=datasource.js.map