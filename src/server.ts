import { app } from "./app";
import { createConnection } from "typeorm"
import dbConfig from "./database/config"

const port = process.env.PORT

createConnection(dbConfig)
  .then((_connection) => {
    app.listen(port, () => {
      console.log("Server is running on port", port);
    });
  })
  .catch((err) => {
    console.log("Unable to connect to db", err);
    process.exit(1);
  });