import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Typography from '@material-ui/core/Typography';
import { red } from '@material-ui/core/colors';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import "./Card.css"
import { useHistory } from "react-router-dom"


const useStyles = makeStyles((theme) => ({
  root: {
    //minWidth: 200,
  },
  media: {
    height: 0,
    paddingTop: '56.25%', // 16:9
  },
  expand: {
    transform: 'rotate(0deg)',
    marginLeft: 'auto',
    transition: theme.transitions.create('transform', {
      duration: theme.transitions.duration.shortest,
    }),
  },
  expandOpen: {
    transform: 'rotate(180deg)',
  },
  avatar: {
    backgroundColor: red[500],
  },
}));



export default function BlogCard(props) {

  let history = useHistory()
  const classes = useStyles();
  const [expanded, setExpanded] = React.useState(false);
  const img = `/uploads/${props.image}`

  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleDelete = () => {
    fetch(`http://localhost:5000/blogs/${props.id}`, {
      method: 'DELETE'
    }).then(() => {
      window.location.reload()
    })
  }

  return (
    <Card className={classes.root} className="blogCard">
      <CardHeader
        title={props.title}
        style={{ height: "120px" }}
      />
      <CardMedia
        className={classes.media}
        image={img}
        title="Paella dish"
        className="blogPhoto"
      />
      <CardContent>
        <Typography variant="body2" color="textSecondary" component="p">
          {props.content.length > 100 ? props.content.substring(0, 150) + '...' : props.content}
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <div className="button" className="round-button secondry  secondar-color" style={{ fontSize: "1em" }} onClick={() => { history.push(`${props.id}`) }}>Read more</div>
        <div className="button" className="round-button secondry  secondar-color" style={{ fontSize: "1em" }} onClick={handleClickOpen}>Delete</div>
        <Dialog
          open={open}
          onClose={handleClose}
          aria-labelledby="alert-dialog-title"
          aria-describedby="alert-dialog-description"
        >
          <DialogTitle id="alert-dialog-title">{"Are you sur you want to delete this blog ?"}</DialogTitle>
          <DialogContent>
          </DialogContent>
          <DialogActions>
            <Button onClick={
              handleClose} onClick={handleDelete} color="primary">
              Yes
          </Button>
            <Button onClick={handleClose} color="primary" autoFocus>
              No
          </Button>
          </DialogActions>
        </Dialog>
      </CardActions>
    </Card>
  );
}