import {Router} from 'express'

const authRouter = Router();

authRouter.post('/sign-up',(req,res)=>{
    res.send("gg")
})

export default authRouter;