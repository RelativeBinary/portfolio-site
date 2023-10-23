import React from "react";
import { RandomReveal } from "react-random-reveal";
import gsap from "gsap";
import "./OpeningScreen.css";

let tl = gsap.timeline();

export default function OpeningScreen() {
  const textRef1 = React.useRef();
  const textRef2 = React.useRef();
  const textRef3 = React.useRef();
  const boxRef1 = React.useRef();
  const boxRef2 = React.useRef();
  const boxRef3 = React.useRef();
  // typically it's best to useLayoutEffect() instead of useEffect() to have React render the initial state properly from the very start. https://gsap.com/community/forums/topic/35570-elements-return-to-their-start-position-when-they-should-stay/
  React.useLayoutEffect(() => {
    const textRefs = [textRef1.current, textRef2.current, textRef3.current];
    const textSpanRefs = [
      gsap.utils.selector(textRef1.current)('span'), 
      gsap.utils.selector(textRef2.current)('span'), 
      gsap.utils.selector(textRef3.current)('span')
    ];
    const boxRefs = [boxRef1.current, boxRef2.current, boxRef3.current];

    // context which works around the useEffect running TWICE and breaking animations logic
    let ctx = gsap.context(() => {
      // all your GSAP animation code here
      tl.from(textSpanRefs, {
        y: 100,
        skewY: 7,
        ease: "power4.out",
        duration: 1.5,
      })
        .to(boxRefs, 1.5, {
          height: 0,
          ease: "expo.inOut",
          stagger: 0.1,
        })
        .to(textSpanRefs, 1.5, {
          duration: 1.5,
          x: 100,
          autoAlpha: 0,
          stagger: 0.2,
        });
    });
    return () => ctx.revert(); // <- cleanup!
  }, []);

  return (
    <div className="opening-screen__wrapper">
      <div>
        <div className="opening-screen__text" ref={textRef1}>
          <span>
            <RandomReveal
              isPlaying
              duration={1}
              revealDuration={1.5}
              characters="development development development"
              characterSet={["?", ">", "<", "$", "%", "#", "*", "!"]}
              onComplete={() => ({ shouldRepeat: true, delay: 3 })}
            />
          </span>
          
        </div>
        <div className="opening-screen__text" ref={textRef2}>
            <span>
              <RandomReveal
                isPlaying
                duration={1}
                revealDuration={1.5}
                characters="development development development"
                characterSet={["?", ">", "<", "$", "%", "#", "*", "!"]}
                onComplete={() => ({ shouldRepeat: true, delay: 3 })}
              />
            </span>
          </div>
            <div className="opening-screen__text" ref={textRef3}>
          <span>
            <RandomReveal
              isPlaying
              duration={1}
              revealDuration={1.5}
              characters="development development development"
              characterSet={["?", ">", "<", "$", "%", "#", "*", "!"]}
              onComplete={() => ({ shouldRepeat: true, delay: 3 })}
            />
          </span>
        </div>
        <div className="opening-screen__box" ref={boxRef1}>[01]</div>
        <div className="opening-screen__box2" ref={boxRef2}>[02]</div>
        <div className="opening-screen__box3" ref={boxRef3}>[03]</div>
      </div>
    </div>
  );
}
