import React from 'react'
import AboutUs from '../components/AboutUs/AboutUs'
import Banner from '../components/Banner/Banner'
import CardsInfo from '../components/CardsInfo/CardsInfo'

const Home = () => {
  return (
    <div>
        <Banner/>
        <CardsInfo/>
        <AboutUs/>
    </div>
  )
}

export default Home