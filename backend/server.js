const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
const mongoose = require("mongoose");
const { readdirSync } = require("fs");
const app = express();

dotenv.config();
app.use(cors());

//routes
readdirSync("./routes").map((r) => app.use("/", require("./routes/" + r)));

//database
mongoose.connect(process.env.DATABASE_URL)
.then(() => console.log("MongoDB connected"))
.catch((err)=> console.log("MongoDB connection failed", err));


const PORT = process.env.PORT || 8000;
app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`);
});
