/** @jsx jsx */
import { jsx, useColorMode } from 'theme-ui';
import { FiMoon, FiSun } from 'react-icons/fi';
import { IconContext } from 'react-icons';
import { Link } from 'gatsby';

const Header = () => {
  const [colorMode, setColorMode] = useColorMode();

  return (
    <header
      sx={{
        display: 'flex',
        flexDirection: 'row',
        width: '100%',
        mt: 5,
        p: 4,
        justifyContent: 'space-between',
        maxWidth: '960px',
      }}
    >
      <IconContext.Provider
        value={{ style: { strokeWidth: '1', height: '2em', width: '2em' } }}
      >
        {colorMode === 'default' ? (
          <FiMoon
            aria-label="Activate Dark Mode"
            title="Activate Dark Mode"
            sx={{
              fill: 'text',
              color: 'text',
              ':hover': { cursor: 'pointer', opacity: 1 },
              transition: 'opacity 0.3s ease',
              opacity: 0.7,
            }}
            onClick={() => {
              setColorMode(colorMode === 'default' ? 'dark' : 'default');
            }}
            role="button"
            tabIndex={0}
          />
        ) : (
          <FiSun
            role="button"
            tabIndex={0}
            aria-label="Activate Light Mode"
            title="Activate Light Mode"
            sx={{
              fill: 'text',
              color: 'text',
              ':hover': { cursor: 'pointer', opacity: 1 },
              transition: 'opacity 0.3s ease',
              opacity: 0.7,
            }}
            onClick={() => {
              setColorMode(colorMode === 'default' ? 'dark' : 'default');
            }}
          />
        )}
      </IconContext.Provider>
      <div sx={{ display: 'flex' }}>
        <Link to="/" sx={{ variant: 'text.heading', mr: 4 }}>
          <span>Home</span>
        </Link>
        <Link to="/posts" sx={{ variant: 'text.heading', mr: 4 }}>
          <span>Posts</span>
        </Link>
        <Link to="/about" sx={{ variant: 'text.heading' }}>
          <span>About</span>
        </Link>
      </div>
    </header>
  );
};

export default Header;
