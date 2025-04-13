const express = require("express")
const cors=require("cors")

const app=express()
app.use(cors())

const arrayData=[
    {
        id:1,
        name:"Sonali",
        title:"Singh",
        location:"Bengaluru"
    },
    {
        id:2,
        name:"Sonali",
        title:"Singh",
        location:"Bengaluru"
    },
    {
        id:3,
        name:"Sonali",
        title:"Singh",
        location:"Bengaluru"
    },
    {
        id:4,
        name:"Sonali",
        title:"Singh",
        location:"Bengaluru"
    },
]

app.get("/",(req,res)=>{
    res.json({"status":"Server is healthy"})
})

app.get("/data",(req,res)=>{
    res.json({data:arrayData})
})


app.listen(3011,()=>{
    console.log("server is running")
})