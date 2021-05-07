import React from 'react'
import "../../App.css"
// import HeroSection from "../HeroSection"
import Cards from "../Cards"
import Footer from "../Footer"
import CustomCard from "../CustomCard"
import InfiniteLoop from "../InfiniteLoop"


function Home() {
    return (
        <>
            {/* <HeroSection /> */}
            <CustomCard />
            <InfiniteLoop />
            <Cards />
            <Footer />
        </>
    )
}

export default Home
