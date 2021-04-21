import { SiGmail, SiTwitter, SiLinkedin, SiGatsby, SiReact, SiGraphql, SiJavascript, SiRails, SiRuby, SiPostgresql } from "react-icons/si";
import React from "react"
import image from './images/SLRPSI1.png'

const nav = { 
  smText: `Yassin Elsir`,
  lgText: `My name is Yassin Elsir and I'm a Software Engineer who has worked on a wide variety of fullstack projects for the web and mobile.
  My undergraduate education, in life science, is from Queen's University and I'm currently pursuing an MsC in Computer Science from UT Austin. 
  My broad academic interests revolve around AI, distrubted systems, biological engineering, chemical engineering, complex systems and sustainable energy systems. 
  My personal interests range from mid-distance running, to decentralized finance. I'd love to hear from you regarding engineering projects, ideas or proposals accross any of these areas.
  You can get a hold of me here: Mail To Yassin`,
  icons: <></>
}
const hero = { 
  smText: `Yassin Elsir`,
  lgText: `My name is Yassin Elsir and I'm a Software Engineer who has worked on a wide variety of fullstack projects for the web and mobile.
  My undergraduate education, in life science, is from Queen's University and I'm currently pursuing an MsC in Computer Science from UT Austin. 
  My broad academic interests revolve around AI, distrubted systems, biological engineering, chemical engineering, complex systems and sustainable energy systems. 
  My personal interests range from mid-distance running, to decentralized finance. I'd love to hear from you regarding engineering projects, ideas or proposals accross any of these areas.
  You can get a hold of me here: Mail To Yassin`,
  icons: <><button href=''><SiGmail /></button><a href='https://twitter.com/yassinelsir1'><SiTwitter /></a><a href='https://www.linkedin.com/in/yassin-elsir-2ab05b174/'><SiLinkedin /></a></>
}

const cards = [
    
    { homeImage: image,
      smText: `SLRPSI`,
      lgText: `What is Lorem Ipsum Lorem Ipsum is simply dummy text of the printing and typesetting industry Lorem Ipsum has been the industry's standard dummy text ever since the 1500s when an unknown printer took a galley of type and scrambled it to make a type specimen book it has?`,
      icons: <><SiGatsby /><SiReact/><SiGraphql/></>
    },
    { homeImage: image,
      smText: `WINKS`,
      lgText: `What is Lorem Ipsum Lorem Ipsum is simply dummy text of the printing and typesetting industry Lorem Ipsum has been the industry's standard dummy text ever since the 1500s when an unknown printer took a galley of type and scrambled it to make a type specimen book it has?`,
      icons: <><SiGatsby /><SiReact/><SiGraphql/></>
    },
    { homeImage: image,
      smText: `Right Dose`,
      lgText: `What is Lorem Ipsum Lorem Ipsum is simply dummy text of the printing and typesetting industry Lorem Ipsum has been the industry's standard dummy text ever since the 1500s when an unknown printer took a galley of type and scrambled it to make a type specimen book it has?`,
      icons: <><SiRails/><SiJavascript/><SiRuby/><SiPostgresql/></>
    },
    { homeImage: image,
      smText: `Party Reel`,
    lgText: `What is Lorem Ipsum Lorem Ipsum is simply dummy text of the printing and typesetting industry Lorem Ipsum has been the industry's standard dummy text ever since the 1500s when an unknown printer took a galley of type and scrambled it to make a type specimen book it has?`,
    className: {
      clicked: "text-white bg-green-300 mt-5 mb-5  grid grid-cols-1 p-4 items-center rounded h-full text-sm xl:text-base xl:w-1/6 w-5/6" ,
      notClicked: "text-white bg-green-200 mt-5 mb-5 grid grid-cols-1 items-center rounded h-10 xl:w-1/6 w-2/3"
    },
    icons: <><SiRails/><SiJavascript/><SiRuby/><SiPostgresql/></>
    },
    { homeImage: image,
      smText: `Mile High Club`,
      lgText: `What is Lorem Ipsum Lorem Ipsum is simply dummy text of the printing and typesetting industry Lorem Ipsum has been the industry's standard dummy text ever since the 1500s when an unknown printer took a galley of type and scrambled it to make a type specimen book it has?`,
      icons: <><SiRails/><SiJavascript/><SiRuby/><SiPostgresql/></>
    }
  ]
  const blogPosts = [
    
    { homeImage: image,
      smText: `1`,
      lgText: `What is Lorem Ipsum Lorem Ipsum is simply dummy text of the printing and typesetting industry Lorem Ipsum has been the industry's standard dummy text ever since the 1500s when an unknown printer took a galley of type and scrambled it to make a type specimen book it has?`,
      icons: <>
      </>
    },
    { homeImage: image,
      smText: `2`,
      lgText: `What is Lorem Ipsum Lorem Ipsum is simply dummy text of the printing and typesetting industry Lorem Ipsum has been the industry's standard dummy text ever since the 1500s when an unknown printer took a galley of type and scrambled it to make a type specimen book it has?`,
      icons: <>
      </>
    },
    { homeImage: image,
      smText: `3`,
      lgText: `What is Lorem Ipsum Lorem Ipsum is simply dummy text of the printing and typesetting industry Lorem Ipsum has been the industry's standard dummy text ever since the 1500s when an unknown printer took a galley of type and scrambled it to make a type specimen book it has?`,
      icons: <>
      </>
    },
    { homeImage: image,
      smText: `4`,
      lgText: `What is Lorem Ipsum Lorem Ipsum is simply dummy text of the printing and typesetting industry Lorem Ipsum has been the industry's standard dummy text ever since the 1500s when an unknown printer took a galley of type and scrambled it to make a type specimen book it has?`,
      icons: <>
    </>
    },
    { homeImage: image,
      smText: `5`,
      lgText: `What is Lorem Ipsum Lorem Ipsum is simply dummy text of the printing and typesetting industry Lorem Ipsum has been the industry's standard dummy text ever since the 1500s when an unknown printer took a galley of type and scrambled it to make a type specimen book it has?`,
      icons: <>
      </>
    }
  ]

const data = {
  cards: cards,
  nav: nav,
  hero: hero,
  blogPosts: blogPosts
}

export default data 