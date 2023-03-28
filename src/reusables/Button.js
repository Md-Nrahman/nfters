import React from 'react'

const Button = ({title, background, text, bordered}) => {
  return (
    <button class={`inline-flex items-center ${background ? background : "bg-indigo-800 hover:bg-white"} ${text ? text : "text-white hover:text-indigo-800"} ${bordered ? "border-2 border-indigo-800": "border-0"} mr-3 py-2 px-9 focus:outline-none   rounded-full text-base mt-4 md:mt-0`}>
            {title}
          </button>
  )
}

export default Button