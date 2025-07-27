"use client";

import { fetchpayments, fetchuser, initiate } from "@/actions/useractions";
import Script from "next/script";
import React, { useEffect, useState } from "react";
import { useSession } from "next-auth/react";

const PaymentPage = ({ username }) => {

    const {data:session} = useSession()
    const [paymentform, setPaymentform] = useState({name: "", message: "", amount: "" })
    const [currentuser, setcurrentuser] = useState({})
    const [payments, setPayments] = useState([])

    useEffect(()=>{
      getData()
    },[])

    const handleChange = (e) =>{
        setPaymentform({...paymentform, [e.target.name] : e.target.value})
    }

    const getData = async ()=>{
      let u = await fetchuser(username)
      setcurrentuser(u)

      let dbpayments = await fetchpayments(username)
      
      setPayments(dbpayments)
      console.log(u, dbpayments);
      
    }

    const pay = async(amount) =>{

        // Get the order Id
        let a = await initiate(amount, username, paymentform)
        let orderId = a.id

        var options = {
    "key": process.env.NEXT_PUBLIC_RAZORPAY_KEY_ID, // Enter the Key ID generated from the Dashboard
    "amount": amount, // Amount is in currency subunits. 
    "currency": "INR",
    "name": "Get Me A Chai", //your business name
    "description": "Test Transaction",
    "image": "https://example.com/your_logo",
    "order_id": orderId, // This is a sample Order ID. Pass the `id` obtained in the response of Step 1
    "callback_url": `${process.env.NEXT_PUBLIC_URL}/api/razorpay`, "prefill" : { //We recommend using the prefill parameter to auto-fill customer's contact information especially their phone number
        "name": "Gaurav Kumar", //your customer's name
        "email": "gaurav.kumar@example.com",
        "contact": "+919876543210" //Provide the customer's phone number for better conversion rates 
    },
    "notes": {
        "address": "Razorpay Corporate Office"
    },
    "theme": {
        "color": "#3399cc"
    }
};
var rzp1 = new Razorpay(options);
    rzp1.open();
    }
  return (
    <>
      <Script src="https://checkout.razorpay.com/v1/checkout.js"></Script>

      <div className="cover w-full relative">
        <img
          src="https://c10.patreonusercontent.com/4/patreon-media/p/campaign/4842667/452146dcfeb04f38853368f554aadde1/eyJ3IjoxOTIwLCJ3ZSI6MX0%3D/18.gif?token-hash=2XoNFaHKobezslMvn4tj7xA6qgIPOBaiMNFvHpZ859g%3D&token-time=1754265600"
          alt=""
          className="object-cover w-full h-[350px]"
        />
        <div className="absolute -bottom-15  right-[46%] border-2 border-white rounded-full ">
          <img
            className="rounded-full"
            src="https://images.pexels.com/photos/14653174/pexels-photo-14653174.jpeg"
            alt=""
            width={100}
            height={100}
          />
        </div>
      </div>       
      <div className="info flex justify-center items-center flex-col gap-2 my-24">
        <div className="font-bold text-lg ">@{username}</div>
        <div className="text-slate-400">Creating Animated art for VIT's</div>
        <div className="text-slate-400">
          9719 members 82 posts ₹ 15, 450/release
        </div>

        <div className="payment flex gap-3 w-[80%] mt-11">
          <div className="supporters w-1/2  bg-slate-900 rounded-lg text-white p-10">
            {/* Show list of all supporters as a leaderboard */}
            <h2 className="text-2xl font-bold my-5">Supporters</h2>
            <ul className="mx-5 text-lg">

              {payments.map((p, i) => {
               return <li key={i} className="my-2 flex gap-2 items-center">
                <img src="/avatar.gif" alt="user avatar" width={33} />
                <span>
                  {p.name} donated <span className="font-bold">₹{p.amount} </span> with a message "{p.message}"
                </span>
              </li>
              } )}             

            </ul>
          </div>
          <div className="makePayment bg-slate-900 text-white w-1/2 p-3">
            <h2 className="text-2xl font-bold my-5">Make a Payment</h2>

            <div className="flex flex-col gap-2">
              {/* input for name message */}

              <input
              onChange={handleChange}
              value={paymentform.name}
                type="text"
              name="name"
                placeholder="Enter Name"
                className="p-2 w-full rounded-lg bg-slate-800 text-white"
              />
              <input
              onChange={handleChange}
              value={paymentform.message}
                type="text"
              name="message"
                placeholder="Enter Message"
                className="p-2 w-full rounded-lg bg-slate-800 text-white"
              />
              <input
              onChange={handleChange}
              value={paymentform.amount}
              name="amount"
                type="text"
                placeholder="Enter Amount"
                className="p-2 w-full rounded-lg bg-slate-800 text-white"
              />

              <button
              onClick={() => pay(Number.parseInt(paymentform.amount) * 100)}
                type="button"
                className="text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mb-2"
              >
                Pay
              </button>
            </div>

            {/* or choose from these amounts */}
            <div className="flex gap-2 mt-5">
              <button className="bg-slate-800 p-3 rounded-lg" onClick={()=>{
                pay(1000)
              }}>Pay ₹10</button>
              <button className="bg-slate-800 p-3 rounded-lg" onClick={()=>{
                pay(2000)
              }}>Pay ₹20</button>
              <button className="bg-slate-800 p-3 rounded-lg" onClick={()=>{
                pay(3000)
              }}>Pay ₹30</button>
            </div>
          </div>
        </div>
      </div> 

    </>
  );
};

export default PaymentPage;
