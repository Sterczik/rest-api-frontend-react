import React from 'react';
import { Helmet } from 'react-helmet';

import PageHeading from '../../components/PageHeading/PageHeading';

export class CheckEmail extends React.Component {
  render() {
    return (
      <div>
        <Helmet
          titleTemplate="Check Email Page"
          defaultTitle="Check Email Page"
        >
          <meta name="description" content="Check Email Page" />
        </Helmet>
        <PageHeading title="Check Email Page" />
      </div>
    );
  }
}

export default CheckEmail;
