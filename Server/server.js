const express = require("express")
const app = express()

const uri = "mongodb+srv://EnsiJE:eje@ejeblogs.o98mv.mongodb.net/ejewebsite?retryWrites=true&w=majority"
const cors = require('cors')
const morgan = require("morgan")

const mongoose = require("mongoose");
const Blog = require("./models/blog");

app.use(express.json())
app.use(express.urlencoded())
app.use(morgan('tiny'));

const corsOptions = {
    origin: 'http://localhost:3000',
    credentials: true,
    optionSuccessStatus: 200
}
app.use(cors(corsOptions));

mongoose.connect(uri,{ useNewUrlParser: true, useUnifiedTopology: true }).then(()=>{
    console.log("connected")
    app.listen(port,()=>{
        console.log(`server is running on port ${port}`)
    })
}).catch((err)=>{
    console.log("error while connecting to db..")
})


app.use("/blogs",require("./router/api/blog"))
app.use("/signup",require("./router/api/signup"));
app.use("/login",require("./router/api/login"));
app.use("/users",require("./router/api/users"));
app.use("/checkToken",require("./router/api/checkToken"));



const port = 5000 || process.env.PORT
