import {Router} from 'express';

const userRouter = Router();

userRouter.get('/',(req,res)=>{
    res.send("GET all users")
})

userRouter.get('/:id',(req,res)=>{
    res.send("GET  user based on ID")
})

userRouter.post('/',(req,res)=>{
    res.send("CREATE new user")
})

userRouter.put('/:id',(req,res)=>{
    res.send("UPDATE  user based on ID")
})

userRouter.delete('/:id',(req,res)=>{
    res.send("DELETE  user based on ID")
})

export default userRouter;