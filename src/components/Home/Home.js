import React from 'react';
import { IconContext } from 'react-icons';
import {
  AiFillGithub,
  AiOutlineInstagram,
  AiFillYoutube,
  AiFillTwitterCircle,
  AiFillLinkedin,
} from 'react-icons/ai';

import Model from '../Model/Model';

import homeStyles from './styles.module.scss';

const Home = () => {
  return (
    <div className={homeStyles.layout}>
      <div className={homeStyles.info}>
        <h1>Neeraj Lagwankar</h1>
        <p>
          <b>React</b> and <b>Nodejs</b> developer.
        </p>
        <p>
          Passionate graphics designer and animator who is also interested in 3D
          stuff.
        </p>
        <div>
          <IconContext.Provider value={{ size: '2em', color: '#3a3a3a' }}>
            <div className={homeStyles.icons}>
              <a
                href="https://github.com/FlashBlaze"
                rel="noopener noreferrer"
                target="_blank"
              >
                <AiFillGithub />
              </a>
              <a
                href="https://instagram.com/neeraj_artx"
                rel="noopener noreferrer"
                target="_blank"
              >
                <AiOutlineInstagram />
              </a>
              <a
                href="https://www.youtube.com/channel/UCQKfDFA1cCAB1Oq5B6Vr7ew"
                rel="noopener noreferrer"
                target="_blank"
              >
                <AiFillYoutube />
              </a>
              <a
                href="https://twitter.com/neeraj_artx"
                rel="noopener noreferrer"
                target="_blank"
              >
                <AiFillTwitterCircle />
              </a>
              <a
                href="https://www.linkedin.com/in/neeraj-lagwankar/"
                rel="noopener noreferrer"
                target="_blank"
              >
                <AiFillLinkedin />
              </a>
            </div>
          </IconContext.Provider>
        </div>
      </div>
      <div className={homeStyles.model}>
        <Model />
      </div>
    </div>
  );
};

export default Home;
