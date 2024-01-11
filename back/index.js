import express from "express";
import cors from "cors";
import elasticsearch from "@elastic/elasticsearch";
import allRoutes from "./src/routes/allRoutes.js";
import insertData from "./src/method/insertData.js";

// INIT CONST
const elasticHost = "elasticsearch";
const elasticPort = 9200;
const port = 3000;
const app = express();
let client = null;

// INIT APP
app.use(
  cors({
    origin: "*",
  })
);
app.use(express.json());

// METHODS
const createElasticsearchClient = async () => {
  let retryCount = 0;
  const maxRetries = 10;

  while (retryCount < maxRetries) {
    try {
      client = new elasticsearch.Client({
        nodes: [`http://${elasticHost}:${elasticPort}`],
        log: "trace",
      });

      // Test de la connexion
      await client.ping();

      return client;
    } catch (error) {
      retryCount++;
      // Attendez avant de réessayer
      await new Promise((resolve) => setTimeout(resolve, 2000));
    }
  }

  throw new Error("Failed to connect to Elasticsearch after multiple retries.");
};

createElasticsearchClient()
  .then((client) => {
    allRoutes({ app, client });
    insertData(client);

    app.listen(port, () => {
      console.log("App listening on port : " + port + " at " + new Date());
    });
  })
  .catch((error) => {
    console.error(error.message);
    process.exit(1);
  })
  .finally(console.log("Connected to Elasticsearch successfully!"));
