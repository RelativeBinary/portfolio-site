import './App.css';
import OpeningScreen from './components/home/openingScreen/OpeningScreen';
import Main from './components/home/main/Main';
import React from 'react';
import gsap from 'gsap';
import pfp2 from './resources/pfp-2.jpg';

let tl = gsap.timeline();

function App() {
  const mainRef = React.useRef();

  React.useLayoutEffect(() => {
    const gsapMainRef = gsap.utils.selector(mainRef.current)('div');
    let ctx = gsap.context(() => {
      tl.from(gsapMainRef, {
        ease: 'power4.out',
        opacity: 0,
        delay: 4.5,
        duration: 5,
      });
    });
    return () => ctx.revert();
  }, []);

  return (
    <>
      <div className={'app__opening-screen-wrapper'}>
        <OpeningScreen />
      </div>
      <div className={'app__main-wrapper'} ref={mainRef}>
        <Main />
      </div>
    </>
  );
}

export default App;
