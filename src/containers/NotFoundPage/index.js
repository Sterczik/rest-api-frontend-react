import React from 'react';
import { Link } from 'react-router-dom';

import PageHeading from '../../components/PageHeading/PageHeading';

export const NotFoundPage = () => (
  <React.Fragment>
    <PageHeading title="404" />
    <Link to="/">Go home</Link>
  </React.Fragment>
);

export default NotFoundPage;
