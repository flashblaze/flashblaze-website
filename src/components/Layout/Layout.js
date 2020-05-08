import React from 'react';

import Header from '../Header';
import layoutStyles from './styles.module.scss';

const Layout = (props) => {
  return (
    <div className={layoutStyles.layout}>
      <Header />
      {props.children}
    </div>
  );
};

export default Layout;
