import React, { useState, useEffect } from "react"
import data from './data/data';
import shanghaitower from './data/images/shanghaitower.jpg'
import { SiHouzz, SiGmail, SiTwitter, SiLinkedin, SiGatsby, SiReact, SiGraphql, SiJavascript, SiRails, SiRuby, SiPostgresql, SiNetflix, SiYoutube } from "react-icons/si";
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

const BurgerMenu = ({app, setApp}) => {
  return(<>
    {app === 'netflix' && <div className='absolute top-0 p-10 right-0 xl:right-20 z-30 place-items-center grid grid-flow-row w-20 h-30 xl:h-40 xl:w-40 opacity-0 hover:opacity-100 bg-green-200'><button onClick={()=> setApp('youtube')}><SiYoutube/></button><button onClick={()=> setApp('twitter')}><SiTwitter/></button><button onClick={()=> setApp(null)}><SiHouzz/></button></div>}
    {app === 'youtube' && <div className='absolute top-0 p-10 right-0 xl:right-20 z-30 place-items-center grid grid-flow-row w-20 h-30 xl:h-40 xl:w-40 opacity-0 hover:opacity-100 bg-green-200'><button onClick={()=> setApp('netflix')}><SiNetflix/></button><button onClick={()=> setApp('twitter')}><SiTwitter/></button><button onClick={()=> setApp(null)}><SiHouzz/></button></div>}
    {app === 'twitter' && <div className='absolute top-0 p-10 right-0 xl:right-20 z-30 place-items-center grid grid-flow-row w-20 h-30 xl:h-40 xl:w-40 opacity-0 hover:opacity-100 bg-green-200'><button onClick={()=> setApp('netflix')}><SiNetflix/></button><button onClick={()=> setApp('youtube')}><SiYoutube/></button><button onClick={()=> setApp(null)}><SiHouzz/></button></div>}

  </>)
}

const NavToggleAppButton = ({app, setApp}) => {
  console.log(app)
  return (
    <>
    {app === 'netflix' && <><button onClick={()=> setApp(null)}><SiNetflix/></button></>}
    {app === 'youtube' && <><button onClick={()=> setApp(null)}><SiYoutube/></button></>}
    {app === 'twitter' && <><button onClick={()=> setApp(null)}><SiTwitter/></button></>}
    </>
  )
}
const Nav = ({app, modalSelected, functions, props, setRoute}) => {
  const className = "text-white grid grid-cols-1 rounded h-20 w-full top-0 bg-opacity-0 shanghai tower"
    return (
      <div className={className} >
        
        <div className="ml-20 grid grid-flow-col justify-items-start items-center w-1/4 text-sm ">
          
          <button onClick={()=> setRoute('home')}>{props.smText}</button>
          <button onClick={()=> {
          functions.setBioModalCard(props)
          functions.setBioModalSelected(!modalSelected)
        }}>About</button>
          <button onClick={()=> setRoute('projects')}>Home</button>
          <button onClick={()=> setRoute('blog')}>TV Shows</button>
          <button onClick={()=> setRoute('projects')}>Movies</button>
          <button onClick={()=> setRoute('blog')}>New & Popular</button>
          <button onClick={()=> setRoute('blog')}>My List</button>
          <NavToggleAppButton app={app} setApp={functions.setApp} />
        </div>

      </div>            
    )
}
const Hero = ({modalSelected, functions, props}) => {
  const className = "relative text-white text-sm bg-green-100 grid grid-cols-1 place-items-center rounded h-3/4 w-full bg-cover"
  return (
    <div style={{ backgroundImage: `url(${shanghaitower})` }} className={className}>
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
  const [emailForm, setEmailForm] = useState(false)
  const isBio = type === 'bio'
  const conditionalStyle = `h-5/6 w-3/4 xl:w-1/4 ${props.modalSelected ? 'z-30' : 'z-0' }`
  const containerClass = `bg-green-400 text-black grid grid-cols-1 place-items-center absolute rounded mt-5 ${conditionalStyle} `
  const buttonClass= "h-full w-full opacity-0 absolute" + ' ' + (props.modalSelected ? 'z-20' : 'z-0')
  const closeModal = () => {
    props.setModalSelected(!props.modalSelected)
  }

  return (
    props.modalSelected &&  
      <>
        <button onClick={closeModal} className={buttonClass}> 
      
        </button>
        
        <div style={{ backgroundImage: `url(${bgImage})` }} className={containerClass}> 
          
          <>
            <div style={{ backgroundImage: `url(${props?.modalCard?.homeImage})` }} className='absolute top-10 h-60 w-80 bg-cover'>
              
            </div>
            <button onClick={closeModal} className='top-3 right-3 h-5 w-5 absolute'><IoIosClose className='h-full w-full'/></button><p className='absolute top-3'>{props?.modalCard?.smText}</p>
            <p className='absolute bottom-3 text-xs p-4'>{props?.modalCard?.lgText}</p>
            {isBio && <div className="absolute bottom-3 right-3 w-1/4 grid grid-flow-col"> <button onClick={()=> props.setEmailModalSelected(true)}><SiGmail /></button><a href='https://twitter.com/yassinelsir1'><SiTwitter /></a><a href='https://www.linkedin.com/in/yassin-elsir-2ab05b174/'><SiLinkedin /></a></div>}
            {emailForm && <></>}
            </>
          
          
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
  const containerClass = `place-items-center gap-10 grid ${vertical ? 'grid-flow-row' : 'grid-flow-col'}`

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

const ModalitySelect = ({props}) => {
  return (
    props.app === null && <div className="h-full w-full grid grid-flow-row place-items-center">
      <p className="mt-40 xl:mt-80 mb-10 text-base font-semibold text-black">Choose your Web App Modality</p>
      <div className="grid grid-flow-col gap-10 place-items-center">
        <button className="" onClick={()=> props.setApp('netflix')}><SiNetflix className="w-20 h-20"/></button>
        <button className="" onClick={()=> props.setApp('youtube')}><SiYoutube className="w-20 h-20"/></button>
        <button className="" onClick={()=> props.setApp('twitter')}><SiTwitter className="w-20 h-20"/></button>
      </div>
    </div>
  )
}
const Netflix = ({props}) => {
  return (
    <div className={props.container + ' bg-black'}> 
        <Modal props={{modalCard: props.modalCard, modalSelected: props.modalSelected ,setModalSelected: props.setModalSelected}} />
        <Modal type='email' props={{modalCard: props.emailModalCard, modalSelected: props.emailModalSelected ,setModalSelected: props.setEmailModalSelected}} />
        <Modal type='bio' props={{modalCard: props.bioModalCard, modalSelected: props.bioModalSelected ,setModalSelected: props.setBioModalSelected, setEmailModalSelected: props.setEmailModalSelected, emailModalCard: props.emailModalCard, emailModalSelected: props.emailModalSelected }} />
        <BurgerMenu props={props} />
        <div className={`w-full h-full ${props.backgroundOpacity}`}>
          <Nav setRoute={props.setRoute} modalSelected={props.bioModalSelected} functions={props.stateFunctions} props={data.nav} app={props.app} />
          {props.route === 'home' && <><Hero modalSelected={props.modalSelected} functions={props.stateFunctions} props={props.heroCard} />
            <div className={`grid grid-flow-col w-full h-1/6 mt-3`}>
            <CardCarousel increment={2} modalSelected={props.modalSelected} functions={props.stateFunctions} props={data.cards} />
            </div>
          </>}
          {props.route === 'projects' && <div className="grid grid-flow-row mt-20">
            {[1,2,3,4].map(carousel=>{return(<CardCarousel key={carousel} increment={4} modalSelected={props.modalSelected} functions={props.stateFunctions} props={data.cards} />)})}
            </div>}
            {props.route === 'blog' && <div className="grid grid-flow-row mt-20">
            {[1,2,3,4].map(carousel=>{return(<CardCarousel key={carousel} increment={4} modalSelected={props.modalSelected} functions={props.stateFunctions} props={data.cards} />)})}
            </div>}
        </div>
        
      </div>
  )
}



const App = () => {
  const [app, setApp] = useState(null)
  const [route, setRoute] = useState('home')
  const [modalCard, setModalCard] = useState(null)
  const [emailModalCard, setEmailModalCard] = useState(null)
  const [bioModalCard, setBioModalCard] = useState(null)
  const [heroCard, setHeroCard] = useState(data.cards[Math.floor(Math.random() * data.cards.length)])
  const [modalSelected, setModalSelected] = useState(false)
  const [emailModalSelected, setEmailModalSelected] = useState(false)
  const [bioModalSelected, setBioModalSelected] = useState(false)
  const stateFunctions = {setModalCard, setModalSelected, setEmailModalCard, setEmailModalSelected, setApp, setBioModalCard, setBioModalSelected}
  const container = 'w-screen h-screen grid grid-flow-row justify-items-center relative z-10'
  const backgroundOpacity = ( modalSelected ? 'opacity-50' : 'opacity-100' )
  const props={
    app, setApp, route, setRoute, modalCard, setModalCard, emailModalCard, setEmailModalCard, 
    bioModalCard, setBioModalCard, heroCard, setHeroCard, modalSelected, setModalSelected, emailModalSelected, 
    setEmailModalSelected, bioModalSelected, setBioModalSelected, stateFunctions, container, backgroundOpacity
  }

    return ( 
      <>
      <ModalitySelect props={props} />      
      {props.app === 'netflix' && <Netflix props={props}/>}
      {props.app === 'youtube' && <Netflix props={props}/>}
      {props.app === 'twitter' && <Netflix props={props}/>}
      </>
    )
}
export default App
