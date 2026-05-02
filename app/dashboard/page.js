'use client'
import { useUser } from '@/hooks/useUser'
import { useRouter } from 'next/navigation'
import { useEffect } from 'react'
import { supabase } from '@/lib/supabase'
import { FaUser } from "react-icons/fa";

export default function Dashboard() {
  const { user, loading } = useUser()
  const router = useRouter()

  useEffect(() => {
    if (!loading && !user) router.push('/login')
  }, [user, loading, router])

  const handleLogout = async () => {
    await supabase.auth.signOut()
    router.push('/login')
  }

  if (loading) return <p>Loading...</p>
  if (!user) return null

  return (
    
      <div className="min-h-screen flex flex-col flex-1 p-4 items-center justify-center bg-gradient-to-br from-amber-400 via-neutral-100 to-black">
      <h1 className=' text-center text-white text-2xl mx-2 py-4 md:text-2xl'>Dashboard</h1>
      <FaUser className='text-blue-400 rounded-full' />
      <span className='font-medium'>Welcome {user.email}</span>
      <button onClick={handleLogout} className='place-self-center justify-center items-center text-white bg-blue-500 p-3 py-1 rounded-md hover:bg-blue-700 md:text-lg'>Logout</button>
    </div>
  )
}
