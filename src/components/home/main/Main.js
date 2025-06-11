import React from 'react';
import './Main.css';
import { RandomReveal } from 'react-random-reveal';
import pfp2 from '../../../resources/pfp-2.jpg';
import pfp3 from '../../../resources/pfp-3.jpeg';
import pfp4 from '../../../resources/pfp-4.jpg';
import enchantmentTable from '../../../resources/enchantment-table.gif';
import sky from '../../../resources/sky.jpg';
import { Link } from 'react-router-dom';

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
        ck
        {/* <img className={'main__heading-gif'} src={enchantmentTable} alt='gif' /> */}
      </span>

      <p>
        software engineer / web developer.<br/> 
      </p>

      <div className={'main__pfp-wrapper'}>
        <img src={pfp2} alt={'pfp'} className={'main__pfp-2'} />
      </div>

      <h4 className='main__list-title'>clicky things:</h4>
      <li>
        <a
          className='main__link'
          href='https://www.linkedin.com/in/patrick-bornay-2ab4b013b/'
          target='_blank'
          rel='noreferrer'
        >
          linkedin
        </a>
      </li>
      <li>
        <a
          className='main__link'
          href='https://substack.com/@patbornay'
          target='_blank'
          rel='noreferrer'
        >
          substack
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
      {/* <li>
        <Link to='/common-place' target='_blank'>
          common place
        </Link>
      </li> */}

      <h4 className='main__list-title'>Projects:</h4>   
      <li>
        <a
          className='main__link'
          href='https://kanban-boilerplate.vercel.app/'
          target='_blank'
          rel='noreferrer'
        >
          CRUD kanban webapp (ReactJS with TS, NodeJS with TS, Supabase, Render)
        </a>
      </li>

      <h4 className='main__list-title'>learnings:</h4>   
      <li>
        <a
          className='main__link'
          href='https://patbornay.substack.com/p/uiux-balancing-cost-and-functionality'
          target='_blank'
          rel='noreferrer'
        >
          UI/UX: balancing cost and functionality - refresh button
        </a>
      </li>
      <li>
        <a
          className='main__link'
          href='https://patbornay.substack.com/p/react-notes-incorrect-use-of-useeffect'
          target='_blank'
          rel='noreferrer'
        >
          react notes - incorrect use of useEffect when using react query
        </a>
      </li>

      {/* <p>Will add stuff i've gotten to a somewhat 'finished' state soon...</p> */}
      {/* <li>WAM calculator (ReactJS app hosted through githup pages)</li> */}
    </div>
  );
}
