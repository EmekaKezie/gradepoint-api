"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var dotenv_1 = __importDefault(require("dotenv"));
var datasource_1 = require("./datasource");
var userRoute_1 = __importDefault(require("./routes/userRoute")); // Correctly importing the userRoute
dotenv_1.default.config();
var app = (0, express_1.default)();
var PORT = process.env.PORT || 4000;
app.use(express_1.default.json());
app.use("/api/users", userRoute_1.default); // Use the userRoute for handling requests to /api/users
datasource_1.AppDataSource.initialize()
    .then(function () {
    console.log("Database connected successfully!");
    app.listen(PORT, function () {
        console.log("Server running on http://localhost:".concat(PORT));
        console.log("dsdsd", process.env.DB_HOST);
    });
})
    .catch(function (error) { return console.error("Database connection error:", error); });
//# sourceMappingURL=index.js.map