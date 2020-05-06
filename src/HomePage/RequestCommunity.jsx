
import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import MuiDialogTitle from '@material-ui/core/DialogTitle';
import MuiDialogContent from '@material-ui/core/DialogContent';
import MuiDialogActions from '@material-ui/core/DialogActions';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';
import Typography from '@material-ui/core/Typography';
import DialogContentText from '@material-ui/core/DialogContentText';
import TextField from '@material-ui/core/TextField';
import AddIcon from '@material-ui/icons/Add';
import Fire from '../FireDbConfig/Fire';



const styles = (theme) => ({
  root: {
    margin: 0,
    padding: theme.spacing(2),
  },
  closeButton: {
    position: 'absolute',
    right: theme.spacing(1),
    top: theme.spacing(1),
    color: theme.palette.grey[500],
  },
});

const DialogTitle = withStyles(styles)((props) => {
  const { children, classes, onClose, ...other } = props;
  return (
    <MuiDialogTitle disableTypography className={classes.root} {...other}>
      <Typography variant="h6">{children}</Typography>
      {onClose ? (
        <IconButton aria-label="close" className={classes.closeButton} onClick={onClose}>
          <CloseIcon />
        </IconButton>
      ) : null}
    </MuiDialogTitle>
  );
});

const DialogContent = withStyles((theme) => ({
  root: {
    padding: theme.spacing(2),
  },
}))(MuiDialogContent);

const DialogActions = withStyles((theme) => ({
  root: {
    margin: 0,
    padding: theme.spacing(1),
  },
}))(MuiDialogActions);

export default function CustomizedDialogs() {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const closeDialog = () => {
    setOpen(false);
  };
  const handleClose = () => {
    var database = Fire.database();

    var uid = Fire.auth().currentUser.uid;
    const name = document.getElementById("name").value;
    const reason = document.getElementById("reason").value;
    const email = document.getElementById("email").value;
    const community = document.getElementById("communityName").value;
    var ref = database.ref('communitiesRequests');


    // ref.push(data);

    var postData = {
        email: email,
        name: name,
        reason: reason,
        communityName: community
      }

      ref.push(postData)
      setOpen(false);

  };

  return (
    <div>
      <Button variant="outlined" color="primary" onClick={handleClickOpen}>
        Community
        <AddIcon color="#3f51b5"/>
      </Button>
      <Dialog onClose={closeDialog} aria-labelledby="customized-dialog-title" open={open}>
        <DialogTitle id="customized-dialog-title" onClose={closeDialog}>
          Community Request
        </DialogTitle>
        <DialogContent dividers>
          <TextField
            autoFocus
            margin="dense"
            id="name"
            label="Who are you?"
            type="email"
            fullWidth
          />
           <TextField
            autoFocus
            margin="dense"
            id="communityName"
            label="Community Name"
            type="email"
            fullWidth
          />
           <TextField
            autoFocus
            margin="dense"
            id="reason"
            label="Describe the Community"
            type="reason"
            fullWidth
          />
          <TextField
            autoFocus
            margin="dense"
            id="email"
            label="Email address"
            type="email"
            fullWidth
          />
        </DialogContent>
        <DialogActions>
          <Button autoFocus onClick={handleClose} color="primary">
            Submit
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
