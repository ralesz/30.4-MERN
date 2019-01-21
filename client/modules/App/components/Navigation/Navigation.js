import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router';
import { FormattedMessage } from 'react-intl';

// Import Style
import styles from './Navigation.css';

export const Navigation = (props, context) => {
  return <div>
        <ul className={styles['nav-list']}>
            <li className={styles['nav-title']}>
                <Link className={styles['nav-link']} to={"/home"} >
                  <FormattedMessage id="HOME" />
                </Link>
            </li>
            <li className={styles['nav-title']}>
                <Link className={styles['nav-link']} to={"/about"} >
                  <FormattedMessage id="ABOUT US" />
                </Link>
            </li>
            <li className={styles['nav-title']}>
                <Link className={styles['nav-link']} to={"/"} >
                  <FormattedMessage id="POSTS LIST" />
                </Link>
            </li>
        </ul>
    </div>
};

Navigation.propTypes = {

};

export default Navigation;