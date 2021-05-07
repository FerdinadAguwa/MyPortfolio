import ImageOne from "../../images/BurgerApp.png"
import ImageTwo from "../../images/FitnessTracker.png"
import ImageThree from "../../images/MvpLibrary.png"
import ImageFour from "../../images/img-6.jpg"




const reviews = [
    {
        id: 1,
        name: "All Repositoy",
        job: "Web Design",
        image:ImageFour,
        text:"Click here to see my all of my latest projects I have created. The Preview link will take you to my linked in",
          GitLink: "fab fa-github"  ,
          ProjectLink: "fas fa-tv" ,
          gitProject:"https://github.com/FerdinadAguwa",
          deployProject:"https://www.linkedin.com/in/ferdinad-aguwa-01924b1ab/"
      },
    {
      id: 2,
      name: "Fitness Tracker",
      job: "Web Design",
      image:ImageTwo,
      text:"The primary goal of this application is to keep you in shape. Tracking ones fitness is extremly important, and can motivate a person to keep going. Use the workout tracker and see how much you have accomplished. Good luck.",
        GitLink: "fab fa-github"  ,
        ProjectLink: "fas fa-tv",
        gitProject:"https://github.com/FerdinadAguwa/workoutTracker",
        deployProject:"limitless-headland-73323.herokuapp.com/"
    },
    {
      id: 3,
      name: "MVP Library",
      job: "Web Design",
      image:ImageThree,
      text:"Given the user wants to access their personal library, the user can have a personal authentication to load their current reads, add any books from the shared library, and remove books from their personal list once they have read it to completion.",
        GitLink: "fab fa-github"  ,
        ProjectLink: "fas fa-tv" ,
        gitProject:"https://github.com/MigsGithub/MVP_Library",
        deployProject:"https://mvplibrary.herokuapp.com"
        
    },
    
    {
        id: 4,
        name: "Burger App",
        job: "Web Design",
        image:ImageOne,
        text:
          "Here at Insomnia Burgers we make it as you order it. The application before you is set up to let the user create the burger that their heart desires. Its simple really, imput a burger that you would like to eat and the burger will appear on the screen. When the user wants to EAT UP, it will appear in the devour section.",
        GitLink: "fab fa-github"  ,
        ProjectLink: "fas fa-tv" ,
        gitProject:"https://github.com/FerdinadAguwa/BurgerApp",
        deployProject:" https://sleepy-journey-98466.herokuapp.com/"
      }
  ];
  
  export default reviews;
  