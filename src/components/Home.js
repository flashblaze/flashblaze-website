/**@jsx jsx */
import { jsx } from 'theme-ui';

import SVGAnimation from './SVGAnimation';
import PostCard from './PostCard';

const Home = () => {
  return (
    <div>
      <div
        sx={{
          display: 'flex',
          mt: [8, 8, 8],
          flexDirection: ['column', 'column', 'row'],
          maxWidth: ['container', 'container', 'container'],
          justifyContent: ['', '', 'space-between'],
          alignItems: ['center', 'center', 'center'],
          variant: 'text.content',
        }}
      >
        <div
          sx={{
            display: 'flex',
            flexDirection: 'column',
            maxWidth: '470px',
          }}
        >
          <h1>Neeraj Lagwankar</h1>
          <p>
            <b>React</b> and <b>Nodejs</b> developer with an interest in 2D/3D
            animation and design.
          </p>
        </div>
        <SVGAnimation />
      </div>
      <div
        sx={{
          mt: [5, 5, 0],
          maxWidth: ['470px', '470px', '470px'],
        }}
      >
        <h3 sx={{ p: 1, variant: 'text.content' }}>Latest Post</h3>
        <PostCard />
      </div>
    </div>
  );
};

export default Home;
