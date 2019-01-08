import React from 'react';
import { Helmet } from 'react-helmet';

import PageHeading from '../../components/PageHeading/PageHeading';

export class RegisterFailurePage extends React.Component {
  render() {
    return (
      <React.Fragment>
        <Helmet
          titleTemplate="Register Failure Page"
          defaultTitle="Register Failure Page"
        >
          <meta name="description" content="Register Failure Page" />
        </Helmet>
        <PageHeading title="Register Failure Page" />
      </React.Fragment>
    );
  }
}

export default RegisterFailurePage;
