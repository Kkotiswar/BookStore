const express = require("express");
const ejs = require("ejs");
var path = require('path');


const app = express();


app.set("view engine", "ejs");
app.use(express.static("public"));

app.get("/",(req,res)=>{
  res.render("wishlist");
});

app.get("/recent",(req,res)=>{
    res.render("recentorders")
});

app.get("/bill",(req,res)=>{
    res.render("bill")
});

app.get("/payment",(req,res)=>{
    res.render("payment")
});

app.get("/login",(req,res)=>{
    res.render("login");
});

app.post("/login",(req,res)=>{
    res.redirect("index");
})

app.get("/signup",(req,res)=>{
    res.render("signup");
});

app.get("/verify",(req,res)=>{
    res.render("verify");
});

app.post("/verify",(req,res)=>{
    res.redirect("login")
})

app.get("/index",(req,res)=>{
    res.render("index");
});

// app.get("trans"),(req,res)=>{
//     res.sendFile("transaction.html");
// }

// app.get("/paid"),(req,res)=>{
//     res.render("paid");
// }


app.listen(5500,()=>{

    console.log("Server started in port 3000");
})