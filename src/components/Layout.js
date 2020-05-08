/**@jsx jsx */
import { jsx } from 'theme-ui';

import Header from './Header';
import Footer from './Footer';

const Container = (props) => (
  <div {...props} sx={{ maxWidth: 'container', mx: 'auto', px: 4 }} />
);

const Layout = (props) => {
  return (
    <div
      sx={{
        display: 'flex',
        margin: '0 auto',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        minHeight: '100vh',
      }}
    >
      <Header />
      <main sx={{ width: '100%', flex: '1 1 auto' }}>
        <Container>{props.children}</Container>
      </main>
      <Footer />
    </div>
  );
};

export default Layout;
