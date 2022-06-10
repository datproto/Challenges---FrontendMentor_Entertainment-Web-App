import React from 'react'

function Form() {
  return (
    <form method="post" className="flex flex-col bg-blue-semi-dark p-6 pb-8 rounded-xl gap-10">
        <h1 className="text-[2rem] leading-[1.5em] font-light text-white">Login</h1>
        <div className="content flex flex-col gap-6">

        </div>
        <button className="flex justify-center text-white font-light bg-red hover:bg-red/[.75] transition-all rounded-md py-4">Login to your account</button>
    </form>
  )
}

export default Form