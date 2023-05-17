const express = require("express");
const clickhouse = require("./client");

const app = express();

app.use(express.json());

app.post("/query", async (req, res) => {
  try {
    if (!req.body.query) throw new Error("Query is required");

    const result = await clickhouse.query({
      query: req.body.query,
      format: "JSONEachRow",
    });
    const data = await result.json();
    return res.json({
      data,
    });
  } catch (e) {
    console.log(e);
    return res.status(400).json({
      message: e.message,
    });
  }
});

app.listen(8191, () => {
  console.log("app started listening on port 8191");
});
