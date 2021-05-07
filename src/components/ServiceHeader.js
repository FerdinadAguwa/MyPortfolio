import React from 'react'
import TransparentImaage from "../images/computerTransparent.png"
import KartImage from "../images/computerKart.png"
import PaymentCard from "./PaymentCard";





function ServiceHeader() {
    return (
        <>
            <div className=" section text__section">
            <div className=" text transParentImg">
    <img src={TransparentImaage} alt="" className="transImg" />
    <p>Transform Software Devleopment</p>
  </div>
  <div className="text text--01"
  data-aos="flip-left"
  data-aos-easing="ease-out-cubic"
  data-aos-duration="2000"
  >
    <h3>Service+<br/>Connection</h3>
    <p>I work to Design projects with unique and authentic styling. You wont find a designer or developer who is more dedicated to bring your vision to life. I have worked with many corporations and look forward to delivering the best websites for your business. All websites are:</p>
    <li><i class="fas fa-check"></i>  Interactive</li>
    <li><i class="fas fa-check"></i>  Mobile-Friendly</li>
    <li><i class="fas fa-check"></i>  Optimized</li>
    <li><i class="fas fa-check"></i>  Responsive</li>
  </div>
</div>

<div className="titleBugetText">
  <h4>Reasonable Prices</h4>
  <h1>Made For Your Budget</h1>
  <p>With affordable prices, we have exclusive digital art and design facilities, customized for your individual needs</p>
</div>


<div className="informationSection">

<div className="CardInfoSection">
  <div className="Kart">
      <img className="KartImage" src={KartImage} alt="Computer & Shopping Cart" />
  </div>
  <div className="paymentCardContainer">
      <PaymentCard 
      Title="Basic Website"
      Subtitle ="$399"
      SecondTitle="$750"
      itemOne="6 Page Website Design"
      itemTwo="HTML Based"
      itemThree="Hover Effects"
      itemFour="2 Banner Designs"
      itemFive="Contact/Query Form"
      itemSix="Complete Deployment"
      />
      <PaymentCard 
            Title="E-Commerce Website"
            Subtitle ="$699"
            SecondTitle="$1350"
            itemOne="High-end Theme Based Design"
            itemTwo="Stock Photos"
            itemThree="Hover Effects"
            itemFour="Sliding Banner"
            itemFive="Shopping Cart Integration"
            itemSix="Complete Deployment"
      />
      <PaymentCard 
            Title="Professional Website"
            Subtitle ="$850"
            SecondTitle="$1599"
            itemOne="Up to 10 Pages Website Design"
            itemTwo="Stock Photos"
            itemThree="Hover Effects"
            itemFour="2 Sliding Banners"
            itemFive="Complete Certified HTML"
            itemSix="Complete Deployment"
      />
      </div>

  </div>


  <div className="text text--02">
    <h4>100% Ownership Rights</h4>
    <h3>100% Satisfaction Guarantee</h3>
    <p>*NO MONTHLY OR ANY HIDDEN FEE*</p>
  </div>
  
  

  </div>
</>
     
    )
}

export default ServiceHeader
