/* eslint-disable @typescript-eslint/no-var-requires */
import "reflect-metadata";
import express, { Response as ExResponse, Request as ExRequest, json, urlencoded } from "express";
import swaggerUi from "swagger-ui-express";
import morgan from "morgan";
import { RegisterRoutes } from "../build/routes";
import 'dotenv/config'

export const app = express();

app.use(
  urlencoded({
    extended: true,
  })
);
morgan(':method :url :status :res[content-length] - :response-time ms')
app.use(json());

app.use("/docs", swaggerUi.serve, async (_req: ExRequest, res: ExResponse) => {
  return res.send(
    swaggerUi.generateHTML(await import('./../build/swagger.json'))
  );
});

RegisterRoutes(app);
