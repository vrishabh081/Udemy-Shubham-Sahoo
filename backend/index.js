const express = require("express");
const app = express();
const PORT = 8080;
const cors = require("cors");
const dbConnection = require("./config/database");
const router = require("./routes/auth");

// routes and middleware-
app.use(cors())
app.use(express.json());
app.use("/", router);

// server-
app.listen(PORT, async()=>{
    try
    {
        await dbConnection;
        console.log("Database connected successfully");
        console.log(`PORT is running on ${PORT}`);
    }
    catch(error)
    {
        console.log(`error: ${error}`);
        console.log("Database not connected");
    }
})