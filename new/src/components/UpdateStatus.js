import * as React from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import { MenuItem } from '@mui/material';

const status = [
    { value: 'Picked', label: 'Picked' },
    { value: 'Delivered', label: 'Delivered' },

];
export default function UpdateStatus({ open, handleClose }) {

  // const handleClickOpen = () => {
  //   setOpen(true);
  // };

  // const handleClose = () => {
  //   setOpen(false);
  // };

  return (
    <React.Fragment>      <Dialog
        open={open}
        onClose={handleClose}
        PaperProps={{
          component: 'form',
          onSubmit: (event) => {
            event.preventDefault();
            const formData = new FormData(event.currentTarget);
            const formJson = Object.fromEntries(formData.entries());
            const email = formJson.email;
            handleClose();
          },
        }}
      >
        <DialogTitle>status</DialogTitle>
        <DialogContent>
          <TextField
            autoFocus
            required
            select
            margin="dense"
            id="contact"
            name="contact"
            type="number"
            defaultValue={"Change Status"}
            helperText="Serving Size (Min. 20)"
            fullWidth
            variant="outlined">{status.map((option) => (
                <MenuItem key={option.value} value={option.value}>
                  {option.label}
                </MenuItem>
              ))}</TextField>
            
  
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
          <Button type="submit" >Add</Button>
        </DialogActions>
      </Dialog>
    </React.Fragment>
  );
}