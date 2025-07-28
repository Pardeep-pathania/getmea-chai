"use server"

import connectDB from "@/app/db/connectDB"
import Payment from "@/app/models/Payment"
import User from "@/app/models/User"
import Razorpay from "razorpay"


export const initiate = async (amount, to_username, paymentform) =>{
    await connectDB()

     // fetch the secret of the user who is getting the payment 
        let user = await User.findOne({username: to_username})
        const secret = user.razorpaysecret

    var instance = new Razorpay({key_id: user.razorpayid,
        key_secret: secret
    })
    instance.orders.create({
        amount: 50000,
        currency: "INR",
        receipt: "receipt#1",
        notes:{
            key1: "value3",
            key2: "value2",
        }
    })
    let options = {
        amount: Number.parseInt(amount),
        currency: "INR",
    }

    let x = await instance.orders.create(options)

    // create a payment object which shows a pending payment in the database 
    await Payment.create({
        oid: x.id, amount:amount/100,
        to_user: to_username,
        name: paymentform.name, message: paymentform.message
    })
    return x
}

export const fetchuser = async (username) =>{
    await connectDB()
    let u = await User.findOne({username: username})
    let user = u.toObject({flattenObjectIds: true})
   
    return user
}

export const fetchpayments = async (username) => {
    await connectDB()
    let p = await Payment.find({to_user: username, done: true}).sort({amount: -1}).lean()
    // Convert _id to string for each payment
    return p.map(payment => ({
        ...payment,
        _id: payment._id?.toString ? payment._id.toString() : payment._id
    }))
}

export const updateProfile = async(data, oldusername)=>{
    await connectDB()
    let ndata = Object.fromEntries(data)

    // if the username is being updated, check if username is available
    if(oldusername !== ndata.username ){

        let u = await User.findOne({username: ndata.username})
        if(u){
            return {error: "Username already exists"}
        }
         await User.updateOne({email:ndata.email}, ndata)

    // nOw update all the usernames in the payments collection
        await Payment.updateMany({to_user: oldusername}, {to_user: ndata.username})
    }
else{
    await User.updateOne({email:ndata.email}, ndata)

}

}