
"use client"
import Image from "next/image";

export default function Home() {
  return (
    
    <>
    
      <div className="flex flex-col justify-center items-center text-white h-[44vh] ">
        <div className="text-5xl font-bold flex justify-center items-center">
          {" "}
          Buy Me a Chai{" "}
          <span>
            <img src="/tea.gif" width={90} alt="" />
          </span>{" "}
        </div>

        <p>
          A crowdfunding platform for creators. Get funded by your fans and
          followers. Start Now!
        </p>
        <div>
          <button
            type="button"
            className="text-white bg-gradient-to-r from-purple-500 to-pink-500 hover:bg-gradient-to-l focus:ring-4 focus:outline-none focus:ring-purple-200 dark:focus:ring-purple-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2"
          >
            Start Now
          </button>

          <button
            type="button"
            className="text-white bg-gradient-to-r from-purple-500 to-pink-500 hover:bg-gradient-to-l focus:ring-4 focus:outline-none focus:ring-purple-200 dark:focus:ring-purple-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2"
          >
            Read more
          </button>
        </div>
      </div>

      <div className="bg-white h-1 opacity-10"></div>

      <div className="text-white container mx-auto py-16">
        <h1 className="text-3xl font-bold text-center mb-10">
          Your Fans can buy you a chai
        </h1>
        <div className="flex gap-5 justify-around">
          <div className="item space-y-3 ">
            <img className="bg-slate-400 rounded-full p-2 text-black" src="/man.gif" width={90} alt="" />
           <p className="font-bold">Fans want to help</p>
            <p className="flex-center">Your fans are available for you to help you</p>
          </div>
          <div className="item space-y-3">
            <img className=" bg-slate-400 rounded-full p-2 text-black" src="/coin.gif" width={90} alt="" />
            <p className="font-bold">Fans want to help</p>
            <p className="flex-center">Your fans are available for you to help you</p>
          </div>
          <div className="item space-y-3">
            <img className=" bg-slate-400 rounded-full p-2 text-black" src="/group.gif" width={90} alt="" />
            <p className="font-bold">Fans want to help</p>
            <p className="flex-center">Your fans are available for you to help you</p>
          </div>
        </div>
      </div>

      <div className="bg-white h-1 opacity-10"></div>

      <div className="text-white container mx-auto pb-32 pt-14 flex flex-col items-center justify-center">
        <h1 className="text-3xl font-bold text-center mb-10">
          Learn  more about us
        </h1>
        <iframe width="560" height="315" src="https://www.youtube.com/embed/0Gtn2gqE8R0?si=mLRIde_xLQXMBo4L" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
      </div>
    </>
    
  );
}
