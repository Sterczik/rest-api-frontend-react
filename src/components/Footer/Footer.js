import React from 'react';
import { Link } from 'react-router-dom';
import { List, ListItem } from '@material-ui/core';

export const Footer = () => (
  <footer className="footer">
    <div className="container footer__container">
      <div>
        <List className="footer__list">
          <ListItem className="footer__item">
            <Link to="/todos" className="footer__link">Todos</Link>
          </ListItem>
          <ListItem className="footer__item">
            <Link to="/my-account" className="footer__link">Account</Link>
          </ListItem>
          <ListItem className="footer__item">
            <a
              href="https://github.com/Sterczik/pern-rest-starter-client"
              className="footer__link"
              rel="noopener noreferrer"
              target="_blank"
            >
              GitHub
            </a>
          </ListItem>
        </List>
      </div>
      <div>2018</div>
    </div>
  </footer>
);

export default Footer;
