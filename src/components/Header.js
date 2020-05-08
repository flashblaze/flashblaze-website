/** @jsx jsx */
import { jsx } from 'theme-ui';
import { FiMoon } from 'react-icons/fi';
import { IconContext } from 'react-icons';
import { Link } from 'gatsby';

const Header = () => {
  return (
    <header
      sx={{
        display: 'flex',
        flexDirection: 'row',
        width: '100%',
        mt: 5,
        p: 4,
        justifyContent: 'space-between',
        maxWidth: '720px',
      }}
    >
      <IconContext.Provider
        value={{ style: { strokeWidth: '1', height: '2em', width: '2em' } }}
      >
        <FiMoon />
      </IconContext.Provider>
      <div sx={{ display: 'flex', flexDirection: 'row' }}>
        <Link to="/" sx={{ color: 'text', mr: 4 }}>
          <p>Home</p>
        </Link>
        <Link to="/posts" sx={{ color: 'text', mr: 4 }}>
          <p>Posts</p>
        </Link>
        <Link to="/about" sx={{ color: 'text', mr: 4 }}>
          <p>About</p>
        </Link>
      </div>
    </header>
  );
};

export default Header;
