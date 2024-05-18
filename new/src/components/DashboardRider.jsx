import React, { useState } from 'react';
import { styled } from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Collapse from '@mui/material/Collapse';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
<<<<<<< HEAD
// import UserTable from './UserTable';
import './Dashboard.css'
import UpdateStatus from './UpdateStatus';
=======
import './Dashboard.css';
import UpdateStatus from './UpdateStatus';
import CircularDeterminate from './Progress.js'; // Ensure the correct path
// import ListFood from './ListFood.js';
>>>>>>> 8ceace4cf65f290c8d5ac5d2d13e5db3e9c3f4a4
const CardContainer = styled('div')({
  display: 'grid',
  gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
  gap: '20px',
  maxWidth: '1200px',
  margin: '0 auto',
});

const ExpandMore = styled((props) => {
  const { expand, ...other } = props;
  return <IconButton {...other} />;
})(({ theme, expand }) => ({
  transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
  marginLeft: 'auto',
  transition: theme.transitions.create('transform', {
    duration: theme.transitions.duration.shortest,
  }),
}));

const DashboardRider = ({ numCards ,foodStatus,statusSource }) => {
  const [expanded, setExpanded] = React.useState({});
  const [statusOpen, setStatusOpen] = React.useState(false);
<<<<<<< HEAD
=======
  const [progress, setProgress] = React.useState(0);
>>>>>>> 8ceace4cf65f290c8d5ac5d2d13e5db3e9c3f4a4

  const handleExpandClick = (index) => {
    setExpanded((prevState) => ({
      ...prevState,
      [index]: !prevState[index],
      
    
  }));
  };

  const openStatusBar = () => {
    setStatusOpen(true);
  };

  const closeStatusBar = () => {
    setStatusOpen(false);
  };

  const openStatusBar = () => {
    setStatusOpen(true);
  };

  const closeStatusBar = () => {
    setStatusOpen(false);
  };

  const handleStatusChange = (status) => {
    if (status === 'Picked') {
      setProgress(66);
    } else if (status === 'Delivered') {
      setProgress(100);
    }if(statusSource === 'ListFood')
    if(status === 'listed'){
      setProgress(33);
    }
  };
  

  // const handleStatusChange = (foodStatus) => {
  //   if (foodStatus === 'listed') {
  //     setProgress(33);
  //   }
  // };
  return (
    <>
<<<<<<< HEAD
     <div className="user-action">
      <div className='user-info'>
        <img src="https://pluspng.com/img-png/user-png-icon-big-image-png-2240.png" alt="user" className='user-avatar' />
        <div className="user-name">
        <h2>UserName</h2>
      
        </div>
        
        </div>
        <div className="list-action" onClick={openStatusBar}>
        Update Status
      </div>
      <UpdateStatus open={statusOpen} handleClose={closeStatusBar} />
    
    
=======
      <div className="user-action">
        <div className='user-info'>
          <img src="https://pluspng.com/img-png/user-png-icon-big-image-png-2240.png" alt="user" className='user-avatar' />
          <div className="user-name">
            <h2>UserName</h2>
          </div>
        </div>
        <div className="list-action" onClick={openStatusBar}>
          Update Status
        </div>
        <UpdateStatus open={statusOpen} handleClose={closeStatusBar} onStatusChange={handleStatusChange} />
>>>>>>> 8ceace4cf65f290c8d5ac5d2d13e5db3e9c3f4a4
      </div>
      <div className="cards">
        <CardContainer>
          {Array.from({ length: numCards }).map((_, index) => (
            <Card
              key={index}
              sx={{
                backgroundColor: '#f5f5f5',
                borderRadius: '8px',
                boxShadow: '0px 2px 4px rgba(0, 0, 0, 0.1)',
                height: 'min-content',
              }}
            >
              <CardHeader
                title="Donor Name"
                subheader="Location"
              />
              <CardMedia
                component="img"
                height="194"
                image="https://source.unsplash.com/random"
                alt="random"
              />
              <CardContent>
                <Typography variant="body2" color="text.secondary">
                  Description
                </Typography>
                <div className="progressUpdate">
                  <CircularDeterminate value={progress} />
                </div>
              </CardContent>
              <CardActions disableSpacing>
                <ExpandMore
                  expand={expanded[index]}
                  onClick={() => handleExpandClick(index)}
                  aria-expanded={expanded[index]}
                  aria-label="show more"
                >
                  <ExpandMoreIcon />
                </ExpandMore>
              </CardActions>
              <Collapse in={expanded[index]} timeout="auto" unmountOnExit>
                <CardContent>
                  <Typography paragraph>Details:</Typography>
                  <Typography paragraph>
                    Blah blah blah
                  </Typography>
                </CardContent>
              </Collapse>
            </Card>
          ))}
        </CardContainer>
      </div>
    </>
  );
};

export default DashboardRider;