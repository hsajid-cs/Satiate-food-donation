import React,{useState, useEffect} from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import MenuItem from '@mui/material/MenuItem';
import {jwtDecode} from 'jwt-decode';

// Initialize endWork with the same values as startWork
const AssignRider= ({ onClickAssign,donationId}) => {
  const fetchRiders = async () => {
    try {
      // Retrieve the recipient ID from local storage
      const token = localStorage.getItem('token');
      const recipientId = jwtDecode(token).userId;
      
  
      // Make a request to your server to fetch riders for the recipient
      const response = await fetch(`http://localhost:3002/fatima/recipients/riders/${recipientId}`, {
        method: 'GET',
        headers: {
          'Authorization': `Bearer ${token}`, // Include token if needed
          'Content-Type': 'application/json',
        },
      });
  
      if (!response.ok) {
        // Handle error response
        console.error('Error fetching riders:', response.statusText);
        return;
      }
  
      const data = await response.json();
  
      // Update the state with the fetched riders
      return data.riders;
    } catch (error) {
      console.error('Error fetching riders:', error);
    }
    return [
    ];
  };
  const [open, setOpen] = React.useState(false);
  const [riders, setRiders] = useState([]);
  const [selectedRider, setSelectedRider] = useState('');
  const [riderDetails, setRiderDetails] = useState({
    license: '',
    email: '',
    contact: '',
    startWork: '',
    endWork: '',
  });
  const handleClick = () => {
    setOpen(true);
    console.log(donationId);
    onClickAssign(donationId);
    console.log(donationId);
  };

  useEffect(() => {
    const fetchRidersData = async () => {
      const ridersData = await fetchRiders();
      setRiders(ridersData);
      console.log(ridersData);
    };

    fetchRidersData();
  }, []);

  const handleClose = () => {
    setOpen(false);
  };

  const handleRiderChange = async (event) => {
    const riderId = event.target.value;
  
    setSelectedRider(riderId);
  
    const rider = riders.find(r => r._id === riderId);
  
    setRiderDetails(rider);
  }

  const handleSubmit = async (event) => {
    event.preventDefault();
    // Logic to assign rider to the card with the specified index
    console.log(`Assigning rider ${selectedRider} to donation ${donationId}`);
    setOpen(false);
  
      try {
        const token = localStorage.getItem('token');
        const recipientId = jwtDecode(token).userId;
  
        const response = await fetch(`http://localhost:3002/fatima/recipients/assign-rider/${recipientId}/${donationId}`, {
          method: 'POST',
          headers: {
            'Authorization': `Bearer ${token}`,
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ riderId: selectedRider }),
        });
  
        if (!response.ok) {
          console.error('Error assigning rider:', response.statusText);
          return;
        }
  
        const data = await response.json();
        console.log('Rider assigned successfully:', data);
        setOpen(false);
      } catch (error) {
        console.error('Error assigning rider:', error);
      }
    };

  return (
    <React.Fragment>
      <Button onClick={handleClick} style={{color: 'black', backgroundColor:"#1ea27e"}}>
        Assign Carrier
      </Button>
      <Dialog
        open={open}
        onClose={handleClose}
        PaperProps={{
          component: 'form',
          onSubmit: handleSubmit,
        }}
      >
        <DialogTitle>Assign Carrier for Delivery</DialogTitle>
        <DialogContent>
          
          <TextField
            autoFocus
            required
            select
            margin="dense"
            id="name"
            name="name"
            label="Name of Rider"
            type="name"
            fullWidth
            variant="outlined"
            value={selectedRider}
            onChange={handleRiderChange}
            
          >{riders.map((rider) => (
            <MenuItem key={rider._id} value={rider._id}>
              {rider.username}
            </MenuItem>
          ))}</TextField>
          
          <TextField
          disabled
            autoFocus
            margin="dense"
            id="license"
            name="license"
            type="text"
            value={riderDetails.number_plate}
            fullWidth
            variant="outlined"
          />
          <TextField
            autoFocus
            disabled
            margin="dense"
            id="email-address"
            name="email-address"
            label="Email Address"
            type="email"
            value={riderDetails.email}
            fullWidth
            variant="outlined"
          />
          <TextField
            autoFocus
            disabled
            margin="dense"
            id="contact"
            name="contact"
            label="Phone Number"
            value={riderDetails.contact}
            type=""
            fullWidth
            variant="outlined"
          />
          <div style={{ marginTop: '8px' }}>
        <TextField
          id="start-work"
          disabled
          value={riderDetails.starting_time}
        >
        </TextField>
        <TextField
          id="end-work"
          disabled
          value={riderDetails.ending_time}
        //   fullWidth
          // sx={{ minWidth: '120px' }}
          style={{ marginLeft: '8px' }}
        >
        </TextField>
      </div>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
          <Button type="submit" >ASSIGN</Button>
          {/* style={{ color: 'white', backgroundColor: 'green' }} */}
        </DialogActions>
      </Dialog>
    </React.Fragment>
  );
}

export default AssignRider;