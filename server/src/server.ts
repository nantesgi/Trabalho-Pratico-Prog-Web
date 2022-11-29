import cors from "cors";
import express from "express";
import { queryParser } from "express-query-parser";
import path from "path";
import swaggerUi from "swagger-ui-express";

import { router } from "./routes";
import swaggerFile from "./swagger.json";
import globalErrorHandler from "../utils/errorHandling";

const app = express();

app.use(express.json());
app.use(
  queryParser({
    parseNull: true,
    parseUndefined: true,
    parseBoolean: true,
    parseNumber: true,
  })
);
app.use(cors());

app.use("/images", express.static(path.join(__dirname, "../tmp")));

app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerFile));

app.use(router);

app.use(globalErrorHandler);

app.use("*", (req, res) => {
  res.status(404).send("Not Found!");
});

app.listen(process.env.PORT || 3000, () => console.log("Server is running!"));
