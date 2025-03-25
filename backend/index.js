import express from 'express'
import cors from 'cors'
import 'dotenv/config'
import Stripe from 'stripe'
const stripe = new Stripe(process.env.STRIPE_SK)

const app =  express()
app.use(cors())
app.use(express.json())

//http://localhost:5000
app.get('/' , (req,res)=>{ res.json({message:"hello from nodejs server"})})
//http://localhost:5000/create-payment-intent
app.post('/create-payment-intent' ,async(req,res)=>{
    let {total} = req.body
    try{
        const paymentIntents = await stripe.paymentIntents.create({
            amount:total*100, //2000.00 
            currency:"usd",
            payment_method_types:['card']   })
        res.status(200).json({clientSecret :  paymentIntents.client_secret})
    }   
    catch(err){  res.status(400).json({messge:err.message})   }
})

const port =  process.env.PORT || 2000
app.listen(port ,()=>console.log(`server started at http://localhost:${port}`))
