import React from 'react';
import Typography from '@material-ui/core/Typography';

const PageHeading = ({ title, subtitle }) => (
  <div className="page-heading">
    <Typography variant="display2" color="inherit">
      { title }
    </Typography>
    { subtitle ? (
      <Typography variant="subheading" color="inherit">
        { subtitle }
      </Typography>
    ) : null }
  </div>
);

export default PageHeading;
