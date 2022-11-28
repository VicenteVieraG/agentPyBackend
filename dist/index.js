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
// Define a route handler for the default home page
app.get("/", (req, res) => {
    // Set Up Python
    const agentPy = (0, child_process_1.spawn)("python", ["./script/main.py"]);
    let d;
    agentPy.stdout.on("data", data => {
        // tslint:disable-next-line:no-console
        console.log(data.toString());
        d = data.toString();
    });
    agentPy.on("close", code => {
        // tslint:disable-next-line:no-console
        console.log(`child process close all stdio with code ${code}`);
        res.send(d);
    });
    // res.send("Hola Crayola xd\n");
});
// start the Express server
app.listen(PORT, () => {
    // tslint:disable-next-line:no-console
    console.log(`⚡server started at http://localhost:${PORT}`);
});
const steps = {
    // iterations
    "0": {
        // Cars
        "0": {
            x: 777,
            y: 777 // number
        }
    }
};
//# sourceMappingURL=index.js.map