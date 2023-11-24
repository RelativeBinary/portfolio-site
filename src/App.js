import './App.css';
import OpeningScreen from './components/openingScreen/OpeningScreen';
import React from 'react';
import gsap from 'gsap';

let tl = gsap.timeline();

function App() {
  const openingScreenWrapperRef = React.useRef();

  React.useLayoutEffect(() => {
    const selectedRef = gsap.utils.selector(openingScreenWrapperRef.current);
    let ctx = gsap.context(() => {
      tl.from(selectedRef, {});
    });
    return () => ctx.revert();
  }, []);

  return (
    <>
      <div
        className={'app__opening-screen-wrapper'}
        ref={openingScreenWrapperRef}
      >
        <OpeningScreen />
      </div>
      <div className={'app__main'}>
        <h1>Hello world</h1>
      </div>
    </>
  );
}

export default App;
