import React from 'react'

const lightPurple = '#D0C8E9'
const darkPurple = '#330C49'


export const homeObjOne = {
  id: 'about',
  idwrapper: 'aboutwrapper',
  lightBg: false,
  lightText: true,
  lightTextDesc: true,
  topLine: 'About me',
  headline: 'David Liu',
  description: <p>
    Hi! I've wanted to build my own website for the longest time so that I could try developing different things
    and also show a little bit about myself.
    <br/><br/>
    As a short intro, I was born and raised in NYC (or rather a small suburb of it)
    and attended the <b style={{color: lightPurple}}>University of Chicago</b>,
    and graduated in 2022 with a Bachelors
    in Computer Science and Economics.
    <br/><br/>
    Today, I'm working remotely as a <b style={{color: lightPurple}}>Software Engineer at Yahoo</b>, while pursing some interests on the side.
    It's been a pretty good time.
  </p>,
  buttonLabel: 'Resume',
  imgStart: false,
  img: require('../../images/profilepic.png'),
  alt: 'David',
  dark: true,
  primary: true,
  darkText: false,
  linkRef: "https://drive.google.com/file/d/1JJm_IAwIkRtoLOoDq6NWhVFz6OOE8Tpv/preview"
}

export const homeObjTwo = {
  id: 'interests',
  idwrapper: 'interestswrapper',
  lightBg: true,
  lightText: false,
  lightTextDesc: false,
  topLine: 'My Interests',
  headline: 'Variety work',
  description: <div>
    In tech, through my current role as a <b style={{color: darkPurple}}>Production Engineer</b> I've garnered an interest
    in automation and efficiencies, specifically on how to reduce and simplify existing systems using frameworks and AI.
    <br/><br/>
    During my free time, I can be found building mechanical keyboards, cooking using food science,
    <b style={{color: darkPurple}}> organizing spreadsheets</b>, adventuring outdoors, tutoring, working out,
    and perusing law and crime news.
    <br/><br/>
    One of my key passions is <b style={{color: darkPurple}}>event planning</b>, whether it's for a club, workplace, party, or
    vacation, if there's an opportunity I always try to be a part of it. I don't know why I enjoy it so much.
  </div>,
  buttonLabel: 'My spreadsheets',
  imgStart: true,
  img: require('../../images/undraw_educator_re_ju47.svg'),
  alt: 'Interests',
  dark: false,
  primary: false,
  darkText: true,
  linkRef: "https://drive.google.com/drive/u/2/folders/1Su2RrV7zt-fZYIWyg7A7FQkvEoXyHUFQ?preview"
}

export const homeObjThree = {
  id: 'purpose',
  idwrapper: 'purposewrapper',
  lightBg: false,
  lightText: true,
  lightTextDesc: true,
  topLine: 'my website',
  headline: "The purpose",
  description: <div>
    This site is still in development, so to keep myself organized and on track,
    I'll be updating the features I have planned and in progress on a separate page.
    I'm still getting acclimated to frontend development, so it's likely going to be a long but fun journey.
    <br/><br/>
    I would say one factor driving me to make this website is to grow an <b style={{color: lightPurple}}>extension of myself. </b>
    When I was younger, I often found myself lagging behind those who were more artistically talented than me, but I always had ideas
    to design and create things. Now I have a way to put some of those ideas into existence.
  </div>,
  buttonLabel: 'Media gallery (TBD)',
  imgStart: false,
  img: require('../../images/svg-2.svg'),
  alt: 'purpose',
  dark: true,
  primary: true,
  darkText: false,
  linkRef: "https://docs.google.com/document/d/1Ovf_qBS0vfUTw018aqn4eoGpA8Z6baGgKkxfF8MN8Ts/edit?usp=sharing"
}