import express from "express";
import cors from "cors";

const app = express();
app.use(
  cors({
    origin: "*",
  })
);
app.use(express.json());

const port = 3000;

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.listen(port, () => {
  console.log("App listening on port : " + port + " at " + new Date());
});
