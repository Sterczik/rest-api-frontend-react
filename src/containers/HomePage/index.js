import React from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet';

import PageHeading from '../../components/PageHeading/PageHeading';

export class HomePage extends React.Component {
  render() {
    return (
      <div>
        <Helmet
          titleTemplate="REST Starter"
          defaultTitle="REST Starter"
        >
          <meta name="description" content="REST Starter" />
        </Helmet>

        <div className="hero">
          <div className="hero__container">
            <div className="hero__text">
              <PageHeading
                title="React SPA Starter"
                subtitle="A boilerplate for building React apps with REST backends"
              />
              <Link to="/login" className="hero__link">Login</Link>
              <Link to="/register" className="hero__link">Register</Link>
              <a className="hero__link" rel="noopener noreferrer" target="_blank" href="https://github.com/Sterczik/pern-rest-starter-client">View on GitHub</a>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default HomePage;
