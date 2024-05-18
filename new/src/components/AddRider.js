import React from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import MenuItem from '@mui/material/MenuItem';
// import { createTheme, ThemeProvider } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';

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

const endWorkOptions = [
  { value: '13', label: '13' },
  { value: '14', label: '14' },
  { value: '15', label: '15' },
  { value: '16', label: '16' },
  { value: '17', label: '17' },
  { value: '18', label: '18' },
  { value: '19', label: '19' },
  { value: '20', label: '20' },
  { value: '21', label: '21' },
];

const initialState = {
  username: '',
  contact: '',
  email: '',
  license_plate: '',
  starting_time: '',
  ending_time: '',
};

// Initialize endWork with the same values as startWork
export default function AddRider() {
  const isSmallScreen = useMediaQuery('(max-width:600px)');
  

  const [open, setOpen] = React.useState(false);
  const [submitted, setSubmitted] = React.useState(false);
  const [endWork, setEndWork] = React.useState([...endWorkOptions]);
  const [formData, setFormData] = React.useState({ ...initialState });
  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    if (!submitted) { // Check if form has been submitted
      const confirmClose = window.confirm('Are you sure you want to close without adding the rider?');
      if (confirmClose) {
        setFormData({ ...initialState });
        setOpen(false);
      }
    } else {
      setOpen(false); // Close the dialog without confirmation if form has been submitted
    }
  };

  const handleStartChange = (event) => {
    updateEndWork(event.target.value);
  };


  const updateEndWork = (selectedStart) => {
    const startHour = parseInt(selectedStart);
    const filteredEndWork = endWorkOptions.filter(
      (option) => parseInt(option.value) >= startHour + 4 && parseInt(option.value) <= 21
    );
    setEndWork(filteredEndWork);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const formJson = {
      username: formData.get('name'),
      contact: formData.get('contact'),
      email: formData.get('email-address'),
      license_plate: formData.get('license'),
      starting_time: formData.get('start-work'),
      ending_time: formData.get('end-work'),
    };
    console.log('Rider:', formJson);
    setSubmitted(true); // Set form submission state to true
    handleClose();
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
          onSubmit: handleSubmit, // Use handleSubmit function for form submission
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
            type="text"
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
          sx={{
            maxWidth: '180px',
            width: isSmallScreen ? '100%' : '50%', // Adjust width based on screen size
            // ml: isSmallScreen ? 2 : 0, // Add margin left for larger screens
            mb: isSmallScreen ? 2 : 0, // Add margin bottom for small screens
          }}
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
          sx={{
            maxWidth: '180px',
            width: isSmallScreen ? '100%' : '50%', // Adjust width based on screen size
            ml: isSmallScreen ? 0 : 2, // Add margin left for larger screens
            // mb: isSmallScreen ? 2 : 0, // Add margin bottom for small screens
          }}
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
        </DialogActions>
      </Dialog>
    </React.Fragment>
  );
}