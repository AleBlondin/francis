// @flow
import * as React from 'react';
import { Link } from 'react-router-dom';
import { FormattedMessage } from 'react-intl';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

import StyledIntro from './Home.style';

const Home = () => (
  <React.Fragment>
    <StyledIntro>
      <Typography variant="subtitle1" gutterBottom>
        <FormattedMessage id="home.get-started" defaultMessage="To get started, edit" />
        <code className="intro-code">src/App.js</code>
        <FormattedMessage id="home.save-to-reload" />
      </Typography>
      <Typography variant="body1">
        <FormattedMessage id="home.create-route" />
      </Typography>
      <Typography variant="body1">
        <FormattedMessage id="home.generate-component" />
        <code className="intro-code">yarn generate</code>
      </Typography>
      <Typography variant="body1">
        <FormattedMessage id="home.generate-module" />
      </Typography>
      <Typography variant="body1">
        <FormattedMessage id="home.readme" />
      </Typography>
      <Link to="/avatar" href="/avatar">
        <Button variant="contained" color="primary">
          <FormattedMessage id="home.use-a-link" />
        </Button>
      </Link>
    </StyledIntro>
  </React.Fragment>
);

export default Home;
