/**@jsx jsx */
import { jsx, useColorMode } from 'theme-ui';
import { useEffect, useState } from 'react';
import Loadable from '@loadable/component';

// import SVGAnimation from './SVGAnimation';
import PostCard from './PostCard';

const LoadableComponent = Loadable(() => import('./SVGAnimation'));

const Home = () => {
  const [strokeColor, setStrokeColor] = useState('#333333');

  const [colorMode] = useColorMode();
  useEffect(() => {
    if (colorMode === 'default') {
      setStrokeColor('#333333');
    } else {
      setStrokeColor('#ffffff');
    }
  }, [colorMode, strokeColor]);

  return (
    <div>
      <div
        sx={{
          display: 'flex',
          p: [3, 3, 3],
          mt: [8, 8, 8],
          flexDirection: ['column', 'column', 'row'],
          maxWidth: ['container', 'container', 'container'],
        }}
      >
        <div
          sx={{
            display: 'flex',
            flexDirection: 'column',
            maxWidth: '470px',
            p: 3,
          }}
        >
          <h1>Neeraj Lagwankar</h1>
          <p>
            <b>React</b> and <b>Nodejs</b> developer.
          </p>
          <p>
            I'm a passionate graphics designer and animator with an interest in
            3D.
          </p>
        </div>
        <LoadableComponent strokeColor={strokeColor} />
      </div>
      <div
        sx={{
          p: 5,
          maxWidth: ['470px', '470px', '470px'],
        }}
      >
        <h3 sx={{ p: 1 }}>Latest Post</h3>
        <PostCard />
      </div>
    </div>
  );
};

export default Home;
