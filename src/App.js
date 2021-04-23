import React, {useState} from "react"

import { SiGithub, SiGmail, SiTwitter, SiLinkedin } from 'react-icons/si'

import { GiQuillInk } from 'react-icons/gi'

import { IoMdClose } from "react-icons/io";

const ContactForm = ({className}) => {
  return (
    <form
      className=""
      name="contact-home-page"
      data-netlify="true"
    >   
        <div className={'grid grid-flow-row place-items-center gap-1 ' + className}>
          <input
            className="w-3/4 bg-gray-100 rounded-full text-xl mt-5"
            name="name"
            type="text"
            placeholder="Name"
          />
          <input
            className="w-3/4 bg-gray-100 text-xl rounded-full"
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
const Blog = ({props}) => {
  const { route, setRoute } = props
  return (
    <div className='h-screen w-screen grid grid-flow-col place-items-center relative'>
      <button onClick={()=> setRoute('main')} className='absolute h-10 w-10 top-0 right-0'><IoMdClose className='w-full h-full' /></button>
      <p>Hello World!</p>
    </div>
    
  )
}

const Main = ({props}) => {
  const buttonClass = 'hover:bg-gray-100 rounded-full w-40 grid grid-cols-1 place-items-center '
  const containerPosition = ' top-20 xl:top-halfh absolute'
  const { route, setRoute } = props
  return ( 
    
    
        <div className='relative'>
          <div className={'z-10 grid grid-cols-3 xl:grid-flow-col gap-x-10 xl:gap-x-0 place-items-center ' + containerPosition + ' left-10 xl:left-tw '} >
            <button className={buttonClass + 'h-40 '}><a target="_blank" rel="noopener noreferrer" href='https://github.com/yassinmelsir'><SiGithub className='h-20 w-20'/></a></button>
            
            <button className={buttonClass + 'h-40 '} ><a target="_blank" rel="noopener noreferrer" href='https://www.linkedin.com/in/yassin-elsir-2ab05b174/'><SiLinkedin className='h-20 w-20' /></a></button>
            <button className={buttonClass + 'h-40 '} ><a target="_blank" rel="noopener noreferrer" href='https://twitter.com/yassinelsir1'><SiTwitter className='h-20 w-20' /></a></button>
            <button className={buttonClass + 'h-40 ' + ' ml-40 xl:ml-0'} ><GiQuillInk onClick={()=> setRoute('blog')} className='h-20 w-20' /></button>
            <button className={buttonClass + 'h-40 ' + ' ml-40 xl:ml-0 relative'}>
              
              
                
                <SiGmail className='h-20 w-20 absolute z-20' />
                <div className='hover:opacity-100 rounded-full top-5 hover:bg-gray-100 opacity-0 absolute z-30 w-40 gap-0 h-60 grid grid-flow-row place-items-center '>
                  <SiGmail className='h-20 w-20 mt-4' />
                  <ContactForm className='-mt-10' />
                </div>
                
                
              
              
              </button>
          </div>
          
        </div>
    
    
  )
}

const App = () => {
    const [route, setRoute] = useState('main')
    const props = { route, setRoute }
    return ( 
      <>
        {route === 'blog' && <Blog props={props} />}
        {route === 'main' && <Main props={props} />}
      </>
    )
}
export default App
