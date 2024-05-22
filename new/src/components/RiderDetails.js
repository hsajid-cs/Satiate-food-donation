import * as React from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';

export default function FormDialog({ rider }) {
  const [open, setOpen] = React.useState(false);
  // const [rider, setRider] = React.useState({ name: '', licensePlate: '', phone: '', date: '' });

  const handleClickOpen = () => {
    setOpen(true);
    // fetchRiderData();
  };

  const handleClose = () => {
    setOpen(false);
  };

  // Test function to simulate fetching data
  // const fetchRiderData = () => {
  //   // Placeholder for MongoDB logic
  //   // Here you would typically fetch the data from MongoDB and update the state
  //   // Example:
  //   // const riderData = await fetchFromMongoDB();
  //   // setRider(riderData);

  //   // Simulated data for testing
  //   const simulatedData = {
  //       name: 'John Doe',
  //       licensePlate: 'ABC-1234',
  //       phone: '123-456-7890',
  //       date: '2024-05-19'
  //     };

  //   setRider(simulatedData);
  // };

  return (
    // <div>
    //   <p>Rider Name: {rider?.riderName ? rider.riderName :''}</p>
    //   <p>Rider Contact: {rider?.riderContact? rider.riderContact:''}</p>
    //   <p>Rider Email: {rider?.riderEmail? rider.riderEmail:''}</p>
    //   <p>Rider Vehicle: {rider?.riderVehicle?rider.riderVehicle:''}</p>
    //   <p>Rider Start Time: {rider?.riderStartTime?rider.riderStartTime:''}</p>
    //   <p>Rider End Time: {rider?.riderEndTime?rider.riderEndTime:''}</p>
    // </div>
    <React.Fragment>
      <Button variant="outlined" onClick={handleClickOpen} style={{color:'black'}}
       sx={{
        color: 'black',
        borderColor: 'black',
        '&:hover': {
          borderColor: 'black',
        },
      }}>
        Show Rider
      </Button>
      <Dialog
        open={open}
        onClose={handleClose}
      >
        <DialogTitle>Assigned Rider</DialogTitle>
        <DialogContent>
          <DialogContentText>
            The following rider has been assigned to the delivery. Your order will be picked up within 30 minutes.
          </DialogContentText>
          <TextField
            autoFocus
            disabled
            margin="dense"
            value={rider?.riderName ? rider.riderName :'No Rider Assigned'}
            type="text"
            // style={{color: 'black'}}
            fullWidth
            variant="standard"
          />
          <TextField
            autoFocus
            disabled
            margin="dense"
            type="text"
            value={rider?.riderContact? rider.riderContact:'N/A'}
            fullWidth
            variant="standard"
          />
          <TextField
            autoFocus
            disabled
            margin="dense"
            type="text"
            value={rider?.riderVehicle? rider.riderVehicle:'N/A'}
            fullWidth
            variant="standard"
          />
          {/* <TextField
            autoFocus
            disabled
            margin="dense"
            type="text"
            fullWidth
            value={new Date(rider.date).toLocaleDateString()}
            variant="standard"
          /> */}
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Ok</Button>
        </DialogActions>
      </Dialog>
    </React.Fragment>
  );
}
