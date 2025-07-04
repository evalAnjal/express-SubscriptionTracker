import express from 'express'

const app = express()

app.get('/',(req,res)=>{
res.send("Welcome to Subscription Tracker API")
})

app.listen(3000,()=>{console.log("server running on 3000")})

export default app;