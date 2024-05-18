import * as React from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';

export default function ListFood() {
  const [open, setOpen] = React.useState(false);
  const [servingSize, setServingSize] = React.useState(20);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleServingSizeChange = (event) => {
    const size = parseInt(event.target.value);
    if (size > 20) { // Check if serving size is greater than 20
      setServingSize(size);
    } else {
      setServingSize(20); // If not greater than 20, set it to 20
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
          />
          <TextField
            autoFocus
            required
            margin="dense"
            id="contact"
            name="contact"
            type="number"
            value={servingSize} // Set the value of the input field to the current serving size state
            onChange={handleServingSizeChange} // Call handleServingSizeChange when the value changes
            helperText="Serving Size (Min. 20)"
            fullWidth
            variant="outlined"
          />
          <TextField
            autoFocus
            required
            margin="dense"
            id="image"
            name="image"
            helperText="Add Image"
            type="file"
            fullWidth
            variant="outlined"
          />
  
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
          <Button type="submit" >Add</Button>
        </DialogActions>
      </Dialog>
    </React.Fragment>
  );
}