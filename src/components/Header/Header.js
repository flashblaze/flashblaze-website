import React from 'react';
import { Link } from 'gatsby';

import headerStyles from './styles.module.scss';

const Header = () => {
  return (
    <div className={headerStyles.header}>
      <Link to="/" className={headerStyles.navElements}>
        <p>Home</p>
      </Link>
    </div>
  );
};

export default Header;
