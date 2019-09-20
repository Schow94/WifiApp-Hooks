import React, { useContext } from 'react';
import { Link } from 'react-router-dom';

import withStyles from '@material-ui/core/styles/withStyles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import CardMedia from '@material-ui/core/CardMedia';
import CardActionArea from '@material-ui/core/CardActionArea';
import Fab from '@material-ui/core/Fab';

import { SelectedBizContext } from './contexts/SelectedBizContext';

function BizItem(props) {
  const { classes, business, i } = props;

  const { changeBiz } = useContext(SelectedBizContext);

  return (
    <Card className={classes.card} onClick={() => changeBiz(business)}>
      <CardContent>
        <div className={classes.titleContainer}>
          <Fab className={classes.icon} size="small">{`${i + 1}`}</Fab>

          <Link to={`/${business.name}`} className={classes.title}>
            <Typography color="textSecondary" gutterBottom>
              {business.name}
            </Typography>
          </Link>
        </div>

        <Typography variant="body2" component="p">
          {`${(business.distance / 1609.344).toFixed(2)} miles away`}
        </Typography>
        <br />
        <Typography variant="body2" component="p">
          {`${business.location.display_address[0]} ${
            business.location.display_address[1]
          }`}
        </Typography>
      </CardContent>
      <CardActionArea>
        <CardMedia
          component="img"
          alt={`${business.name} Image`}
          height="140"
          image={business.image_url}
          title={business.name}
        />
      </CardActionArea>
      <CardActions>
        <Button size="small">More Details</Button>
      </CardActions>
    </Card>
  );
}

const styles = theme => ({
  titleContainer: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: '1em'
  },
  card: {
    minWidth: 275,
    maxWidth: 345,
    marginBottom: '1em'
  },
  bullet: {
    display: 'inline-block',
    margin: '0 2px',
    transform: 'scale(0.8)'
  },
  title: {
    fontSize: '1.5em',
    fontWeight: 400,
    color: 'black',
    marginTop: '0.4em',
    textDecoration: 'none'
  },
  pos: {
    marginBottom: 12
  },
  icon: {
    backgroundColor: 'red',
    fontSize: '1.2em',
    marginRight: '1em',
    boxShadow: 'none',
    fontWeight: 400
  }
});

export default withStyles(styles)(BizItem);
