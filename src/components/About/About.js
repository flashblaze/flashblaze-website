import React from 'react';

import aboutStyles from './styles.module.scss';

const About = () => {
  // Month starts from 0
  const birthday = new Date(1997, 1, 6);
  const ageDiff = new Date(Date.now() - birthday.getTime());
  const age = Math.abs(ageDiff.getUTCFullYear() - 1970);

  return (
    <div className={aboutStyles.container}>
      <div className={aboutStyles.about}>
        <h2>About me</h2>
        <div>
          <p>
            I'm a {age} year old front-end developer who likes to work with{' '}
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
            . <br />I also like to develop some simple scripts using{' '}
            <b>Python</b> such as{' '}
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
            . Recently I'm also getting into minor app development using{' '}
            <b>Flutter</b>. You can find the app <i>Hacker News Reader</i> on{' '}
            <a
              href="https://play.google.com/store/apps/details?id=com.flashblaze.ycnews"
              rel="noopener noreferrer"
              target="_blank"
              aria-label="Hacker News Reader link"
            >
              Play Store
            </a>{' '}
            and the source code on{' '}
            <a
              href="https://github.com/FlashBlaze/ycnews"
              rel="noopener noreferrer"
              target="_blank"
              aria-label="GitHub Hacker News Reader link"
            >
              GitHub
            </a>
          </p>
          <p>
            I also love working with After Effects, Photoshop, Gimp and Blender.
          </p>
        </div>
      </div>

      <div className={aboutStyles.contactMe}>
        <h2>Contact me</h2>
        <p>
          Get in touch:{' '}
          <a href="mailto:neerajlagwankar@gmail.com">
            <i>neerajlagwankar@gmail.com</i>
          </a>
        </p>
        <p>Find me here:</p>
        <ul>
          <li>
            <a
              href="https://github.com/FlashBlaze"
              rel="noopener noreferrer"
              target="_blank"
              aria-label="GitHub link"
            >
              GitHub
            </a>
          </li>
          <li>
            <a
              href="https://play.google.com/store/apps/developer?id=Neeraj+Lagwankar"
              rel="noopener noreferrer"
              target="_blank"
              aria-label="Play Store link"
            >
              Play Store
            </a>
          </li>
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
