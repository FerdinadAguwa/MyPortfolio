import React from 'react';
import CardItem from "./CardItem";
import "./Cards.css";
import DogBlogg from "../images/dogblogg.jpeg"
import MvpLibrary from "../images/MvpLibrary.png"
import MusicMvp from "../images/MusicMvp.png"
import BurgerApp from "../images/BurgerApp.png"
import FitnessTracker from "../images/FitnessTracker.png"




function Cards() {
    return (
        <div className="cards">
            <h1 className="projectSectionTitle"> Check out<span className="spanTitle" > My Projects </span></h1>
            <div className="cards__container"
             data-aos="fade-up"
             data-aos-offset="200"
             data-aos-delay="50"
             data-aos-duration="1000"
             data-aos-easing="ease-in-out"
             data-aos-mirror="true"
            
            >
                <div className="cards__wrapper">
                    <ul className="cards__items">
                        <CardItem
                        
                            src= {DogBlogg}
                            text='Explore the "Dog Blogg" page in my GitHub Repository'
                            label="DogBlogg"
                            href="https://dog-blog-mvp.herokuapp.com/"
                        />
                          <CardItem
                            src={MvpLibrary}
                            text='Explore the "MVP Library" page in my GitHub Repository'
                            label="MVP Library"
                            href="https://mvplibrary.herokuapp.com/"
                        />
                    </ul>
                    <ul className="cards__items">
                        <CardItem
                            src={MusicMvp}
                            text='Explore the "Music Mvp" page in my GitHub Repository'
                            label="Music MVP"
                            href="https://ferdinadaguwa.github.io/musicTopTen/"
                        />
                          <CardItem
                            src={BurgerApp}
                            text='Explore the "Burger App" page in my GitHub Repository'
                            label="Burger App"
                            href="https://sleepy-journey-98466.herokuapp.com/"
                        />
                          <CardItem
                            src={FitnessTracker}
                            text='Explore the "Fitness Tracker" page in my GitHub Repository'
                            label="Fitness Tracker"
                            href="https://limitless-headland-73323.herokuapp.com/?id=60490bec52cf720015d40079"
                        />
                    </ul>
                </div>
            </div>

        </div>
    )
}

export default Cards
