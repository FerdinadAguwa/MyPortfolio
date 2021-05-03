import './App.css';
import {Switch, Route } from "react-router-dom";
import Hello from "./components/Hello";
import About from "./components/About";


function App() {
  return (
    <>
    <Switch>
      <Route exact path="/" component ={Hello}/>
      <Route exact path="/about" component ={About}/>
      {/* <Route component ={NotFound} status={404}/> */}
    </Switch>
     
    </>
  );
}

export default App;
