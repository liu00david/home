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
    Welcome to my website! I've wanted to build my own website where I could try building different things
    and also show some stuff about myself.
    <br/><br/>
    A little bit about me - I'm born and raised NYC (or rather a small suburb of it),
    and attended the <b style={{color: lightPurple}}>University of Chicago</b>. where I graduated in 2022 with a Bachelors
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
  linkRef: "https://drive.google.com/file/d/1FS8nsjABEhdkPfISG9lyQ1EOP9661Npi/preview"
}

export const homeObjTwo = {
  id: 'coffee',
  lightBg: true,
  lightText: false,
  lightTextDesc: false,
  topLine: 'My Interests',
  headline: 'A random jumble',
  description: <div>
    While I do enjoy coding for work and also for my own prjoects (including this website),
    I've recently picked up hobbies that have piqued my interest.
    Some include building  <b style={{color: darkPurple}}>mechanical keyboards</b>, food science involved cooking, organizing spreadsheets,
    tutoring, and watching law and crime documentaries.
    <br/><br/>
    One of my biggest passions is <b style={{color: darkPurple}}>event planning</b>, whether it's for an RSO, workplace, party, or
    vacation - I feel like I'm the most meticulous person I know. I don't know why I enjoy it so much."
  </div>,
  buttonLabel: 'Spreadsheet of things',
  imgStart: true,
  img: require('../../images/undraw_educator_re_ju47.svg'),
  alt: 'Interests',
  dark: false,
  primary: false,
  darkText: true,
  linkRef: "https://google.com"
}

export const homeObjThree = {
  id: 'mywork',
  lightBg: false,
  lightText: true,
  lightTextDesc: true,
  topLine: 'my work',
  headline: 'What I\'ve done',
  description: 'On this site, I want to showcase some of those interests, to' +
  ' be able to show others but also for my own memory to look back and see the things that I enjoyed doing.' +
  ' On another page, I\'ll present media and maybe an accompanying timeline of things frombme, like' +
  ' my spreadsheets, keyboard builds, Valorant moments, travel adventures, and more.',
  buttonLabel: 'Media gallery',
  imgStart: false,
  img: require('../../images/svg-2.svg'),
  alt: 'Work',
  dark: true,
  primary: true,
  darkText: false,
  linkRef: "https://google.com"
}