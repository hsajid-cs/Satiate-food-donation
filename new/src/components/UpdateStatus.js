import * as React from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import MenuItem from '@mui/material/MenuItem';
import { jwtDecode } from 'jwt-decode';

const statusOptions = [
  { value: 'in_progress', label: 'Picked' },
  { value: 'delivered', label: 'Delivered' },
];

export default function UpdateStatus() {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const status = formData.get('status');
    console.log(status);
    const key =localStorage.getItem('token');
      const riderId = jwtDecode(key).userId;
      console.log(riderId);
      console.log(riderId, status);
    try {
      
      
      const response = await fetch(`http://localhost:3002/fatima/riders/rider/update-last-delivered-donation-status/${riderId}/${status}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
          // Add your authentication token if needed
          'Authorization': `Bearer ${key}`,
        },
      });
      if (!response.ok) {
        throw new Error('Failed to update status');
      }
      handleClose();
    } catch (err) {
      console.error('Error updating status:', err);
    } 
    // const formData = new FormData(event.currentTarget);
    // const status = formData.get('status');
    handleClose();
  };

  return (
    <>
    <Button onClick={handleClickOpen} style={{color:'white'}}>
        Update Status
      </Button>
    <Dialog
      open={open}
      onClose={handleClose}
      PaperProps={{
        component: 'form',
        onSubmit: handleSubmit,
      }}
    >
      <DialogTitle>Update Status</DialogTitle>
      <DialogContent>
        <TextField
          autoFocus
          required
          select
          margin="dense"
          id="status"
          name="status"
          label="Change Status"
          defaultValue=""
          fullWidth
          variant="outlined"
        >
          {statusOptions.map((option) => (
            <MenuItem key={option.value} value={option.value}>
              {option.label}
            </MenuItem>
          ))}
        </TextField>
      </DialogContent>
      <DialogActions>
        <Button onClick={handleClose}>Cancel</Button>
        <Button type="submit">Update</Button>
      </DialogActions>
    </Dialog>
    </>
  );
}