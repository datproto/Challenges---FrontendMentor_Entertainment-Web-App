import React from 'react'

function Card() {
  return (
    <div className="flex items-end relative rounded-lg">
        <img src="" alt="" className="absolute z-0" />
        {/* Bookmark button */}
        <div className="bg-blue-dark/50 rounded-full p-3 absolute z-10"></div>
        {/* Content */}
        <div className="rounded-b-lg p-4"></div>
    </div>
  )
}

export default Card