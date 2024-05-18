import * as React from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import MenuItem from '@mui/material/MenuItem';

const statusOptions = [
  { value: 'Picked', label: 'Picked' },
  { value: 'Delivered', label: 'Delivered' },
];

export default function UpdateStatus({ open, handleClose, onStatusChange }) {
  const handleSubmit = (event) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const status = formData.get('status');
    onStatusChange(status);
    handleClose();
  };

  return (
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
  );
}
