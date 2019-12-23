import React from 'react';
import { IconContext } from 'react-icons';
import {
  AiFillGithub,
  AiOutlineInstagram,
  AiFillYoutube,
  AiFillTwitterCircle,
} from 'react-icons/ai';

import Model from '../Model/Model';

import homeStyles from './styles.module.scss';

const Home = () => {
  return (
    <div className={homeStyles.layout}>
      <div className={homeStyles.info}>
        <h1>Neeraj Lagwankar</h1>
        <p>
          Enroute to <b>full stack developer</b>.
        </p>
        <p>Passionate graphics designer and animator</p>
        <div>
          <IconContext.Provider value={{ size: '2em', color: '#3a3a3a' }}>
            <div className={homeStyles.icons}>
              <AiFillGithub />
              <AiOutlineInstagram />
              <AiFillYoutube />
              <AiFillTwitterCircle />
            </div>
          </IconContext.Provider>
        </div>
      </div>
      <Model />
    </div>
  );
};

export default Home;
