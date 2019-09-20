import React, { useContext } from 'react';

import { SelectedBizContext } from './contexts/SelectedBizContext';

import withStyles from '@material-ui/core/styles/withStyles';

import IconButton from '@material-ui/core/IconButton';
import SearchIcon from '@material-ui/icons/Search';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Hidden from '@material-ui/core/Hidden';
import Link from '@material-ui/core/Link';
import Button from '@material-ui/core/Button';
import Divider from '@material-ui/core/Divider';
import Container from '@material-ui/core/Container';

function BizItem(props) {
  const { selectedBiz } = useContext(SelectedBizContext);
  const { classes } = props;

  return (
    // <div>
    //   <h1>{selectedBiz.name}</h1>
    //   <h3>categories</h3>
    //   <h3>Address</h3>
    //   <h3>distance</h3>
    //   <h3>MAP GOES HERE</h3>
    //   <h3>phone number</h3>
    //   <img src={selectedBiz.image_url} alt={selectedBiz.name} />
    //   <h3>Hours of Operation</h3>
    //   <h3>Price</h3>
    //   <h3>Rating</h3>
    //   <h3>Reviews</h3>
    //   <h3>transaction</h3>
    //   <h3>View Page on Yelp</h3>
    // </div>
    <>
      <Paper className={classes.mainFeaturedPost}>
        <img
          // style={{ display: 'none' }}
          src={selectedBiz.image_url}
          alt={selectedBiz.name}
        />
        <div className={classes.overlay} />
        <Typography variant="h5" color="inherit" paragraph>
          Image from yelp goes here
        </Typography>
      </Paper>
      <Grid item xs={12} md={4}>
        <Paper elevation={0} className={classes.sidebarAboutBox}>
          <Typography variant="h6" gutterBottom>
            About
          </Typography>
          <Typography>
            Etiam porta sem malesuada magna mollis euismod. Cras mattis
            consectetur purus sit amet fermentum. Aenean lacinia bibendum nulla
            sed consectetur.
          </Typography>
        </Paper>
        <Typography
          variant="h6"
          gutterBottom
          className={classes.sidebarSection}
        >
          Archives
        </Typography>
        Side bar goes here
        <Typography
          variant="h6"
          gutterBottom
          className={classes.sidebarSection}
        >
          Social
        </Typography>
        More sidebar stuff goes here - supposed to be aligned right
      </Grid>
    </>
  );
}

const styles = theme => ({
  mainFeaturedPost: {
    position: 'relative',
    backgroundColor: theme.palette.grey[800],
    height: '200px',
    color: theme.palette.common.white,
    marginBottom: theme.spacing(4),
    // backgroundImage: 'url(`${selectedBiz.image_url}`)',
    backgroundSize: 'cover',
    backgroundRepeat: 'repeat',
    backgroundPosition: 'center'
  },
  overlay: {
    position: 'absolute',
    top: 0,
    bottom: 0,
    right: 0,
    left: 0,
    backgroundColor: 'rgba(0,0,0,.3)'
  },
  mainFeaturedPostContent: {
    position: 'relative',
    padding: theme.spacing(3),
    [theme.breakpoints.up('md')]: {
      padding: theme.spacing(6),
      paddingRight: 0
    }
  },
  mainGrid: {
    marginTop: theme.spacing(3)
  },
  card: {
    display: 'flex'
  },
  cardDetails: {
    flex: 1
  },
  cardMedia: {
    width: 160
  },
  markdown: {
    ...theme.typography.body2,
    padding: theme.spacing(3, 0)
  },
  sidebarAboutBox: {
    padding: theme.spacing(2),
    backgroundColor: theme.palette.grey[200]
  },
  sidebarSection: {
    marginTop: theme.spacing(3)
  },
  footer: {
    backgroundColor: theme.palette.background.paper,
    marginTop: theme.spacing(8),
    padding: theme.spacing(6, 0)
  }
});

export default withStyles(styles)(BizItem);
