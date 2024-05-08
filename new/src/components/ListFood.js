import * as React from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import MenuItem from '@mui/material/MenuItem';

export default function ListFood() {
  const [open, setOpen] = React.useState(false);
  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <React.Fragment>
      <Button variant="outlined" onClick={handleClickOpen}>
        List Food
      </Button>
      <Dialog
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
        <DialogTitle>List New Food</DialogTitle>
        <DialogContent>
          
          {/* <TextField
            autoFocus
            required
            margin="dense"
            id="name"
            name="name"
            label="Name of Rider"
            type="name"
            fullWidth
            variant="outlined"
          /> */}
          <TextField
            autoFocus
            required
            margin="dense"
            id="description"
            name="description"
            label="Description"
            maxRows={5}
            size="medium"
            type="file"
            multiline
            fullWidth
            variant="outlined"
          />
          <TextField
            autoFocus
            required
            margin="dense"
            id="expiry"
            name="expiry"
            helperText="Expiry Date"
            type="Date"
            fullWidth
            variant="outlined"
          />
          <TextField
            autoFocus
            required
            margin="dense"
            id="contact"
            name="contact"
            type="number"
            defaultValue="20"
            helperText="Serving Size"
            fullWidth
            variant="outlined"
          />
  
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
          <Button type="submit" >Add</Button>
          {/* style={{ color: 'white', backgroundColor: 'green' }} */}
        </DialogActions>
      </Dialog>
    </React.Fragment>
  );
}