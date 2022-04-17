require("dotenv").config();
const express = require("express");
const dbConnect = require("./dbConfig/dbConfig");
const errorHandler = require("./middleware/errorHandler");

const app = express();
dbConnect();

app.use(express.json());
app.use("/doctors", require("./routes/doctorRoutes"));

app.use(errorHandler);
const PORT = process.env.PORT || 3002;

app.listen(PORT, () => console.log(`Server is running on port:${PORT}`));
