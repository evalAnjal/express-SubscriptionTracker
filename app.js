import express from 'express'
import {PORT} from './config/env.js'
import authRouter from './routes/auth.routes.js'
import userRouter from './routes/user.routes.js'
import subscriptionRouter from './routes/subscription.routes.js'

const app = express()

app.use(express.json())

app.get('/',(req,res)=>{
res.send("Welcome to Subscription Tracker API")
})

app.use('/api/v1/auth',authRouter)
app.use('/api/v1/users', userRouter)
app.use('/api/v1/subscriptions',subscriptionRouter)

app.listen(PORT,()=>{console.log(`server running on ${PORT}`)})

export default app;