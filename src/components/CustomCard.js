import React from 'react'
import ProfileImage from "../images/0.jpeg"
import "./CustomCard.css"
import {Link} from "react-router-dom"


function CustomCard() {
    return (
      <>
        <div className="CustomCard">
        <div
           data-aos="fade-right"
           data-aos-duration="1000"
           data-aos-anchor-placement="center bottom"
        
        className="content">
  <img src={ProfileImage}  className ="ProfileImage" alt="User Images"/>
  <div className="ProfileContainer">
    <h2><b>Ferdinad Aguwa</b></h2>
    <p><i className="fab fa-linkedin"></i> LinkedIn: <a href="https://www.linkedin.com/in/ferdinad-aguwa-01924b1ab/" target="_blank" rel="noopener noreferrer"  className="CustomCardLinks" > Ferdinad Aguwa</a></p>
    <p><i className="fab fa-github"></i> GitHub: <a href="https://github.com/FerdinadAguwa" target="_blank" rel="noopener noreferrer" className="CustomCardLinks">FerdinadAguwa</a></p>
    <p><i className="fas fa-at"></i> Email:<a href="mailto:Ferd.aguwa@yahoo.com"  target="_blank" rel="noopener noreferrer"  className="CustomCardLinks">Ferd.Aguwa@yahoo.com</a></p>
    <p><i class="far fa-file"></i> <Link to={{pathname:"tel:8172989406"}} target="_blank" className="CustomCardLinks">RESUME</Link></p>
  </div>


  </div>
  <div className="AboutMeInfo">
      <p   data-aos="fade-left"
        data-aos-duration="1000"
        data-aos-anchor-placement="center bottom">
      Front-End Web Developer passionate about usability and the creative aspect of developing and improving user centric content.
       Strong work ethic and proven ability to work effectively within a team and independently to achieve the core objectives of a company.
        Consistent top performer utilizing problem solving skills to facilitate organizational growth. 
        Skilled in designing, developing, and testing multiple applications while incorporating a wide range of technologies and languages to excel as a front-end developer.
  </p>

  </div>
</div>


<div className="skills">
  <h1 className="skillsTitle">Skills:</h1>
  <ul className="skillsList">
  <li>Problem solving</li>
  <li>Data-Analysis</li>
  <li>Leadership</li>
  <li>Creative</li>
  <li>Detailed</li>
  <li>Communication</li>
  <li>Innovative</li>
  
  </ul>
</div>
</>
    )
}

export default CustomCard
