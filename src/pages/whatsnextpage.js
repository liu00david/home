import React, { useState } from 'react'
import Navbar from '../components/Navbar';
import WhatsNext from '../components/WhatsNext';
import ScrollToTop from '../components/WhatsNext/ScrollToTop';
import Footer from '../components/Footer';

const WhatsNextPage = () => {
  const [isOpen, setIsOpen] = useState(false)
  const toggle = () => {
    setIsOpen(!isOpen)
  }

  return (
    <>
      <ScrollToTop />
      <Navbar toggle={toggle} ishomepage={false}/>
      <WhatsNext />
      <Footer />
    </>
  )
}

export default WhatsNextPage