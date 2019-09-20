import React, { useEffect, useContext } from 'react';

import BusinessList from './BusinessList';
import { LocationContext } from './contexts/LocationContext';
import MapContainer from './MapContainer';
import Loader from './Loader';

import withStyles from '@material-ui/core/styles/withStyles';
import { BizListContext } from './contexts/BizListContext';

import axios from 'axios';
const YELP_API_KEY = process.env.REACT_APP_YELP_API_KEY;

const url = `https://cors-anywhere.herokuapp.com/https://api.yelp.com/v3/businesses/search`;

function WifiApp(props) {
  const { classes } = props;
  // Call custom hook to get coordinates & destructure off lat/long
  // from coordinates

  const { position, getPosition } = useContext(LocationContext);
  const { biz, getBiz } = useContext(BizListContext);

  const getBizList = async () => {
    let res = await axios.get(url, {
      headers: {
        Authorization: `Bearer ${YELP_API_KEY}`
      },
      params: {
        latitude: position.lat,
        longitude: position.long,
        term: 'free wifi'
        // sort_by: 'distance'
      }
    });

    let businesses = res.data.businesses;
    console.log(businesses);
    return businesses.map(x => {
      return getBiz(biz => [...biz, x]);
    });
  };

  useEffect(() => {
    getPosition();
    console.log(position);
  }, []);

  useEffect(() => {
    getBizList();
  }, [position]);

  return (
    <div className={classes.body}>
      {!biz[0] ? (
        <Loader />
      ) : (
        <>
          <BusinessList />
          <MapContainer lat={position.lat} long={position.long} />
        </>
      )}
    </div>
  );
}

const styles = theme => ({
  body: {
    fontFamily: 'Roboto',
    display: 'flex',
    flexDirection: 'row',
    width: '100%'
  },
  allResults: {
    marginTop: '1em',
    marginLeft: '1em'
  }
});

export default withStyles(styles)(WifiApp);
