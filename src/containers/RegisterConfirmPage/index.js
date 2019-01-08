import React from 'react';
import { Helmet } from 'react-helmet';

import PageHeading from '../../components/PageHeading/PageHeading';

export class RegisterConfirmPage extends React.Component {
  render() {
    return (
      <React.Fragment>
        <Helmet
          titleTemplate="Register Confirm Page"
          defaultTitle="Register Confirm Page"
        >
          <meta name="description" content="Register Confirm Page" />
        </Helmet>
        <PageHeading title="Register Confirm Page" />
      </React.Fragment>
    );
  }
}

export default RegisterConfirmPage;
