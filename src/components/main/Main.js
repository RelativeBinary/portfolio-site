import React from 'react';
import './Main.css';
import { RandomReveal } from 'react-random-reveal';
import pfp2 from '../../resources/pfp-2.jpg';

export default function Main() {
  return (
    <div className={'main__content'}>
      <span className={'main__heading'}>
        hi i'm p
        <RandomReveal
          isPlaying
          duration={1}
          revealDuration={1.5}
          characters='a'
          characterSet={['A', '4', 'a']}
          onComplete={() => ({ shouldRepeat: true, delay: 4 })}
        />
        tr
        <RandomReveal
          isPlaying
          duration={1}
          revealDuration={1.5}
          characters='i'
          characterSet={['I', '!', 'i']}
          onComplete={() => ({ shouldRepeat: true, delay: 3 })}
        />
        ck bornay
      </span>

      <p>
        I do stuff on the internet. Currently a software engineer working on
        frontend web app migrations, UI designs, API development and other
        stuff.
      </p>

      <div className={'main__pfp-wrapper'}>
        <img src={pfp2} alt={'pfp2'} className={'main__pfp'} />
      </div>

      <p>You can reach me at:</p>
      <li>
        <a
          className='main__link'
          href='https://www.linkedin.com/in/patrick-bornay-2ab4b013b/'
          target='_blank'
          rel='noreferrer'
        >
          linkedIn
        </a>
      </li>
      <li>
        <a
          className='main__link'
          href='https://www.instagram.com/patrickbornay/'
          target='_blank'
          rel='noreferrer'
        >
          insta
        </a>
      </li>
      <li>
        <a
          className='main__link'
          href='https://github.com/RelativeBinary'
          target='_blank'
          rel='noreferrer'
        >
          github
        </a>
      </li>

      <p>Tech stack:</p>
      <li>ReactJS with Typescript, testing with Jest and Mirage</li>
      <li>Grails & Micronaut with Java/Groovy, testing with Spock</li>

      <p>Will add stuff i've gotten to a somewhat 'finished' state soon...</p>
      {/* <li>WAM calculator (ReactJS app hosted through githup pages)</li> */}
    </div>
  );
}
