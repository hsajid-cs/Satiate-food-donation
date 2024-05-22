import * as React from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import { jwtDecode } from 'jwt-decode';
import { useNavigate } from 'react-router-dom';

export default function ListFood() {
  const [open, setOpen] = React.useState(false);
  const [servingSize, setServingSize] = React.useState(20);
  const [description, setDescription] = React.useState('');
  const [expiry, setExpiry] = React.useState('');
  const [isFormSubmitting, setIsFormSubmitting] = React.useState(false);
  const navigate = useNavigate();
  const handleClickOpen = () => {
    setOpen(true);
  };

  const setInitialValues = () => {
    setDescription('');
      setExpiry('');
      setServingSize(20);
      setIsFormSubmitting(false);
  };

  const handleClose = () => {
    if (!isFormSubmitting ||window.confirm('Are you sure you want to close the dialog?')) {
      setOpen(false);
      
    }
    setInitialValues();
    navigate('/dashboard-donor');
  };

  const handleServingSizeChange = (event) => {
    const size = parseInt(event.target.value);
    if (size > 20) { // Check if serving size is greater than 20
      setServingSize(size);
    } else {
      setServingSize(20); // If not greater than 20, set it to 20
    }
  };
  
  const handleAddFood = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const formJson = Object.fromEntries(formData.entries());
    
    // Retrieve token from local storage
    const token = localStorage.getItem('token');
    console.log('Token:', token);
    
    if (!token) {
      console.error('Token not found in local storage');
      // Handle error, show error message to the user, etc.
      return;
    }
    
    try {
      const decodedToken = jwtDecode(token);
    const donorId = decodedToken.userId;
    console.log('Donor ID:', donorId);
      const response = await fetch(`http://localhost:3002/fatima/donors/add-donation/${donorId}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`, // Include token in the Authorization header
          // Add any other headers if required
        },
        body: JSON.stringify({
          food_type: formJson.description,
          quantity: formJson.serving,
          expiry_date: formJson.expiry,
          status: 'pending', // You can adjust this based on your requirements
          // pickup_time: new Date().toISOString(), // Assuming pickup time is current time
        }),
      });
      if (!response.ok) {
        throw new Error('Failed to add donation');
      }
      const data = await response.json();
      console.log('Donation added successfully:', data.newDonation);
     // Update status to reflect that the donation has been listed
     setIsFormSubmitting(true);
      handleClose();
    } catch (error) {
      console.error('Error adding donation:', error);
      // Handle error, show error message to the user, etc.
    }
  };
  


  return (
    <React.Fragment>
      <Button  onClick={handleClickOpen} style={{color: 'white'}}>
       Donate Now
      </Button>
      <Dialog
        open={open}
        onClose={handleClose}
        PaperProps={{
          component: 'form',
          onSubmit: handleAddFood
        }}
      >
        <DialogTitle>List New Food</DialogTitle>
        <DialogContent>

          <TextField
            autoFocus
            required
            margin="dense"
            id="description"
            name="description"
            label="Description"
            maxRows={5}
            type="text"
            size='medium'
            multiline
            fullWidth
            variant="outlined"
            value={description}
            onChange={(event) => setDescription(event.target.value)}
          />
          <TextField
            autoFocus
            required
            margin="dense"
            id="expiry"
            name="expiry"
            helperText="Expiry Date (Starts from day after tomorrow)"
            type="date"
            InputLabelProps={{
              shrink: true,
            }}
            InputProps={{
              inputProps: {
                min: new Date(new Date().getTime() + 2 * 24 * 60 * 60 * 1000).toISOString().split('T')[0], // Set minimum date as the day after tomorrow
              },
            }}
            fullWidth
            variant="outlined"
            value={expiry}
            onChange={(event) => setExpiry(event.target.value)}
          />
          <TextField
            autoFocus
            required
            margin="dense"
            id="serving"
            name="serving"
            type="number"
            value={servingSize} // Set the value of the input field to the current serving size state
            onChange={handleServingSizeChange} // Call handleServingSizeChange when the value changes
            helperText="Serving Size (Min. 20)"
            fullWidth
            variant="outlined"
          />
          {/* <TextField
            autoFocus
            required
            margin="dense"
            id="image"
            name="image"
            helperText="Add Image"
            type="file"
            fullWidth
            variant="outlined"
          /> */}
  
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
          <Button type="submit" >Add</Button>
        </DialogActions>
      </Dialog>
    </React.Fragment>
  );
}