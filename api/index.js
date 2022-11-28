"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const child_process_1 = require("child_process");
// Setup the Server
const app = (0, express_1.default)();
const PORT = 8080;
// Default Route for Python
app.get("/", (req, res) => {
    // Set Up Python
    const agentPy = (0, child_process_1.spawn)("python", ["./script/main.py"]);
    agentPy.stdout.on("data", data => {
        // tslint:disable-next-line:no-console
        console.log(data.toString());
        res.send(data.toString());
    });
    agentPy.on("close", (code, args) => {
        // tslint:disable-next-line:no-console
        console.log(`child process close all stdio with code: ${code} args: ${args}`);
    });
});
// start the Express server
app.listen(PORT, () => {
    // tslint:disable-next-line:no-console
    console.log(`⚡server started at http://localhost:${PORT}`);
});
//# sourceMappingURL=index.js.map