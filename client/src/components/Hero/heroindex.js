import React from 'react'
import Navbar from '../Navbar/navindex'
import {HeroBtn, HeroContainer, HeroContent, HeroH1, HeroItems, HeroP} from './HeroElements'

const Home = () => {
  return (
    <HeroContainer>
         <Navbar />
         <HeroContent>
          <HeroItems>
            <HeroH1>THE DHABAWALA</HeroH1>
            <HeroP>Reservation for your dhaba</HeroP>
            <HeroBtn>Book a Table</HeroBtn>
          </HeroItems>
         </HeroContent>
    </HeroContainer>
  )
}

export default Home