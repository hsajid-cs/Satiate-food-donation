import React,{useState, useEffect} from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import MenuItem from '@mui/material/MenuItem';

const fetchRiders = async () => {
  // Implement your MongoDB fetch logic here
  // This is just a placeholder
  return [
    { id: 'rider1', name: 'Rider 1' },
    { id: 'rider2', name: 'Rider 2' },
    // Add more riders dynamically
  ];
};

const fetchRiderDetails = async (riderId) => {
  // Implement your MongoDB fetch logic here
  // This is just a placeholder
  if(riderId === 'rider1')
  return {
    license: 'ABC123',
    email: 'rider1@example.com',
    contact: '1234567890',
    startWork: '9',
    endWork: '17',
  };
  else if(riderId === 'rider2')
    return{
      license: 'XYZ123',
      email: 'rider2@example.com'
      , contact: '0987654321',
      startWork: '10',
      endWork: '18',};
};

// Initialize endWork with the same values as startWork
const AssignRider= ({ onClickAssign, index }) => {
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
    onClickAssign(index);
  };

  useEffect(() => {
    const fetchRidersData = async () => {
      const ridersData = await fetchRiders();
      setRiders(ridersData);
    };

    fetchRidersData();
  }, []);

  const handleClose = () => {
    setOpen(false);
  };

  const handleRiderChange = async (event) => {
    const riderId = event.target.value;
    setSelectedRider(riderId);
    const details = await fetchRiderDetails(riderId);
    setRiderDetails(details);
  };

  return (
    <React.Fragment>
      <Button variant="outlined" onClick={handleClick} style={{color: 'black'}}>
        Assign Carrier
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
            // const email = formJson.email;
            handleClose();
          },
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
            <MenuItem key={rider.id} value={rider.id}>
              {rider.name}
            </MenuItem>
          ))}</TextField>
          
          <TextField
          disabled
            autoFocus
            margin="dense"
            id="license"
            name="license"
            label="License Plate"
            type="text"
            value={riderDetails.license}
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
          value={riderDetails.startWork}
        >
        </TextField>
        <TextField
          id="end-work"
          disabled
          value={riderDetails.endWork}
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