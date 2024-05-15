import * as React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogTitle from '@mui/material/DialogTitle';
import { useNavigate } from 'react-router-dom';
import Image from "./images/modal.jpeg";

export default function MobileSignUp({ open, handleClose }) {
  const navigate = useNavigate();
  // const [open, setOpen] = React.useState(false);

  // const handleClickOpen = () => {
  //   setOpen(true);
  // };

  const handleDonor = () => {
    handleClose();
    navigate('/signup-donor');
  };

  const handleOrg = () => {
    handleClose();
    navigate('/signup-organization');
  };



  return (
    <React.Fragment>
      <Dialog
        open={open}
        onClose={handleClose}
      >
        <DialogTitle>Register</DialogTitle>
        <img src={Image} alt="Registration Image"/>
        <DialogActions style={{alignContent:'center'}}>
        <Button onClick={handleDonor}>Donor</Button>
        <Button onClick={handleOrg}>Organization</Button>
          <Button onClick={handleClose}>Cancel</Button>
        </DialogActions>
      </Dialog>
    </React.Fragment>
  );
}