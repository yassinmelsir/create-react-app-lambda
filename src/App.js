import React, { useState, useEffect } from "react"
import data from './data/data';
import { SiGmail, SiTwitter, SiLinkedin, SiGatsby, SiReact, SiGraphql, SiJavascript, SiRails, SiRuby, SiPostgresql } from "react-icons/si";
import { IoIosArrowUp, IoIosArrowDown, IoIosArrowBack, IoIosArrowForward, IoIosClose } from 'react-icons/io'

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
  const className = "relative text-white text-sm bg-green-100 grid grid-cols-1 place-items-center rounded h-half w-full xl:w-1/3 bg-cover"
  return (
    <div style={{ backgroundImage: `url(${props.homeImage})` }} className={className}>
      <button 
        onClick={()=> {
          functions.setModalCard(props)
          functions.setModalSelected(!modalSelected)
        }} 
        className="bg-green-200 rounded ml-2 grid grid-cols-1 place-items-center w-1/6 absolute left-10 bottom-10"
      >
        <p className='uppercase'>Learn More</p>
      </button>

    </div> 
  )           
}
const Modal = ({props, type, bgImage}) => {
  const isEmail = type === 'email'
  const conditionalStyle = `${isEmail ? `h-1/2 w-1/2 xl:w-1/4 ml-60 xl:ml-40` : 'h-5/6 w-3/4 xl:w-1/4'} ${props.modalSelected ? 'z-30' : 'z-0' }`
  const containerClass = `bg-green-400 text-black grid grid-cols-1 place-items-center absolute rounded mt-5 ${conditionalStyle} `
  const buttonCLass= "h-full w-full opacity-0 absolute" + ' ' + (props.modalSelected ? 'z-20' : 'z-0')
  const closeModal = () => {
    props.setModalSelected(!props.modalSelected)
  }

  return (
    props.modalSelected &&  
      <>
        <button onClick={closeModal} className={buttonCLass}> 
      
        </button>
        <div style={{ backgroundImage: `url(${bgImage})` }} className={containerClass}> 
          {isEmail && <ContactForm />}
          {!isEmail && <>
            <div style={{ backgroundImage: `url(${props?.modalCard?.homeImage})` }} className='absolute top-10 h-60 w-80 bg-cover'>
              
            </div>
            <button onClick={closeModal} className='top-3 right-3 h-5 w-5 absolute'><IoIosClose className='h-full w-full'/></button><p className='absolute top-3'>{props?.modalCard?.smText}</p>
            <p className='absolute bottom-3 text-xs p-4'>{props?.modalCard?.lgText}</p>
            </>
          }
          
        </div>    
      </>
  )           
} 
const CarouselCard = ({props}) => {
  
  return (
        <button 
          onClick={()=> {
            props.setModalCard(props.card)
            props.setModalSelected(!props.modalSelected)
          }} 
          className={ "text-white bg-green-200 mb-5 grid grid-cols-1 items-center rounded h-40 w-40 "}
          >

          <div className="grid grid-flow-row gap-2 place-items-center w-full">
            <p>{props.card.smText}</p>
            <div className="grid grid-cols-2 gap-4 place-items-center w-full">
              {props.card.icons}
            </div>
          </div>

        </button>
  )         
}
const CarouselButton = ({props, type, increment}) => {
  const handleIndexIncrease = () => {
    props.setIndex([
      (props.index[0] + 1 + increment > props.length )? (props.index[0] - props.length) : (props.index[0] + increment ),
      (props.index[1] + 1 + increment > props.length )? (props.index[1] - props.length) : (props.index[1] + increment ),
      (props.index[2] + 1 + increment > props.length )? (props.index[2] - props.length) : (props.index[2] + increment )
      ])
  }

 const handleIndexDecrease = ()=> {props.setIndex([
    (props.index[0] - 1 - increment < -props.length )? (props.index[0] + props.length) : (props.index[0] - increment ),
    (props.index[1] - 1 - increment < -props.length )? (props.index[1] + props.length) : (props.index[1] - increment ),
    (props.index[2] - 1 - increment < -props.length )? (props.index[2] + props.length) : (props.index[2] - increment )
    ])
  }
  return (
    <>
      { (type === 'back' || type === 'up') && <button onClick={handleIndexIncrease} className='h-10 w-10'>{type === 'up' ? <IoIosArrowUp /> : <IoIosArrowBack />}</button>}
      { (type === 'forward' || type === 'down') && <button onClick={handleIndexDecrease} className='h-10 w-10'>{type === 'down' ? <IoIosArrowDown /> : <IoIosArrowForward />}</button>}
    </>
  )         
}

const CardCarousel = ({modalSelected, functions, props, vertical, increment}) => {
  const [carouselCardIndex, setCarouselCardIndex] = useState([0,1,2])
  const size = useWindowSize();
  function useWindowSize() {
    // Initialize state with undefined width/height so server and client renders match
    // Learn more here: https://joshwcomeau.com/react/the-perils-of-rehydration/
    const [windowSize, setWindowSize] = useState({
      width: undefined,
      height: undefined,
    });
    useEffect(() => {
      // Handler to call on window resize
      function handleResize() {
        // Set window width/height to state
        setWindowSize({
          width: window.innerWidth,
          height: window.innerHeight,
        });
      }
      // Add event listener
      window.addEventListener("resize", handleResize);
      // Call handler right away so state gets updated with initial window size
      handleResize();
      // Remove event listener on cleanup
      return () => window.removeEventListener("resize", handleResize);
    }, []); // Empty array ensures that effect is only run on mount
    return windowSize;
  }
  const mobile = size.width < 800 
  const buttonProps = {
    length: props.length,
    index: carouselCardIndex,
    setIndex: setCarouselCardIndex,
  }
  const containerClass = `place-items-center grid ${vertical ? 'grid-flow-row' : 'grid-flow-col'}`

  return (
    <div className={containerClass}>
      <CarouselButton increment={increment} type={vertical ? 'up' :'back'} props={buttonProps} />
        {(!mobile || vertical) && <CarouselCard 
          props={{
            setModalCard: functions.setModalCard,
            setModalSelected: functions.setModalSelected,
            card: props[Math.abs(carouselCardIndex[0])],
            modalSelected: modalSelected
          }}
        />}
        <CarouselCard 
          props={{
            setModalCard: functions.setModalCard,
            setModalSelected: functions.setModalSelected,
            card: props[Math.abs(carouselCardIndex[1])]
          }}
        />
        {(!mobile || vertical) && <CarouselCard 
          props={{
            setModalCard: functions.setModalCard,
            setModalSelected: functions.setModalSelected,
            card: props[Math.abs(carouselCardIndex[2])]
          }}
        />}
        
        <CarouselButton increment={increment} type={vertical ? 'down' :'forward'} props={buttonProps} />
      </div> 
      
  )         
}

const App = () => {
  const [page, setPage] = useState('home')
  const [modalCard, setModalCard] = useState(null)
  const [emailModalCard, setEmailModalCard] = useState(null)
  const [heroCard, setHeroCard] = useState(data.cards[Math.floor(Math.random() * data.cards.length)])
  const [modalSelected, setModalSelected] = useState(false)
  const [emailModalSelected, setEmailModalSelected] = useState(false)
  const stateFunctions = {setModalCard, setModalSelected, setEmailModalCard, setEmailModalSelected}
  const container = 'w-screen h-full grid grid-flow-row justify-items-center relative z-10'
  const backgroundOpacity = ( modalSelected ? 'opacity-50' : 'opacity-100' )

    return (        
      <div className={container}> 
        <Modal props={{modalCard: modalCard, modalSelected: modalSelected ,setModalSelected: setModalSelected}} />
        <Modal type='email' props={{modalCard: emailModalCard, modalSelected: emailModalSelected ,setModalSelected: setEmailModalSelected}} />
        <div className={`grid grid-flow-row justify-items-center w-full h-full ${backgroundOpacity}`}>
          <Nav setPage={setPage} modalSelected={modalSelected} functions={stateFunctions} props={data.nav} />
          {page === 'home' && <><Hero modalSelected={modalSelected} functions={stateFunctions} props={heroCard} />
            <div className={`grid grid-flow-col place-items-center w-full xl:w-1/4 h-full`}>
            <CardCarousel increment={2} modalSelected={modalSelected} functions={stateFunctions} props={data.cards} />
            </div>
          </>}
          {page === 'projects' && <CardCarousel increment={4} vertical={true} modalSelected={modalSelected} functions={stateFunctions} props={data.cards} />}
          {page === 'blog' && <CardCarousel increment={2} vertical={true} modalSelected={modalSelected} functions={stateFunctions} props={data.blogPosts} />}
        </div>
        
      </div>
    )
}
export default App
