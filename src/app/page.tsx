import React from 'react'
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { buttonVariants } from "@/components/ui/button";
// import { Input } from "@/components/ui/input"

export default function Home() {
  return (
    <div className='bg-neutral-950'>

      {/* navigation bar */}
      <div className="nav flex items-center justify-between flex-wrap p-6">
        <div className="log0 text-white font-semibold text-xl">
          Sharify
        </div>
        <div className="sign-in">
          <Link className={buttonVariants({ variant: "outline" })} href={"/sign-in"}>
            Sign-in
          </Link>
        </div>
        
      </div>
      {/* hero section */}
      <div className="hero py-20 px-4 lg:px-0 text-center">
        <div className="max-w-4xl mx-auto">
          <div className="text-4xl lg:text-6xl font-bold text-white leading-tight mb-8">
          </div>
          {/* <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-500">
          Subscribe, Share, and Earn Rewards from Your Favorite YouTube Creators

                
              </h1> */}
              <h1 className="text-5xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-500">
          Get rewards by sharing your favorite youtube videos
              </h1>
              
          <div className="text-base lg:text-lg text-white opacity-50 mb-8 max-w-lg mx-auto">
            <p>Join our dynamic community of content enthusiasts and start earning rewards while sharing the awesome creations of our YouTube creators!.</p>
            {/* <p>Are you a fan of YouTube creators? Do you love engaging with their content and supporting their work? Sharify is here to revolutionize the way you interact with your favorite creators.</p> */}
          </div>
          <div className="mb-8">
            <Link className={buttonVariants({ variant: "secondary" })} href={"/sign-up"}>
              Get started
            </Link>
          </div>
        </div>
      </div>


      {/* how it works?*/}
      

      <div>
      {/* <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48 bg-black"></section> */}
      <div className="container px-4 md:px-6">
        <div className="grid gap-6 items-center">
          <div className="flex flex-col justify-center space-y-8 text-center">
            <div className="space-y-2">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-500">
                How it works?
              </h1>
              <p className="max-w-[600px] text-zinc-200 md:text-xl dark:text-zinc-100 mx-auto">
                Our features are designed to enhance your productivity and streamline your workflow.
              </p>
            </div>
            
            <div className="w-full max-w-full md:max-w-screen-lg lg:max-w-screen-xl space-y-4 mx-auto">
  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
    <div className="flex flex-col space-y-2 border-2 border-gray-400 p-4 rounded-2xl">
      <h2 className="text-xl font-bold text-white lg:pt-7">Subscribe</h2>
      <p className="text-zinc-200 dark:text-zinc-100">
        Join sharify and subscribe to your favorite YouTube creators right from our platform.
      </p>
    </div>
    <div className="flex flex-col space-y-2 border-2 border-gray-400 p-4 rounded-2xl">
      <h2 className="text-xl font-bold text-white">Share</h2>
      <p className="text-zinc-200 dark:text-zinc-100">
        Once you&apos;ve subscribed, you&apos;ll receive a unique URL for each video uploaded by the creator. Share these URLs with your friends, family, and followers across social media platforms.
      </p>
    </div>
    <div className="flex flex-col space-y-2 border-2 border-gray-400 p-4 rounded-2xl">
      <h2 className="text-xl font-bold text-white lg:pt-5">Earn Rewards</h2>
      <p className="text-zinc-200 dark:text-zinc-100">
        Every click on your shared URL earns you points. The more clicks you generate, the more points you accumulate.
      </p>
    </div>
  </div>
</div>

          </div>
        </div>
      </div>
    {/* </section> */}


      </div>


      {/* Redeem Your Points */}

      <section className="w-full px-4 pt-32 py-8 md:py-24 lg:py-32 xl:py-48 bg-black bg-opacity-50 bg-pattern">
  <div className="container px-4 md:px-6">
    <div className="grid gap-6 lg:grid-cols-1 lg:gap-12 xl:grid-cols-2 items-center">
      <img
        alt="Hero"
        className="mx-auto aspect-w-16 aspect-h-9 sm:w-full lg:order-first rounded-2xl"
        src="https://i0.wp.com/cdn.dribbble.com/users/1615584/screenshots/14755817/media/0a76d86caa71b50cc6cdbec3edf5d668.jpg?w=1200&ssl=1"
      />
      <div className="flex flex-col justify-center space-y-4 text-center">
        <div className="space-y-2">
          <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-500">
            Redeem Your Points
          </h1>
          <p className="max-w-[600px] text-zinc-200 md:text-xl dark:text-zinc-100 mx-auto">
            As your points stack up, it&apos;s time to reap the rewards! Exchange your points for exciting benefits offered by the creators themselves, such as:
          </p>
        </div>
        <div className="flex flex-col items-center text-zinc-200 space-y-2 border-2 max-w-[400px] border-gray-400 p-4 rounded-2xl mx-auto">
          <ul className="list-none">
            <li>Personalized shout-outs in videos</li>
            <li>Exclusive access to community features</li>
            <li>Tickets to meet-ups and events</li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</section>



      {/* Why Choose Sharify? */}
      <div></div>


      {/* Join the Sharify Community Today! */}
      <div>
        
</div>


      {/* Contact Us */}


      <div className='container md:px-6'>
<section className="w-full py-8 md:py-24 lg:py-1 xl:py-1 bg-black bg-opacity-50 bg-pattern">
  <div className="container px-4 md:px-6">
    <div className="grid gap-6 lg:grid-cols-1 lg:gap-12 xl:grid-cols-2 items-center">
      <div className="flex flex-col justify-center space-y-4 text-center">
        <div className="space-y-2">
          <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-500">
          Get in touch with us!
          </h1>
    
        </div>
        



      </div>
      <div className="w-full max-w-sm space-y-2 mx-auto">
          <form className="flex flex-col space-y-2">
          <input
              className="max-w-lg bg-gray-800 text-white border-gray-900 p-3 rounded-md"
              placeholder="Enter your name"
              type="text"
              name="name"
              required
            />
            <input
              className="max-w-lg bg-gray-800 text-white border-gray-900 p-3 rounded-md"
              placeholder="Enter your email"
              type="text"
              name="name"
              required
            />
            <textarea
              className="max-w-lg bg-gray-800 text-white border-gray-900 p-3 rounded-md"
              placeholder="Your Message"
              name="message"
              required
            ></textarea>
            <button className="bg-white text-black py-3 rounded-lg" type="submit">
              Submit
            </button>
          </form>
        </div>
    </div>
  </div>
</section>

              
      </div>


      {/* Footer  */}
      <div className="bg-neutral-950 mt-6">
        <div className="text-white">
  



          <div className="flex items-center justify-center border-t border-white opacity-50 mx-10 pt-2 pb-6">
            <p className="text-center text-xs opacity-75 bg-clip-text ">Copyrights © Sharify. All rights reserved.</p>
          </div>
        </div>
      </div>
    </div>
  );
}
