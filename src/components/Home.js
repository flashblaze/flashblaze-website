/**@jsx jsx */
import { jsx, useColorMode } from 'theme-ui';
import { useEffect, useState } from 'react';

import Model from './Model/Model';
import PostCard from './PostCard';

const Home = () => {
  const [meshColor, setMeshColor] = useState('#333333');

  const [colorMode] = useColorMode();
  useEffect(() => {
    if (colorMode === 'default') {
      setMeshColor('#333333');
    } else {
      setMeshColor('#ffffff');
    }
  }, [colorMode, meshColor]);

  return (
    <div>
      <div
        sx={{
          display: 'flex',
          flexDirection: 'row',
          maxWidth: '720px',
          p: '3',
          mt: 8,
        }}
        css={`
          @media (max-width: 360px) {
            flex-direction: column;
            width: 320px;
          }

          @media (max-width: 720px) {
            flex-direction: column;
            width: 340px;
          }
        `}
      >
        <div
          sx={{
            display: 'flex',
            flexDirection: 'column',
            maxWidth: '470px',
            p: '3',
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
        <div>
          <Model meshColor={meshColor} />
        </div>
      </div>
      <div sx={{ p: 5 }}>
        <h3 sx={{ p: 1 }}>Latest Post</h3>
        <PostCard />
      </div>
    </div>
  );
};

export default Home;
