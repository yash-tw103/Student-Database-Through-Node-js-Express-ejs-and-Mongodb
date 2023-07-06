const express = require("express");
const connectDb = require("./config/dbConnection");
const port = 5000;

const app = express();
connectDb();
app.use(express.urlencoded({extended : false}));

//router
app.use("/student", require("./routes/web"));


//middlewares


app.use(express.static("public"));
app.set('view engine', 'ejs');


app.listen(port , ()=>{
    console.log(`Server is running on the port : ${port}`);
})