"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var serverless_http_1 = __importDefault(require("serverless-http"));
var express_1 = __importDefault(require("express"));
var dotenv_1 = __importDefault(require("dotenv"));
var datasource_1 = require("../datasource");
var userRoute_1 = __importDefault(require("../routes/userRoute"));
dotenv_1.default.config();
var app = (0, express_1.default)();
app.use(express_1.default.json());
app.use("/api/users", userRoute_1.default);
datasource_1.AppDataSource.initialize()
    .then(function () { return console.log("Database connected successfully!"); })
    .catch(function (error) { return console.error("Database connection error:", error); });
module.exports.handler = (0, serverless_http_1.default)(app);
//# sourceMappingURL=netlify.js.map