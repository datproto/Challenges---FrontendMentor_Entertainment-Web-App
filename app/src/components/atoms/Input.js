import React from 'react'

function Input({ type, name, placeholder }) {
  return (
    <div className="input-group flex flex-col">
      <label for={name} className="hidden" />
      <input
        type={type} id={name} name={name} placeholder={placeholder}
        className="bg-transparent text-white focus:ring-0 border-t-0 border-x-0 border-b-blue-greyish focus:border-b-white placeholder:font-light placeholder:text-white[.5] placeholder:capitalize caret-red pt-0 pr-0 pb-4 pl-4" />
    </div>
  )
}

export default Input