import React, { useEffect, useState } from 'react';
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
import Button from '@mui/material/Button';
import Box from '@mui/material/Button';
import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';
import UpdateStatus from './UpdateStatus';
import './Dashboard.css';
// import UpdateStatus from './UpdateStatus';
import CircularDeterminate from './Progress.js'; // Ensure the correct path
// import ListFood from './ListFood.js';
import { jwtDecode } from 'jwt-decode';

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
  let currentPosition = [,];
  const [recipientposition, setRecipientPosition] = useState([37.7749, -122.4194]);
  const[donorposition,setDonorPosition] = useState([37.7749, -122.4194]);
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(
        (position) => {
            currentPosition = [position.coords.latitude, position.coords.longitude];
        },
        (error) => {
            console.error('Error getting current position:', error);
        }
    );
}
  const [expanded, setExpanded] = React.useState({});
  const [statusOpen, setStatusOpen] = React.useState(false);
  const [progress, setProgress] = React.useState(0);
  const [map, setMap] = useState(null);
  const token = localStorage.getItem('token');
  const decodedToken = jwtDecode(token).userId;
  const [assignment, setAssignment] = React.useState([]);
  console.log(decodedToken);
  React.useEffect(() => {
    getAssignment();
  },[]);
  
  // const [statusOpen, setStatusOpen] = React.useState(false);
  const handleExpandClick = () => {
    setExpanded(!expanded);
    getDonorLocation();
    getRecipientLocation();
  };
  const getAssignment = async () => {
    try {
      const response = await fetch(`http://localhost:3002/fatima/riders/assigned-donations/${decodedToken}`, {
        method: 'GET',
        headers: {
          'Authorization': `Bearer ${token}`
        }
      });
      const data = await response.json();
      console.log(data);
      setAssignment(data);
    }
    catch (error) {
      console.error('Error:', error);
    }
  };

  
  const getDonorLocation = async () => {
    try {
      const response = await fetch(`http://localhost:3002/fatima/riders/riders/${decodedToken}/donor/location`, {
        method: 'GET',
        headers: {
          'Authorization': `Bearer ${token}`
        }
      });
      const donorLoc = await response.json();
      setDonorPosition(donorLoc);
    }
    catch (error) {
      console.error('Error:', error);
    }
  };

  const getRecipientLocation = async () => {
    try {
      const response = await fetch(`http://localhost:3002/fatima/riders/riders/${decodedToken}/recipient/location`, {
        method: 'GET',
        headers: {
          'Authorization': `Bearer ${token}`
        }
      });
      const recLoc = await response.json();
      setRecipientPosition(recLoc);
    }
    catch (error) {
      console.error('Error:', error);
    }
  };

  
  


  const openStatusBar = () => {
    setStatusOpen(true);
  };

  const closeStatusBar = () => {
    setStatusOpen(false);
  };

  const openInMaps = (lat_start, long_start, lat_end,long_end) => {

    const directionsUrl = `https://www.google.com/maps/dir/${lat_start},+${long_start}/${lat_end},+${long_end}/`;
    window.open(directionsUrl, '_blank');
  };

  const libraries = ['places'];

  const handleLoad = (mapInstance) => {
    setMap(mapInstance);
  };


  const handleStatusChange = (status) => {
    if (status === 'Picked') {
      setProgress(66);
    } else if (status === 'Delivered') {
      setProgress(100);
    }
    if (status === 'listed') {
      setProgress(33);
    }
  };

  return (
    <>

     <div className="user-action">
      <div className='user-info'>
        <img src="https://pluspng.com/img-png/user-png-icon-big-image-png-2240.png" alt="user" className='user-avatar' />
        <div className="user-name">
        <h2>Muhammad</h2>
      
        </div>
        
        </div>
        <div className="list-action">
        <UpdateStatus />
      </div>
      
    </div>
    <div className="cards-rider">
        <CardContainer>
            <Card
              key={0}
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
              <div className="progressUpdate">
                <Box sx={{ color: '#ff5722' }}>
                  <CircularDeterminate color="primary" value={progress} />
                </Box>
              </div>
              <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between' }}>
                <div style={{ width: '48%', borderRight: '2px solid black' }}>
                  <LoadScript
                    googleMapsApiKey="AIzaSyDu-D_IqxGn7dh2CHqJTz-Ew5dCfbTvKzs" // Replace with your actual API key
                    libraries={libraries}
                  >
                    <GoogleMap
                      mapContainerStyle={{ width: '100%', height: '400px' }}
                      zoom={15}
                      center={{ lat: currentPosition[0], lng: currentPosition[1] }} // Example coordinates (San Francisco)
                      onLoad={handleLoad}
                    >
                      <Marker position={{ lat: currentPosition[0], lng: currentPosition[1] }} />
                    </GoogleMap>
                  </LoadScript>
                  <Button
                    onClick={() => openInMaps(currentPosition[0],currentPosition[1], donorposition[0], donorposition[1])}
                    fullWidth
                    sx={{
                      // backgroundColor: '#1ea27e',
                      color: '#1ea27e',
                      padding: '5px 5px',
                      textDecoration: 'none',
                      fontSize: '15px',
                      marginTop: '5px',
                      marginBottom: '5px',
                      margin: '2px 2px',
                      borderRadius: '5px',
                      transition: '0.3s ease',
                    }}
                  >
                    View
                  </Button>
                  <CardContent>
                    <Typography variant="body2" color="text.secondary">
                      Description for first half of the card
                    </Typography>
                  </CardContent>
                </div>
                <div style={{ width: '48%' }}>
                  <LoadScript
                    googleMapsApiKey="AIzaSyDu-D_IqxGn7dh2CHqJTz-Ew5dCfbTvKzs" // Replace with your actual API key
                    libraries={libraries}
                  >
                    <GoogleMap
                      mapContainerStyle={{ width: '100%', height: '400px' }}
                      zoom={15}
                      center={{ lat: donorposition[0], lng: donorposition[1] }} // Example coordinates (San Francisco)
                      onLoad={handleLoad}
                    >
                      <Marker position={{ lat: donorposition[0], lng: donorposition[1]}} />
                    </GoogleMap>
                  </LoadScript>
                  <Button
                    onClick={() => openInMaps(donorposition[0], donorposition[1], recipientposition[0], recipientposition[1])}
                    fullWidth
                    sx={{
                      // backgroundColor: '#1ea27e',
                      color: '#1ea27e',
                      padding: '5px 5px',
                      textDecoration: 'none',
                      fontSize: '15px',
                      marginTop: '5px',
                      marginBottom: '5px',
                      margin: '2px 2px',
                      borderRadius: '5px',
                      transition: '0.3s ease',
                    }}
                  >
                    View
                  </Button>
                  <CardContent>
                    <Typography variant="body2" color="text.secondary">
                      Description for second half of the card
                    </Typography>
                  </CardContent>
                </div>
              </div>
              <CardActions disableSpacing>
  <ExpandMore
    expand={expanded}
    onClick={handleExpandClick}
    aria-expanded={expanded}
    aria-label="show more"
  >
    <ExpandMoreIcon />
  </ExpandMore>
</CardActions>
              <Collapse in={expanded} timeout="auto" unmountOnExit>
                <CardContent>
                  <Typography paragraph>Details:</Typography>
                  <Typography paragraph>
                    assignment details: {assignment._id}
                  </Typography>
                </CardContent>
              </Collapse>
            </Card>
        </CardContainer>
      </div>
    </>
  )
  };

export default DashboardRider;