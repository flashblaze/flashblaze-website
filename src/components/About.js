/**@jsx jsx */
import { Link, jsx } from 'theme-ui';

const About = () => {
  // Month starts from 0
  const birthday = new Date(1997, 1, 6);
  const ageDiff = new Date(Date.now() - birthday.getTime());
  const age = Math.abs(ageDiff.getUTCFullYear() - 1970);

  return (
    <div
      sx={{
        display: 'flex',
        flexDirection: 'column',
        maxWidth: ['container', 'container', 'container'],
        mt: [7, 7, 8],
        variant: 'text.content',
      }}
    >
      <h2>About me</h2>
      <p>
        I'm a {age} year old front-end developer who likes to work with{' '}
        <b>React</b> and <b>Nodejs</b>. I like building minimalist UIs and
        everything I have done can be found on{' '}
        <Link
          href="https://github.com/flashblaze"
          rel="noopener noreferrer"
          target="_blank"
          aria-label="GitHub"
        >
          GitHub
        </Link>
        . <br />I also like to develop some simple scripts using <b>Python</b>{' '}
        such as{' '}
        <Link
          href="https://github.com/flashblaze/yts-downloader"
          rel="noopener noreferrer"
          target="_blank"
          aria-label="yts-downloader link"
        >
          yts-downloader
        </Link>{' '}
        and{' '}
        <Link
          href="https://github.com/flashblaze/reddit-bots"
          rel="noopener noreferrer"
          target="_blank"
          aria-label="reddit-bots link"
        >
          reddit-bots
        </Link>
        . My latest full stack project{' '}
        <Link
          href="https://notesbin.xyz"
          rel="noopener noreferrer"
          target="_blank"
          aria-label="notesbin website link"
        >
          notesbin
        </Link>{' '}
        which is an open source note sharing app is live and source is available
        on{' '}
        <Link
          href="https://github.com/flashblaze/notesbin"
          rel="noopener noreferrer"
          target="_blank"
          aria-label="GitHub notesbin link"
        >
          GitHub
        </Link>
        .
      </p>
      <p>
        I also love working with Blender, Natron, After Effects, Photoshop and
        Gimp.
      </p>

      <div sx={{ mt: 5 }}>
        <h2>Contact me</h2>
        <p>
          Get in touch:{' '}
          <Link href="mailto:neerajlagwankar@gmail.com">
            <i>neerajlagwankar@gmail.com</i>
          </Link>
        </p>
        <p>Find me here:</p>
        <ul>
          <li>
            <Link
              href="https://github.com/flashblaze"
              rel="noopener noreferrer"
              target="_blank"
              aria-label="GitHub link"
            >
              GitHub
            </Link>
          </li>
          <li>
            <Link
              href="https://play.google.com/store/apps/developer?id=Neeraj+Lagwankar"
              rel="noopener noreferrer"
              target="_blank"
              aria-label="Play Store link"
            >
              Play Store
            </Link>
          </li>
          <li>
            <Link
              href="https://www.linkedin.com/in/neeraj-lagwankar/"
              rel="noopener noreferrer"
              target="_blank"
              aria-label="LinkedIn link"
            >
              LinkedIn
            </Link>
          </li>
          <li>
            <Link
              href="https://instagram.com/neeraj_artx"
              rel="noopener noreferrer"
              target="_blank"
              aria-label="Instagram link"
            >
              Instagram
            </Link>
          </li>
          <li>
            <Link
              href="https://twitter.com/neeraj_artx"
              rel="noopener noreferrer"
              target="_blank"
              aria-label="Twitter link"
            >
              Twitter
            </Link>
          </li>
          <li>
            <Link
              href="https://t.me/flashblaze"
              rel="noopener noreferrer"
              target="_blank"
              aria-label="Telegram link"
            >
              Telegram
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default About;
