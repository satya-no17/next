'use client'
import { useState } from 'react'
import { supabase } from '@/lib/supabase'

export default function Register() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')
  const [message, setMessage] = useState('')

  const handleRegister = async () => {
    const { error } = await supabase.auth.signUp({
      email,
      password,
      options: {
        emailRedirectTo: `${window.location.origin}/auth/callback`
      }
    })

    if (error) return setError(error.message)
    setMessage('Check your email to confirm your account!')
  }

  return (
  // <div className="flex items-center justify-center min-h-screen bg-slate-900 p-4 bg-cover bg-center bg-[url('/bglogin.png')]">
    <div className="min-h-screen flex flex-col flex-1 p-4 items-center justify-center bg-gradient-to-br from-amber-400 via-neutral-100 to-black">
    <div className="w-72 h-[50vh] p-4 rounded-xl  bg-zinc-800 shadow-lg flex flex-col items-center gap-2">
      <h1 className=' text-center text-white text-2xl mx-2 py-4'>Register</h1>
      <input className=' place-self-center text-center flex bg-amber-100 text-slate-950  text-sm rounded-xl mx-4 py-2 px-7 my-2'
        type="email"
        placeholder="Email"
        value={email}
        onChange={e => setEmail(e.target.value)}
      />
      <input className=' place-self-center text-center flex bg-amber-100 text-slate-950  text-sm rounded-xl mx-4 py-2 px-7 my-2'
        type="password"
        placeholder="Password"
        value={password}
        onChange={e => setPassword(e.target.value)}
      />
        <div className='flex flex-col items-center justify-center h-screen '>
          <button onClick={handleRegister} className='place-self-center justify-center items-center text-white bg-blue-500 p-3 py-1 rounded-md hover:bg-blue-700'>Register</button>
            {error && <p style={{ color: 'red' }}>{error}</p>}
            {message && <p style={{ color: 'green' }}>{message}</p>}
          <p>Already have an account? <a href="/login">Login</a></p>
        </div>
    </div>
    </div>
  )
}
