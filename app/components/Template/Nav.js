import React from 'react';
import { Link } from 'react-router-dom';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';


import data from '../../data/contact';

const Nav = () => (
  <section id="sidebar">
    <section id="intro">
      <Link to="/" className="logo">
        <img src={`${BASE_PATH}/images/me_icon.png`} alt="" />
      </Link>
      <header>
        <h2>Abdulganiyu Yusufu</h2>
        <p><a href="mailto:abdulyusufu@cmail.carleton.ca">abdulyusufu@cmail.carleton.ca</a></p>
      </header>
    </section>

    <section className="blurb">
      <h2>About</h2>
      <p>Hi, I&apos;m Abdul. I live breathe and eat code.Just kidding... Or am I...
            I am a <a href="https://carleton.ca/">Carleton University</a> graduate and I&apos;m currently a full stack and mobile developer, I also develop games in my free time, which I&apos;m too embarrassed to show to anyone but I will someday. Probably.
      </p>
      <ul className="actions">
        <li>
          {window.location.pathname !== `${BASE_PATH}/resume` ? <Link to="/resume" className="button">Learn More</Link> : <Link to="/about" className="button">More about Me</Link>}
        </li>
      </ul>
    </section>

    <section id="footer">
      <ul className="icons">
        {data.map(s => (
          <li key={s.label}><a href={s.link}><FontAwesomeIcon icon={s.icon} /></a></li>
        ))}
      </ul>
      <p className="copyright">&copy; Abdulganiyu Yusufu <Link to="/">abdulganiyuyusufu.com</Link>.</p>
    </section>
  </section>
);

export default Nav;
