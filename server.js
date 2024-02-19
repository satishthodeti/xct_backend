const express = require("express");
const { port } = require("./config");
const cors = require("cors");
const cookieParser = require("cookie-parser");
const routes = require("./routes");

const swaggerUi = require("swagger-ui-express"),
  swaggerDocument = require("./swagger.json");

const PORT = port || 8000;

const app = express();

const whitelist = ["http://localhost:3000"]
const corsOptions = {
  origin: function (origin, callback) {
    if (!origin || whitelist.indexOf(origin) !== -1) {
      callback(null, true)
    } else {
      callback(new Error("Not allowed by CORS"))
    }
  },
  credentials: true,
}
app.use(cors(corsOptions));

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerDocument));

app.use("/api/v1", routes);

app.listen(PORT, () => console.dir(`Server is connected on ${PORT}`));

process.on('unhandledRejection', (err, promise) => {
  console.error(`Error: ${err.message}`);
  console.error(err.stack);
});

