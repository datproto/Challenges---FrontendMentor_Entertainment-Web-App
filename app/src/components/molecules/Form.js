import React from 'react'

// Atoms
import Input from '../atoms/Input'

function Form({ name, inputs, addition }) {
  return (
    <form method="post" className="flex flex-col bg-blue-semi-dark p-6 pb-8 md:p-8 rounded-xl gap-10">
        <h1 className="text-[2rem] leading-[1.5em] font-light text-white capitalize">{name}</h1>
        <div className="content flex flex-col gap-6">
          {inputs?.map((i, k) => (
            <Input
              key={k}
              type={i.type}
              name={i.name}
              placeholder={i.placeholder}
            />
          ))}
        </div>
        <button className="flex justify-center text-white hover:text-blue-semi-dark font-light bg-red hover:bg-white transition-all rounded-md py-4">Login to your account</button>
        {
          addition ? (
            <div className="flex justify-center font-light gap-2 -mt-4">
                <span className="text-white">{addition.text}</span>
                <a href={addition.link.url} className="text-red capitalize">{addition.link.text}</a>
            </div>
          ) : 
          <></>
        }
    </form>
  )
}

export default Form