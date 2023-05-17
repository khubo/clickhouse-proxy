const { createClient } = require("@clickhouse/client");

const client = createClient({
  //   username: "default",
  //   password: "password",
  database: "default",
  host: "http://192.168.1.34:8123",
});

module.exports = client;
