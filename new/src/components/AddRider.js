import * as React from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import MenuItem from '@mui/material/MenuItem';
// import { colors } from '@mui/material';

const startWork = [
  { value: '9', label: '9' },
  { value: '10', label: '10' },
  { value: '11', label: '11' },
  { value: '12', label: '12' },
  { value: '13', label: '13' },
  { value: '14', label: '14' },
  { value: '15', label: '15' },
  { value: '16', label: '16' },
  { value: '17', label: '17' },
];

// Initialize endWork with the same values as startWork
export default function AddRider() {
  const [open, setOpen] = React.useState(false);
  const [selectedStart, setSelectedStart] = React.useState('9');
  const [endWork, setEndWork] = React.useState([...startWork]);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  const handleStartChange = (event) => {
    setSelectedStart(event.target.value);
    updateEndWork(event.target.value);
  };

  const updateEndWork = (selectedStart) => {
    const startHour = parseInt(selectedStart);
    // Filter out end hours that are within range and at least 4 hours from selected start hour
    const filteredEndWork = startWork.filter(
      (option) => parseInt(option.value) >= startHour + 4 && parseInt(option.value) <= 20
    );
    setEndWork(filteredEndWork);
  };

  return (
    <React.Fragment>
      <Button variant="outlined" onClick={handleClickOpen}>
        Add Rider
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
        <DialogTitle>Add New Carrier</DialogTitle>
        <DialogContent>
          
          <TextField
            autoFocus
            required
            margin="dense"
            id="name"
            name="name"
            label="Name of Rider"
            type="name"
            fullWidth
            variant="outlined"
          />
          <TextField
            autoFocus
            required
            margin="dense"
            id="license"
            name="license"
            label="License Plate"
            type="text"
            fullWidth
            variant="outlined"
          />
          <TextField
            autoFocus
            required
            margin="dense"
            id="email-address"
            name="email-address"
            label="Email Address"
            type="email"
            fullWidth
            variant="outlined"
          />
          <TextField
            autoFocus
            required
            margin="dense"
            id="contact"
            name="contact"
            label="Phone Number"
            type="email"
            fullWidth
            variant="outlined"
          />
          <div style={{ marginTop: '8px' }}>
        <TextField
          id="start-work"
          select
          label="From"
          defaultValue="9"
          onChange={handleStartChange}
        >
          {startWork.map((option) => (
            <MenuItem key={option.value} value={option.value}>
              {option.label}
            </MenuItem>
          ))}
        </TextField>
        <TextField
          id="end-work"
          select
          label="Till"
          defaultValue={endWork.length > 0 ? endWork[0].value : ''}
        //   fullWidth
          sx={{ minWidth: '120px' }}
          style={{ marginLeft: '8px' }}
        >
          {endWork.map((option) => (
            <MenuItem key={option.value} value={option.value}>
              {option.label}
            </MenuItem>
          ))}
        </TextField>
      </div>
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