import express from "express";
import cors from "cors";
import elasticsearch from "@elastic/elasticsearch";
import allRoutes from "./src/routes/allRoutes.js";
import insertData from "./src/method/insertData.js";

const client = new elasticsearch.Client({
  nodes: ["http://localhost:9200"],
  log: "trace",
});
const port = 3000;
const app = express();
app.use(
  cors({
    origin: "*",
  })
);
app.use(express.json());

allRoutes({ app });

insertData(client);

app.listen(port, () => {
  console.log("App listening on port : " + port + " at " + new Date());
});
