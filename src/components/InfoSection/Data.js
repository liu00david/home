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
    Welcome to my site, where I share a bit about myself and my interests.
    I was born and raised in NYC, and studied at the <b style={{color: lightPurple}}>University of Chicago</b> where I graduated with a Bachelors in Computer Science and Economics.
    I'm a current <b style={{color: lightPurple}}>Software Engineer at Coinbase</b> on the Backend Platform Team, and previously I worked at <b style={{color: lightPurple}}>Yahoo</b>.
    <br/><br/>
    I'm currently based out of NYC, and during my free time I like learning about traveling, cooking, personal finance, cryptocurrency, and in general more about the world.
    <br/><br/>

  </p>,
  buttonLabel: 'Resume',
  imgStart: false,
  img: require('../../images/profilepic.png'),
  alt: 'David',
  dark: true,
  primary: true,
  darkText: false,
  linkRef: "https://drive.google.com/file/d/1dsWKTMHRMgQRi9jqWuy9bnCj1qekuxNp/view?usp=sharing"
}

export const homeObjTwo = {
  id: 'interests',
  idwrapper: 'interestswrapper',
  lightBg: true,
  lightText: false,
  lightTextDesc: false,
  topLine: 'My Interests',
  headline: 'A passion to explore',
  description: <div>
    For work, as an experienced <b style={{color: darkPurple}}>Cloud Engineer</b> I've garnered an interest
    in building reliable and efficient applications in the cloud, mainly on AWS and GCP. A recent key project I led involved migrating
    Yahoo location services to a microservices and Kubernetes based architecture, and building thorough CI/CD and observability tools.
    At a company that deals with confidential user data, I also have experience in building secure and compliant systems, and how
    to leverage IaC (Infrastructure as Code) to do so across any environment.
    <br/><br/>
    During my free time, I spend a lot of time learning how to be financially savvy, through investing, budgeting, or finding ways to save on purchases.
    I believe small steps in learning how to spend and save money can have a large impact on one's life. Some things I've learned include how to find
    the best price for everyday goods, manage credit cards efficiently, get maximum value out of a vacation, and various investment methods.
    <br/><br/>
    In a similar vein, I have a passion for event planning, whether it's for a vacation, gathering, party, work event - if there's an opportunity open I try to be a part of it.
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
    I think as an engineer, sometimes it can be hard to find a creative outlet. I want to use this site to share some of what I do outside of work,
    and to provide updates for what I am doing as I progress in my career and life. One update I've recently made is starting my Instagram page
    to document some of my travels and experiences, including a video journal with friends.
    <br/><br/>
    There's so much left for me to see and do in this world, and sometimes it's helpful to revisit this site to see how I've changed in this long and uncertain journey.

  </div>,
  buttonLabel: 'Instagram',
  imgStart: false,
  img: require('../../images/svg-2.svg'),
  alt: 'instagram',
  dark: true,
  primary: true,
  darkText: false,
  linkRef: "https://www.instagram.com/finding.david/"
}