const express = require("express");
const { connectDB } = require("./utils/connect");
const dotenv = require("dotenv");
const cors=require('cors');
const portfolioRoute = require("./routes/portfolioRoute");

dotenv.config();

const app = express();
app.use(cors());

connectDB();
app.use(express.json());
app.use("/api/portfolio", portfolioRoute);

const port = process.env.PORT || 5000;

app.listen(port, () => {
  console.log(`server is running on port ${port}`);
});
