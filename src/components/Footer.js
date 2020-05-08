/**@jsx jsx */
import { jsx } from 'theme-ui';
import { IconContext } from 'react-icons';
import {
  AiFillGithub,
  AiOutlineInstagram,
  AiFillTwitterCircle,
  AiFillLinkedin,
} from 'react-icons/ai';

const Footer = () => (
  <footer
    sx={{
      display: 'flex',
      flexDirection: 'row',
      width: '100%',
      mb: 4,
      p: 5,
      justifyContent: 'space-around',
      alignItems: 'center',
      maxWidth: '500px',
    }}
  >
    <IconContext.Provider
      value={{
        style: {
          strokeWidth: '1',
          height: '2em',
          width: '2em',
          color: '#333333',
        },
      }}
    >
      <a
        href="https://github.com/FlashBlaze"
        rel="noopener noreferrer"
        target="_blank"
        aria-label="GitHub"
      >
        <AiFillGithub />
      </a>
      <a
        href="https://instagram.com/neeraj_artx"
        rel="noopener noreferrer"
        target="_blank"
        aria-label="Instagram"
      >
        <AiOutlineInstagram />
      </a>
      <a
        href="https://twitter.com/neeraj_artx"
        rel="noopener noreferrer"
        target="_blank"
        aria-label="Twitter"
      >
        <AiFillTwitterCircle />
      </a>
      <a
        href="https://www.linkedin.com/in/neeraj-lagwankar/"
        rel="noopener noreferrer"
        target="_blank"
        aria-label="LinkedIn"
      >
        <AiFillLinkedin />
      </a>
    </IconContext.Provider>
  </footer>
);

export default Footer;
