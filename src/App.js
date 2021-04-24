import React, {useState, useEffect } from "react"

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
  const menuSize = 'w-20 h-40 -mt-5'
  const buttonClass = 'hover:bg-gray-100 rounded-full w-20 h-20 grid place-items-center '
  const iconSize = 'h-10 w-10'
  const newProps = { menuSize, iconSize, buttonClass, route, setRoute }
  const [blogPosts, setBlogPosts] = useState(null)
  const [isLoading, setIsLoading] = useState(true)
  const apiUrl = "https://api.rss2json.com/v1/api.json?rss_url=https://medium.com/feed/@ymelsir11"

  const fetchData = () => {
      fetch(apiUrl).then(res=> res.json()).then((result)=> {
        const posts = result.items
        console.log(posts)
        setBlogPosts(posts)
      }).then(setIsLoading(false))
    }
    
  useEffect(() => {
    fetchData()
  }, [fetchData])

  return (

    <div className='h-screen w-screen grid grid-flow-col place-items-center relative'>
      <div className='fixed top-0 grid grid-flow-col'><MediaLinks props={newProps}/><MailButton props={newProps} /></div>
      <button onClick={()=> setRoute('main')} className='hover:bg-gray-100 grid place-items-center rounded-full absolute h-20 w-20 top-0 right-0'><IoMdClose className='w-10 h-10' /></button>
      {(!isLoading && blogPosts !== null) && blogPosts.map((post, id)=>{return(<div className='w-half h-half'><p key={id} className=''>{post.title}</p><div dangerouslySetInnerHTML={{__html: post.description}} /></div>)})}
      {(isLoading || blogPosts === null) && <p>Loading World!</p>}
    </div>
    
  )
}

const MediaLinks = ({props}) => {
  const { iconSize, buttonClass, route, setRoute } = props
  return (
    <>
    <button className={buttonClass}><a target="_blank" rel="noopener noreferrer" href='https://github.com/yassinmelsir'><SiGithub className={iconSize} /></a></button>
    <button className={buttonClass} ><a target="_blank" rel="noopener noreferrer" href='https://www.linkedin.com/in/yassin-elsir-2ab05b174/'><SiLinkedin className={iconSize} /></a></button>
    <button className={buttonClass} ><a target="_blank" rel="noopener noreferrer" href='https://twitter.com/yassinelsir1'><SiTwitter className={iconSize} /></a></button>
    </>
  )
}

const BlogLink = ({props}) => {
  const { buttonClass, route, setRoute } = props
  return (
    <button className={buttonClass + ' ml-40 xl:ml-0'} ><GiQuillInk onClick={()=> setRoute('blog')} className='h-20 w-20' /></button>
  )
}

const MailButton = ({props}) => {
  const { menuSize, iconSize, buttonClass, route, setRoute } = props
  const menuClass = 'hover:opacity-100 rounded-full top-5 hover:bg-gray-100 opacity-0 absolute z-30  gap-0 grid grid-flow-row place-items-center '
  return (
    <button className={buttonClass + ' ml-40 xl:ml-0 relative'}>
      <SiGmail className={iconSize + ' absolute z-20'} />
      <div className={menuClass + menuSize}>
        <SiGmail className={iconSize} />
        <ContactForm className='-mt-10' />
      </div>
    </button>
  )
}


const Main = ({ props }) => {
  const buttonClass = 'hover:bg-gray-100 rounded-full w-40 h-40 grid grid-cols-1 place-items-center '
  
  const menuSize = ' w-40 h-60 '
  const iconSize = 'h-20 w-20'
  const containerPosition = ' top-20 xl:top-halfh absolute'
  const { route, setRoute  } = props
  const newProps = { menuSize, iconSize, route, setRoute, buttonClass }
  return ( 
    <div className='relative'>
      <div className={'z-10 grid grid-cols-3 xl:grid-flow-col gap-x-10 xl:gap-x-0 place-items-center ' + containerPosition + ' left-10 xl:left-tw '} >
        <MediaLinks props={newProps} />
        <BlogLink props={newProps} />
        <MailButton props={newProps} />
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
