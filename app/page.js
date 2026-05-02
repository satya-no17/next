'use client'

import { useRouter } from "next/navigation";

export default function Home() {
  const router = useRouter()

  return (
   
     // <div className="flex flex-col flex-1 items-center justify-center min-h-screen bg-slate-900 p-4 bg-cover bg-center bg-[url('/bglogin.png')]" >
     <div className="min-h-screen flex flex-col flex-1 p-4 items-center justify-center bg-gradient-to-br from-amber-400 via-neutral-100 to-black">
      <button onClick={() => router.push('/login')}  className='place-self-center justify-center items-center text-white bg-blue-500 p-3 py-1 rounded-md hover:bg-blue-700  md:text-lg'>Get Started</button>
      <span className="text-white font-italic text-medium my-1.5 md:text-lg">Tap in. Let’s go!</span>
    </div>
  );
}
