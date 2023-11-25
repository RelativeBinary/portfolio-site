import "./App.css";
import OpeningScreen from "./components/openingScreen/OpeningScreen";
import React from "react";
import gsap from "gsap";

let tl = gsap.timeline();

function App() {
  const mainRef = React.useRef();

  React.useLayoutEffect(() => {
    const gsapMainRef = gsap.utils.selector(mainRef.current)("div");
    let ctx = gsap.context(() => {
      tl.from(gsapMainRef, {
        ease: "power4.out",
        opacity: 0,
        delay: 10,
        duration: 5,
      });
    });
    return () => ctx.revert();
  }, []);

  return (
    <>
      <div className={"app__opening-screen-wrapper"}>
        <OpeningScreen />
      </div>
      <div className={"app__main-wrapper"} ref={mainRef}>
        <div>Hello world</div>
        {/* 
          probably want the same skewed text from bottom with scramble (scramble once)
        */}
      </div>
    </>
  );
}

export default App;
