import React from 'react'
import { useState } from 'react'





const SginIn = () => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const handleSubmit = (e) => {
        e.preventDefault()
        const data = { email, password } 
        console.log(data)
        const res = fetch('http://localhost:3000/', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        })
        .then(res => res.json())
        .then(data => console.log(data))
    }

   
  return (
   <>
   {/* make the sgin Page in tailwind css Designe Good */}
    <div className="flex h-screen bg-gray-200">
        <div className="m-auto w-1/3 text-white flex flex-wrap justify-center shadow-lg rounded-lg bg-gradient-to-br from-indigo-900 to-indigo-600">
            <form className="m-5 w-10/12" action="">
            <h1 className="w-full text-4xl tracking-widest text-center my-6">Sign In</h1>
            <div className="w-full my-6">
                <input type="email" className="p-2 rounded text-black w-full" placeholder="Email" value={email} onChange={(e)=>setEmail(e.target.value)} />
            </div>
            <div className="w-full my-6">
                <input type="password" className="p-2 rounded text-black w-full" placeholder="Password" onChange={(e)=>setPassword(e.target.value)} />
            </div>
            <div className="w-full my-10">
                <button type="submit" className="p-2 rounded bg-gradient-to-tr from-yellow-400 via-red-500 to-pink-500 text-black w-full">Sign In</button>
            </div>
            </form>
        </div>
    </div>

   



   </>
  )
}

export default SginIn