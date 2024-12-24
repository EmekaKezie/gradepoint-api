"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = require("express");
var userModule_1 = require("../modules/userModule");
var router = (0, express_1.Router)();
router.get("/", userModule_1.getUsers);
router.post("/", userModule_1.createUser);
exports.default = router;
//# sourceMappingURL=userRoute.js.map