import React, { useState } from "react"
import data from './data/data';
import { SiGmail, SiTwitter, SiLinkedin, SiGatsby, SiReact, SiGraphql, SiJavascript, SiRails, SiRuby, SiPostgresql } from "react-icons/si";

const ContactForm = () => {
  return (
    <form
      className=""
      name="email_list"
      method="POST"
      data-netlify="true"
      data-netlify-honeypot="bot-field"
      action="mailto:yassinmelsir@gmail.com"
    >
      <div className="bg-secondary grid grid-flow-row gap-5 h-full w-full">
        
          
          <input
            className="bg-secondary placeholder-white text-center"
            name="name"
            id="form__name"
            type="text"
            placeholder="Name"
          />

          <input
            className="bg-secondary placeholder-white text-center"
            name="email"
            id="form__email"
            type="email"
            placeholder="Email"
          />
          <input
            className="bg-secondary placeholder-white text-center"
            name="message"
            id="form__message"
            type="text"
            placeholder="Message"
          />  
          <button
            type="submit"
            className="bg-white text-black"
            style={{ marginTop: 0 }}
          >
            Contact
          </button>
       

      </div> 
    </form>
  )
}

const Card = ({modalSelected, functions, props}) => {
  const className = "text-white bg-green-200 mb-5 grid grid-cols-1 items-center rounded mt-10 h-10 w-1/2 xl:w-1/6" 
  return (
      <button 
        onClick={()=> {
          functions.setModalCard(props)
          functions.setModalSelected(!modalSelected)
        }} 
        className={className}
        >

        <div className="grid grid-flow-col gap-2 place-items-center w-full">
          <p>{props.smText}</p> {props.icons}
        </div>

      </button>
      
  )
}
const Nav = ({modalSelected, functions, props, setPage}) => {
  const className = "text-white bg-green-200 grid grid-cols-1 items-center rounded h-10 w-full xl:w-1/3 "
    return (
      <div 
         
        className={className}
      >

        <div className="ml-2 grid grid-flow-col place-items-center w-full">
          <button onClick={()=> setPage('home')}>{props.smText}</button>
          <button onClick={()=> {
          functions.setModalCard(props)
          functions.setModalSelected(!modalSelected)
        }}>About</button>
          <button onClick={()=> setPage('projects')}>Projects</button>
          <button onClick={()=> setPage('blog')}>Blog</button>
          <button onClick={()=> functions.setEmailModalSelected(true)}><SiGmail /></button><a href='https://twitter.com/yassinelsir1'><SiTwitter /></a><a href='https://www.linkedin.com/in/yassin-elsir-2ab05b174/'><SiLinkedin /></a>
        </div>

      </div>            
    )
}
const Hero = ({modalSelected, functions, props}) => {
  const className =  "text-black bg-white grid grid-cols-1 place-items-center rounded h-half w-full xl:w-1/3 "
  return (
    <div className={className}>
      
      <button 
        onClick={()=> {
          functions.setModalCard(props)
          functions.setModalSelected(!modalSelected)
        }} 
        className="ml-2 grid grid-cols-1 place-items-center w-1/4"
      >
        <p>{props.smText}</p>
      </button>

    </div> 
  )           
}
const Modal = ({props}) => {
  const className =  {
    container: "h-5/6 w-3/4 xl:w-1/4 mt-5 bg-green-400 text-black grid grid-cols-1 place-items-center absolute rounded" + ' ' + (props.modalSelected ? 'z-30' : 'z-0'),
    button: "h-full w-full opacity-0 absolute" + ' ' + (props.modalSelected ? 'z-20' : 'z-0')
  }
  return (
    props.modalSelected &&  
      <>
        <button onClick={()=> props.setModalSelected(!props.modalSelected)} className={className.button}> 
      
        </button>
        <div className={className.container}> 
          <p>{props.modalCard.smText}</p>
        </div>    
      </>
  )           
} 
const EmailModal = ({props}) => {
  const className =  {
    container: "h-1/2 w-1/2 xl:w-1/4 mt-5 ml-60 xl:ml-40 bg-green-400 text-black grid grid-cols-1 place-items-center absolute rounded" + ' ' + (props.emailModalSelected ? 'z-30' : 'z-0'),
    button: "h-full w-full opacity-0 absolute" + ' ' + (props.emailModalSelected ? 'z-20' : 'z-0')
  }
  return (
    props.emailModalSelected &&  
      <>
        <button onClick={()=> props.setEmailModalSelected(false)} className={className.button}> 
      
        </button>
        <div className={className.container}> 
          <ContactForm />
        </div>    
      </>
  )           
} 

const CardCarousel = ({carouselCard, modalSelected, functions, props}) => {
  return (
      <>
        <button onClick={()=> functions.setCarouselCard( carouselCard !== 0 ? carouselCard - 1 : props.length-1)} className='h-10 w-10'>Back</button>
        <button 
          onClick={()=> {
            functions.setModalCard(props[carouselCard])
            functions.setModalSelected(!modalSelected)
          }} 
          className={ "text-white bg-green-200 mb-5 grid grid-cols-1 items-center rounded h-40 w-40 "}
          >

          <div className="grid grid-flow-row gap-2 place-items-center w-full">
            <p>{props[carouselCard].smText}</p>
            <div className="grid grid-cols-2 gap-4 place-items-center w-full">
              {props[carouselCard].icons}
            </div>
          </div>

        </button>
        <button onClick={()=> functions.setCarouselCard(carouselCard !== props.length - 1 ? carouselCard + 1 : 0)} className='h-10 w-10'>Forward</button>
      </>
      
  )         
}

const App = () => {
  const [page, setPage] = useState('home')
  const [modalCard, setModalCard] = useState(null)
  const [emailModalCard, setEmailModalCard] = useState(null)
  const [heroCard, setHeroCard] = useState(data.cards[Math.floor(Math.random() * data.cards.length)])
  const [carouselCard, setCarouselCard] = useState(Math.floor(Math.random() * data.cards.length))
  const [modalSelected, setModalSelected] = useState(false)
  const [emailModalSelected, setEmailModalSelected] = useState(false)
  const stateFunctions = {setModalCard: setModalCard, setModalSelected: setModalSelected, setCarouselCard: setCarouselCard, setEmailModalCard: setEmailModalCard, setEmailModalSelected: setEmailModalSelected}
  const className = {container: 'w-screen h-full grid grid-flow-row justify-items-center relative z-10'}
  const backgroundOpacity = ( modalSelected ? 'opacity-50' : 'opacity-100' )

    return (        
      <div className={className.container}> 
        <Modal props={{modalCard: modalCard, modalSelected: modalSelected ,setModalSelected: setModalSelected}} />
        <EmailModal props={{emailModalCard: emailModalCard, emailModalSelected: emailModalSelected ,setEmailModalSelected: setEmailModalSelected}} />
        <div className={`grid grid-flow-row justify-items-center w-full h-full ${backgroundOpacity}`}>
          <Nav setPage={setPage} modalSelected={modalSelected} functions={stateFunctions} props={data.nav} />
          {page === 'home' && <><Hero modalSelected={modalSelected} functions={stateFunctions} props={heroCard} />
            <div className={`grid grid-flow-col place-items-center w-full xl:w-1/4 h-full`}>
            <CardCarousel carouselCard={carouselCard} modalSelected={modalSelected} functions={stateFunctions} props={data.cards} />
            </div>
          </>}
          {page === 'projects' && data.cards.map((card)=> {return(<Card props={card} modalSelected={modalSelected} functions={stateFunctions} />)})}
          {page === 'blog' && data.blogPosts.map((card)=> {return(<Card props={card} modalSelected={modalSelected} functions={stateFunctions} />)})}
        </div>
        
      </div>
    )
}
export default App
