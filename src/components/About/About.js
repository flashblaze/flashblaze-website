import React from 'react';

import aboutStyles from './styles.module.scss';

const About = () => {
  return (
    <div className={aboutStyles.container}>
      <div className={aboutStyles.about}>
        <h2>About me</h2>
        <p>
          I'm a 22 year old front-end developer who likes to work with{' '}
          <b>React</b> and <b>Nodejs</b>. I like building minimalist UIs and
          everything I have done can be found on{' '}
          <a
            href="https://github.com/FlashBlaze"
            rel="noopener noreferrer"
            target="_blank"
            aria-label="GitHub"
          >
            GitHub
          </a>
          .
          <p>
            I also like to develop some simple scripts using <b>Python</b> such
            as{' '}
            <a
              href="https://github.com/FlashBlaze/yts-downloader"
              rel="noopener noreferrer"
              target="_blank"
              aria-label="yts-downloader link"
            >
              yts-downloader
            </a>{' '}
            and{' '}
            <a
              href="https://github.com/FlashBlaze/reddit-bots"
              rel="noopener noreferrer"
              target="_blank"
              aria-label="reddit-bots link"
            >
              reddit-bots
            </a>
            .
          </p>
          <p>I also love working with After Effects, Photoshop, and Blender.</p>
        </p>
      </div>

      <div className={aboutStyles.contactMe}>
        <h2>Contact me</h2>
        <p>
          Get in touch: <i>neerajlagwankar@gmail.com</i>
        </p>
        <p>I'm also available here:</p>
        <ul>
          <li>
            <a
              href="https://www.linkedin.com/in/neeraj-lagwankar/"
              rel="noopener noreferrer"
              target="_blank"
              aria-label="LinkedIn link"
            >
              LinkedIn
            </a>
          </li>
          <li>
            <a
              href="https://instagram.com/neeraj_artx"
              rel="noopener noreferrer"
              target="_blank"
              aria-label="Instagram link"
            >
              Instagram
            </a>
          </li>
          <li>
            <a
              href="https://twitter.com/neeraj_artx"
              rel="noopener noreferrer"
              target="_blank"
              aria-label="Twitter link"
            >
              Twitter
            </a>
          </li>
          <li>
            <a
              href="https://t.me/flashblaze"
              rel="noopener noreferrer"
              target="_blank"
              aria-label="Telegram link"
            >
              Telegram
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default About;
