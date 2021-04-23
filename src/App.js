import React from "react"

import { SiGithub, SiGmail, SiTwitter } from 'react-icons/si'

const ContactForm = () => {
  return (
    <form
      className=""
      name="contact-home-page"
      netlify
    >   
        <div className='grid grid-flow-row place-items-center mt-20 gap-1'>
          <input
            className="w-3/4 bg-gray-200 rounded-full text-xl mt-5"
            name="name"
            type="text"
            placeholder="Name"
          />
          <input
            className="w-3/4 bg-gray-200 text-xl rounded-full"
            name="email"
            type="email"
            placeholder="Email"
          />
          <button
            type="submit"
            className="text-black text-xl font-semibold bg-black hover:bg-opacity-50 rounded-full h-10 w-20 bg-opacity-0"
          >
            Send
          </button>
          </div>
    
    </form>
  )
}

const Main = () => {
  const buttonClass = 'hover:bg-gray-100 rounded-full w-40 grid grid-cols-1 place-items-center h-40 absolute z-10'
  return ( 
    <div className='grid grid-cols-1 place-items-center h-screen w-screen relative'>
        <div className='grid grid-flow-col place-items-center relative'>
          <div className='right-20 w-40 h-60 rounded-full hover:opacity-50 bg-gray-200 opacity-0 absolute z-20 -top-20 grid grid-flow-row place-items-center'>
            <ContactForm />
          </div>
          <button className={buttonClass + ' left-20'}><a target="_blank" rel="noopener noreferrer" href='https://github.com/yassinmelsir'><SiGithub className='h-20 w-20'/></a></button>
          <button className={buttonClass + ' right-20'}><SiGmail className='h-20 w-20' /></button>
          <button className={buttonClass} ><a target="_blank" rel="noopener noreferrer" href='https://twitter.com/yassinelsir1'><SiTwitter className='h-20 w-20' /></a></button>
        </div>
        
    </div>
  )
}


const App = () => {
    return ( 
      <Main />
    )
}
export default App
