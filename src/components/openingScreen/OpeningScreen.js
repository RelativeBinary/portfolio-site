import React from 'react';
import { RandomReveal } from 'react-random-reveal';
import gsap from 'gsap';
import './OpeningScreen.css';

let tl = gsap.timeline();

export default function OpeningScreen() {
  const textRef1 = React.useRef();
  const textRef2 = React.useRef();
  const textRef3 = React.useRef();
  const textRef4 = React.useRef();
  const textRef5 = React.useRef();
  const textRef6 = React.useRef();
  const textRef7 = React.useRef();
  const textRef8 = React.useRef();
  const textRef9 = React.useRef();

  const boxRef1 = React.useRef();
  const boxRef2 = React.useRef();
  const boxRef3 = React.useRef();
  // typically it's best to useLayoutEffect() instead of useEffect() to have React render the initial state properly from the very start. https://gsap.com/community/forums/topic/35570-elements-return-to-their-start-position-when-they-should-stay/
  React.useLayoutEffect(() => {
    const textSpanRefs = [
      gsap.utils.selector(textRef1.current)('span'),
      gsap.utils.selector(textRef2.current)('span'),
      gsap.utils.selector(textRef3.current)('span'),
    ];
    const designSpanRefs = [
      gsap.utils.selector(textRef4.current)('span'),
      gsap.utils.selector(textRef5.current)('span'),
      gsap.utils.selector(textRef6.current)('span'),
    ];
    const lastSpanRefs = [
      gsap.utils.selector(textRef7.current)('span'),
      gsap.utils.selector(textRef8.current)('span'),
      gsap.utils.selector(textRef9.current)('span'),
    ];
    const allSpanRefs = [...textSpanRefs, ...designSpanRefs, ...lastSpanRefs];
    const boxRefs = [boxRef1.current, boxRef2.current, boxRef3.current];

    // context which works around the useEffect running TWICE and breaking animations logic
    let ctx = gsap.context(() => {
      // all your GSAP animation code here
      tl.from(allSpanRefs, {
        y: 100,
        skewY: 7,
        ease: 'power4.out',
        duration: 1.5,
      })
        .to(boxRefs, 1.0, {
          height: 0,
          ease: 'power2.inOut',
          stagger: 0.1,
          duration: 2.5,
        })
        .to(
          textSpanRefs,
          0.6,
          {
            x: 100,
            autoAlpha: 0,
            stagger: 0.2,
            ease: 'expo.in',
          },
          '-=1.0'
        )
        .to(
          designSpanRefs,
          1.4,
          {
            x: -100,
            autoAlpha: 0,
            stagger: 0.2,
            ease: 'expo.in',
          },
          '-=1.0'
        )
        .to(
          lastSpanRefs,
          1.5,
          {
            x: 100,
            autoAlpha: 0,
            stagger: 0.2,
            ease: 'expo.in',
          },
          '-=1.0'
        );
    });
    return () => ctx.revert(); // <- cleanup!
  }, []);

  return (
    <div className='opening-screen__wrapper'>
      <div>
        <div className='opening-screen__first text' ref={textRef1}>
          <span>
            <RandomReveal
              isPlaying
              duration={1}
              revealDuration={1.5}
              characters='welcome! welcome! welcome!'
              characterSet={['?', '>', '<', '$', '%', '#', '*', '!']}
              onComplete={() => ({ shouldRepeat: true, delay: 3 })}
            />
          </span>
        </div>
        <div className='opening-screen__first text' ref={textRef2}>
          <span>
            <RandomReveal
              isPlaying
              duration={1}
              revealDuration={1.5}
              characters='welcome! welcome! welcome!'
              characterSet={['?', '>', '<', '$', '%', '#', '*', '!']}
              onComplete={() => ({ shouldRepeat: true, delay: 3 })}
            />
          </span>
        </div>
        <div className='opening-screen__first text' ref={textRef3}>
          <span>
            <RandomReveal
              isPlaying
              duration={1}
              revealDuration={1.5}
              characters='welcome! welcome! welcome!'
              characterSet={['?', '>', '<', '$', '%', '#', '*', '!']}
              onComplete={() => ({ shouldRepeat: true, delay: 3 })}
            />
          </span>
        </div>
        {/* ==================================================== */}
        <div className='opening-screen__middle break text' ref={textRef4}>
          <span>
            <RandomReveal
              isPlaying
              duration={1}
              revealDuration={1.5}
              characters='to my website'
              characterSet={['?', '>', '<', '$', '%', '#', '*', '!']}
              onComplete={() => ({ shouldRepeat: true, delay: 3 })}
            />
          </span>
        </div>
        <div className='opening-screen__middle text' ref={textRef5}>
          <span>
            <RandomReveal
              isPlaying
              duration={1}
              revealDuration={1.5}
              characters='to my website'
              characterSet={['?', '>', '<', '$', '%', '#', '*', '!']}
              onComplete={() => ({ shouldRepeat: true, delay: 3 })}
            />
          </span>
        </div>
        <div className='opening-screen__middle text' ref={textRef6}>
          <span>
            <RandomReveal
              isPlaying
              duration={1}
              revealDuration={1.5}
              characters='to my website'
              characterSet={['?', '>', '<', '$', '%', '#', '*', '!']}
              onComplete={() => ({ shouldRepeat: true, delay: 3 })}
            />
          </span>
        </div>
        {/* ==================================================== */}
        <div className='opening-screen__last break text' ref={textRef7}>
          <span>
            <RandomReveal
              isPlaying
              duration={1}
              revealDuration={1.5}
              characters='uhh.. okay?'
              characterSet={['?', '>', '<', '$', '%', '#', '*', '!']}
              onComplete={() => ({ shouldRepeat: true, delay: 3 })}
            />
          </span>
        </div>
        <div className='opening-screen__last text' ref={textRef8}>
          <span>
            <RandomReveal
              isPlaying
              duration={1}
              revealDuration={1.5}
              characters='uhh.. okay?'
              characterSet={['?', '>', '<', '$', '%', '#', '*', '!']}
              onComplete={() => ({ shouldRepeat: true, delay: 3 })}
            />
          </span>
        </div>
        <div className='opening-screen__last text' ref={textRef9}>
          <span>
            <RandomReveal
              isPlaying
              duration={1}
              revealDuration={1.5}
              characters='uhh.. okay?'
              characterSet={['?', '>', '<', '$', '%', '#', '*', '!']}
              onComplete={() => ({ shouldRepeat: true, delay: 3 })}
            />
          </span>
        </div>
        <div className='opening-screen__box' ref={boxRef1}>
          <span className='box'>[01]</span>
        </div>
        <div className='opening-screen__box2' ref={boxRef2}>
          <span className='box'>[02]</span>
        </div>
        <div className='opening-screen__box3' ref={boxRef3}>
          <span className='box'>[03]</span>
        </div>
      </div>
    </div>
  );
}
