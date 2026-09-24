const express = require('express')
const app = express();
const mongoose = require("mongoose")
require("dotenv").config();
// const port = process.env.PORT;
const port = process.env.PORT || 2120;


const student = [
    {
        firstName: "Ola",
        lastName: " petesm",
        age: 20
    },
     {
        firstName: "Olaiya",
        lastName: "Ade",
        age: 10
    },
     {
        firstName: "Ajoke",
        lastName: "pelumi",
        age: 29
    },
     {
        firstName: "Olaitan",
        lastName: "Rukky",
        age: 10
    },
];
app.set("view engine", "ejs")
app.use(express.urlencoded({extended: true}))
app.use(express.json())
app.use(express.static("public"));

app.get('/student',(req, res)=>{
    res.json(student)
} )
app.get('/any', (req, res)=>{
    res.send("welcome")
})
app.get('/welcome', (req, res)=>{
    res.sendFile(__dirname + "/welcome.html")
})
app.get("/signup", (req, res) => {
    res.render("signup");
});

app.post("/signup", (req, res) => {

    console.log(req.body);

    res.render("signin");

});


app.post("/dashboard", (req, res) => {
    console.log(req.body);
    res.render("dashboard");

});
// app.post("/dashboard", (req, res)=>{
//     console.log(req.body)
// })

app.listen(port,"0.0.0.0", ()=>{
    console.log("lo")
    console.log(123);
})
const DBURI = process.env.DB_URI
mongoose.connect(DBURI).then(()=>{
    console.log("connecting")
}).catch((err)=>{
    console.log()
})
