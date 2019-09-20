import React from 'react';
import withStyles from '@material-ui/core/styles/withStyles';
import CircularProgress from '@material-ui/core/CircularProgress';
import { LinearProgress } from '@material-ui/core';

function CircularIndeterminate(props) {
  const { classes } = props;

  return (
    <div className={classes.parent}>
      <CircularProgress size={200} className={classes.progress} />
    </div>
  );
}

const styles = theme => ({
  parent: {
    position: 'absolute',
    left: '30%',
    top: '30%'
  },
  progress: {
    marginLeft: theme.spacing(2)
  }
});

export default withStyles(styles)(CircularIndeterminate);
