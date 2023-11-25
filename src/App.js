import './App.css';
import OpeningScreen from './components/openingScreen/OpeningScreen';
import React from 'react';
import gsap from 'gsap';

let tl = gsap.timeline();

function App() {
  const mainRef = React.useRef();

  React.useLayoutEffect(() => {
    const gsapMainRef = gsap.utils.selector(mainRef.current)('div');
    let ctx = gsap.context(() => {
      tl.from(gsapMainRef, {
        ease: 'power4.out',
        opacity: 0,
        delay: 8,
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
        <div className={'main__content'}>
          <h2 className={'main__heading'}>hi i'm patrick bornay</h2>
          <p>
            I do stuff on the internet, apparently i'm a software engineer
            working on frontend web app migrations, UI designs, API development
            and other stuff
          </p>
          <p>You can reach me at:</p>
          <li>linkedIn</li>
          <li>insta</li>
          <li>github</li>

          <p>Tech stack:</p>
          <li>ReactJS with Typescript, testing with Jest and Mirage</li>
          <li>Grails & Micronaut with Java/Groovy, testing with Spock.</li>
        </div>
      </div>
    </>
  );
}

export default App;
