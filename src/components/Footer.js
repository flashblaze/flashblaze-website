/**@jsx jsx */
import { jsx } from 'theme-ui';
import {
  AiFillGithub,
  AiFillInstagram,
  AiFillTwitterCircle,
  AiFillYoutube,
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
    <a
      href="https://github.com/FlashBlaze"
      rel="noopener noreferrer"
      target="_blank"
    >
      <AiFillGithub
        sx={{ color: 'text', strokeWidth: '1', height: '2em', width: '2em' }}
        aria-label="GitHub"
      />
    </a>
    <a
      href="https://instagram.com/neeraj_artx"
      rel="noopener noreferrer"
      target="_blank"
      aria-label="Instagram"
    >
      <AiFillInstagram
        sx={{ color: 'text', strokeWidth: '1', height: '2em', width: '2em' }}
        aria-label="Instagram"
      />
    </a>
    <a
      href="https://www.youtube.com/channel/UCQKfDFA1cCAB1Oq5B6Vr7ew"
      rel="noopener noreferrer"
      target="_blank"
      aria-label="YouTube"
    >
      <AiFillYoutube
        sx={{ color: 'text', strokeWidth: '1', height: '2em', width: '2em' }}
        aria-label="YouTube"
      />
    </a>
    <a
      href="https://twitter.com/neeraj_artx"
      rel="noopener noreferrer"
      target="_blank"
      aria-label="Twitter"
    >
      <AiFillTwitterCircle
        sx={{ color: 'text', strokeWidth: '1', height: '2em', width: '2em' }}
        aria-label="Twitter"
      />
    </a>
    <a
      href="https://www.linkedin.com/in/neeraj-lagwankar/"
      rel="noopener noreferrer"
      target="_blank"
      aria-label="LinkedIn"
    >
      <AiFillLinkedin
        sx={{ color: 'text', strokeWidth: '1', height: '2em', width: '2em' }}
        aria-label="LinkedIn"
      />
    </a>
  </footer>
);

export default Footer;
