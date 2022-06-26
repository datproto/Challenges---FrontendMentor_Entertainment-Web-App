import React from 'react'

function Button({ content }) {
  return (
    <button className="flex justify-center text-white hover:text-blue-semi-dark font-light bg-red hover:bg-white transition-all rounded-md py-4 px-4">{content}</button>
  )
}

export default Button