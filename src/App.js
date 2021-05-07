import React, {useEffect}from "react";
import Navbar from "./components/Navbars";
import { HashRouter as Router, Switch, Route} from "react-router-dom";
import "./App.css";
import Home from "./components/pages/Home";
import Services from "./components/pages/Services";
import Projects from "./components/pages/Projects";
import ScrollToTop from "./components/Scroll";
import Aos from "aos";
import "aos/dist/aos.css";




function App() {

  useEffect(() => {
    Aos.init({})
    
    },[])

  
  return (
    <>
    
      <Router >
        <Navbar />
        <ScrollToTop/>
        <Switch>
          <Route path="/" exact component = {Home}/>
          <Route path="/services" exact component = {Services}/>
          <Route path="/projects" exact component = {Projects}/>
         
          
        </Switch>
      </Router>
      
    </>
  );
}

export default App;
