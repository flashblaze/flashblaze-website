/**@jsx jsx */
import { jsx } from 'theme-ui';

import Model from './Model/Model';

const Home = () => {
  return (
    <div
      sx={{
        display: 'flex',
        flexDirection: 'row',
        maxWidth: '720px',
        p: '3',
        mt: 8,
      }}
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
        <Model />
      </div>
    </div>
  );
};

export default Home;
