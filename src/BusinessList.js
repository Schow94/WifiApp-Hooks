import React, { useEffect, useContext } from 'react';
import axios from 'axios';

import withStyles from '@material-ui/core/styles/withStyles';
import Typography from '@material-ui/core/Typography';

import BizItem from './BizItem';
//Eventually the List will render a BizItem to cleanup code

import { BizListContext } from './contexts/BizListContext';
import { LocationContext } from './contexts/LocationContext';

const YELP_API_KEY = process.env.REACT_APP_YELP_API_KEY;

const url = `https://cors-anywhere.herokuapp.com/https://api.yelp.com/v3/businesses/search`;

//should I turn this into a custom hook?
// Converting to a context hook could allow me to use it in more places
//if I ever need to, but not sure if I need that now
function BusinessList(props) {
  const { classes } = props;

  const { biz, getBiz } = useContext(BizListContext);
  const { position } = useContext(LocationContext);

  const renderList = () => {
    return biz.map((business, i) => {
      return <BizItem key={i} business={business} i={i} />;
    });
  };
  return (
    <div>
      <Typography variant="h5" className={classes.allResults}>
        All Results
      </Typography>
      <ul>{renderList()}</ul>
    </div>
  );
}

const styles = theme => ({
  allResults: {
    marginTop: '1em',
    marginLeft: '1em'
  }
});

export default withStyles(styles)(BusinessList);
