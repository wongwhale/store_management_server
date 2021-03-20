const express = require('express')
const app = express()
const server = require('http').createServer(app)
const mongoose = require('mongoose')
const apiRoute = require('./route/api')
const cors = require("cors");
const morgan = require("morgan");
const bodyParser = require("body-parser");

mongoose.connect(
    `mongodb+srv://wongwhal:OG3LMW5SubVdI6Kh@snackanddrink.aejrm.mongodb.net/myFirstDatabase?retryWrites=true&w=majority`,
    {
        useUnifiedTopology : true,
        useNewUrlParser : true,
        useCreateIndex : true
    },
    function (err) {
        if(err) {
            console.log('connect database error :' , err);
        }else{
            console.log('connect database success');
        }
    }
)

app.use(cors({ credentials: true, origin: true }));
app.use(morgan("dev"));
app.use(bodyParser.json());

app.get('/' , (req , res) => {
    res.json('res')
})

app.use('/api' , apiRoute)

server.listen( process.env.PORT || 5001 , () => {
    // console.log(`server started at http://localhost:5001`);
})