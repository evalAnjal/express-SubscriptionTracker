import {Router} from 'express';

const subscriptionRouter = Router();

subscriptionRouter.get('/', (req,res)=>{res.send('GET all subscriptions')})

subscriptionRouter.get('/:id', (req,res)=>{res.send('GET  subscription based on ID')})

subscriptionRouter.post('/', (req,res)=>{res.send('CREATE  subscriptions')})

subscriptionRouter.put('/:id', (req,res)=>{res.send('UPDATE  subscription')})

subscriptionRouter.delete('/:id', (req,res)=>{res.send('DELETE  subscriptions')})

subscriptionRouter.get('/user/:id', (req,res)=>{res.send('GET all subscriptions of a user')})

subscriptionRouter.put('/:id/cancel', (req,res)=>{res.send('CANCEL  subscription')})

subscriptionRouter.get('/upcomming-renewals', (req,res)=>{res.send('GET upcomming  subscription')})








export default subscriptionRouter;