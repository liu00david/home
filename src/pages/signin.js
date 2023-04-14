import React, { useState } from 'react'
import NavbarPages from '../components/NavbarPages';
import Signin from '../components/Signin';
import Footer from '../components/Footer';
import ScrollToTop from '../components/Signin/ScrollToTop';


const SigninPage = () => {
  const [isOpen, setIsOpen] = useState(false)
  const toggle = () => {
    setIsOpen(!isOpen)
  }

  return (
    <>
      <ScrollToTop />
      <NavbarPages toggle={toggle} />
      <Signin />
      <Footer />
    </>
  )
}

export default SigninPage