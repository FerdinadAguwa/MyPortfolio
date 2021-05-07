import React from 'react';
import gsap from "gsap";
import "./InfiniteLoop.css"



const Items = ["REACT", "JAVASCRIPT", "MySQL","EXPRESS","NODE", "MONGODB","CSS","HTML", "BOOTSTRAP", "SASS"];

//Component to render one element for each of the Items array.
function TextItem(props) {
  const itemList = props.items.map((item, index) => (
    <div key={index} className="carousel-item">
      {item}
      {/* <i className={item}></i> */}
     
    </div>
  ));

  //Use the onMount lifecycle equivalent with useEffect to get width of the wrapper (same than each slide) in pixels and write the timeline.
  React.useEffect(() => {
    //Get width.
    let baseWidth = 600;
    //Position all items one after another (position:absolute in the css).
    gsap.set(".carousel-item", { x: (i) => i * baseWidth });
    //Get complete width with all slides out of screen.
    let wrapWidth = (Items.length - 1) * baseWidth;
    //Animate all items and use modifiers to reset all items that reach the end (left) to the other end of the carousel (right) for the infinite looping.
    let tl = gsap.timeline({ repeat: -1 }).pause();
    setTimeout(() => {
      tl.to(".carousel-item", {
        duration: 25,
        x: "-=" + (baseWidth + wrapWidth),
        ease: "none",
        modifiers: {
          x: gsap.utils.unitize(gsap.utils.wrap(-baseWidth, wrapWidth))
        }
      }).play(); 

    },0);
  }, []);

  return (
    <>
      {itemList}
      <div>
        <br />
      </div>
    </>
  );
}

//Main Component
function InfiniteLoop() {
  const boxRef = React.useRef();
  return (
    <section id="wrap">
        <h1 className="FrameWorks">Frameworks & Libraries</h1>
      <article id="text-carousel-container" 
      ref={boxRef}
      >
        <TextItem items={Items} boxRef={boxRef} />
      </article>
    </section>
  );
}


export default InfiniteLoop;