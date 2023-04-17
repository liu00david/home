import React from 'react'

const lightPurple = '#D0C8E9'
const darkPurple = '#330C49'


export const homeObjOne = {
  id: 'about',
  lightBg: false,
  lightText: true,
  lightTextDesc: true,
  topLine: 'About me',
  headline: 'David Liu',
  description: <p>
    Welcome! I've wanted to build my own website for the longest time, where I could try developing different things
    and also show a little bit about myself.
    <br/><br/>
    As a short intro, I was born and raised in NYC (or rather a small suburb of it)
    and attended the <b style={{color: lightPurple}}>University of Chicago</b>,
    and I graduated in 2022 with a Bachelors
    in Computer Science and Economics.
    <br/><br/>
    Today, I'm working remotely as a <b style={{color: lightPurple}}>Software Engineer at Yahoo</b>, while pursing some interests on the side.
    I think it's been a pretty good time.
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
  lightBg: true,
  lightText: false,
  lightTextDesc: false,
  topLine: 'My Interests',
  headline: 'A large variety',
  description: <div>
    In tech, through my current role as a <b style={{color: darkPurple}}>Production Engineer</b> I've garnered an interest
    in automation and efficiencies, specifically on how to reduce and simplify existing systems using frameworks and AI.
    <br/><br/>
    During my free time, I can be found building mechanical keyboards, cooking using food science,
    <b style={{color: darkPurple}}> organizing spreadsheets</b>, adventuring outdoors, tutoring, weightlifting,
    and perusing law and crime news.
    <br/><br/>
    One of my key passions is <b style={{color: darkPurple}}>event planning</b>, whether it's for an RSO, workplace, party, or
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
  lightBg: false,
  lightText: true,
  lightTextDesc: true,
  topLine: 'my website',
  headline: "The purpose",
  description: <div>
    I'm still thinking about how to organize this website, so to keep myself organized and on track,
    I'll be updating the features I have planned and in progress on a separate page.
    I'm not very experienced in frontend development so this is going to be a long but fun journey.
    <br/><br/>
    I would say one factor driving my desire to develop this site is to bloom an <b style={{color: lightPurple}}>extension of myself artistically. </b>
    Growing up, I often found myself lagging behind those who were more artistically talented than me. But I always kept
    a <b style={{color: lightPurple}}>vivid imagination</b> to plan and create things - so here's my chance.
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