import express, {Express, Request, Response}  from "express";
import {spawn, ChildProcess} from "child_process";
import { type } from "os";

// Setup the Server
const app: Express = express();
const PORT: number = 8080;

//Types
type coord = {
    x: number;
    y: number;
} | string;
type cars = {
    [id: number | string]: coord[] | number;
    totalCars: number;
};

// Default Route for Python
app.get("/", (req: Request, res: Response) => {
    // Set Up Python
    const agentPy: ChildProcess = spawn("python", ["./script/main.py"]);

    agentPy.stdout.on("data", data => {
        // tslint:disable-next-line:no-console
        console.log(data.toString());
        res.send(data.toString());
    });

    agentPy.on("close", (code: number, args: any[]): void => {
        // tslint:disable-next-line:no-console
        console.log(`child process close all stdio with code: ${code} args: ${args}`);
    });
});

// start the Express server
app.listen(PORT, () => {
    // tslint:disable-next-line:no-console
    console.log(`⚡server started at http://localhost:${PORT}`);
});