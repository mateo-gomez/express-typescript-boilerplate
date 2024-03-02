import express, { Request, Response } from "express";
import "dotenv/config";
import helmet from "helmet";

const app = express();

app.use(helmet());
app.use(express.json());

app.get("/ping", (_request: Request, response: Response) => {
	console.log("someone pinged her! " + new Date().toLocaleDateString());

	response.send("pong");
});

export default app;
