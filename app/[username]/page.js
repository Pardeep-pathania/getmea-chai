import React from "react";

const Username = ({ params }) => {
  return (
    <>
      {params.username}
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
        <div className="font-bold text-lg ">@{params.username}</div>
        <div className="text-slate-400">Creating Animated art for VIT's</div>
        <div className="text-slate-400">
          9719 members 82 posts $15, 450/release
        </div>

        <div className="payment flex gap-3 w-[80%] mt-11">
          <div className="supporters w-1/2  bg-slate-900 rounded-lg text-white p-10">
            {/* Show list of all supporters as a leaderboard */}
            <h2 className="text-2xl font-bold my-5">Supporters</h2>
            <ul className="mx-5 text-lg">
              <li className="my-2 flex gap-2 items-center">
                <img src="/avatar.gif" alt="user avatar" width={33} />
                <span>
                  Shubham donated <span className="font-bold">$30</span> with a message "I support you bro. Lots of ❤️"
                </span>
              </li>
            <li className="my-2 flex gap-2 items-center">
                <img src="/avatar.gif" alt="user avatar" width={33} />
                <span>
                  Shubham donated <span className="font-bold">$30</span> with a message "I support you bro. Lots of ❤️"
                </span>
              </li>
               <li className="my-2 flex gap-2 items-center">
                <img src="/avatar.gif" alt="user avatar" width={33} />
                <span>
                  Shubham donated <span className="font-bold">$30</span> with a message "I support you bro. Lots of ❤️"
                </span>
              </li>
               <li className="my-2 flex gap-2 items-center">
                <img src="/avatar.gif" alt="user avatar" width={33} />
                <span>
                  Shubham donated <span className="font-bold">$30</span> with a message "I support you bro. Lots of ❤️"
                </span>
              </li>
               <li className="my-2 flex gap-2 items-center">
                <img src="/avatar.gif" alt="user avatar" width={33} />
                <span>
                  Shubham donated <span className="font-bold">$30</span> with a message "I support you bro. Lots of ❤️"
                </span>
              </li>
               <li className="my-2 flex gap-2 items-center">
                <img src="/avatar.gif" alt="user avatar" width={33} />
                <span>
                  Shubham donated <span className="font-bold">$30</span> with a message "I support you bro. Lots of ❤️"
                </span>
              </li>
               <li className="my-2 flex gap-2 items-center">
                <img src="/avatar.gif" alt="user avatar" width={33} />
                <span>
                  Shubham donated <span className="font-bold">$30</span> with a message "I support you bro. Lots of ❤️"
                </span>
              </li>

            </ul>
          </div>
          <div className="makePayment bg-slate-900 text-white w-1/2 p-3">
            <h2 className="text-2xl font-bold my-5">Make a Payment</h2>

            <div className="flex flex-col gap-2">
              {/* input for name message */}

              <input
                type="text"
                placeholder="Enter Name"
                className="p-2 w-full rounded-lg bg-slate-800 text-white"
              />
              <input
                type="text"
                placeholder="Enter Message"
                className="p-2 w-full rounded-lg bg-slate-800 text-white"
              />
              <input
                type="text"
                placeholder="Enter Amount"
                className="p-2 w-full rounded-lg bg-slate-800 text-white"
              />

              <input
                type="text"
                placeholder="Enter Amount"
                className="p-2 w-full rounded-lg bg-slate-800 text-white"
              />

              <button
                type="button"
                className="text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mb-2"
              >
                Pay
              </button>
            </div>

            {/* or choose from these amounts */}
            <div className="flex gap-2 mt-5">
              <button className="bg-slate-800 p-3 rounded-lg">Pay $10</button>
              <button className="bg-slate-800 p-3 rounded-lg">Pay $20</button>
              <button className="bg-slate-800 p-3 rounded-lg">Pay $30</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Username;
