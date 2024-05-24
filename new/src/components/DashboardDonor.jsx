import React from 'react';
import { styled } from '@mui/system';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Collapse from '@mui/material/Collapse';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import UserTable from './UserTable';
import ListFood from './ListFood';
import RiderDetails from './RiderDetails';
import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';
import { jwtDecode } from 'jwt-decode';
import CircularDeterminate from './Progress';
import "./Button.css";
import "./Dashboard.css"



const CardContainer = styled(Box)(({ numCards }) => ({
  display: 'grid',
  gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
  gap: '20px',
  maxWidth: '1200px',
  margin: '0 auto',
  justifyContent: numCards === 1 ? 'center' : 'initial',
}));

const DashboardDonor = () => {
  const calculateProgress = (status) => {
    switch (status) {
      case "pending":
        return 33;
      case "picked_up":
        return 66;
      case "delivered":
        return 100;
      default:
        return 0; // Default progress if status is not recognized
    }
  };
  const [delieveredDonations, setDelieveredDonations] = React.useState([]);
  const [donations, setDonations] = React.useState([]);
  const [expanded, setExpanded] = React.useState([]);
  const [riderDetails, setRiderDetails] = React.useState({});
  const [numCards, setNumCards] = React.useState(0);
  const [isListFoodOpen, setIsListFoodOpen] = React.useState(true);
  const [username, setUsername] = React.useState('');
  const [latitude, setLatitude] = React.useState('');
  const [longitude, setLongitude] = React.useState('');
  const token = localStorage.getItem('token');
        const decodedToken = jwtDecode(token);
        const donorId = decodedToken.userId;
        console.log(donorId);
        console.log(decodedToken);
        const fetchRiderDetails = async (donationId) => {
          console.log(donationId);
          try {
            const response = await fetch(`http://localhost:3002/fatima/donors/donors/${donorId}/donations/${donationId}/rider`);
            const data = await response.json();
            console.log(data);
            return data; // Return the fetched rider details
          } catch (error) {
            console.error('Error fetching rider details:', error);
            return {
              riderContact: '',
              riderEmail: '',
              riderEndTime: '',
              riderName: '',
              riderStartTime: '',
              riderVehicle: '',
            };
          }
        };

  const handleExpandClick = (index) => {
    setExpanded((prevState) => {
      const newState = [...prevState];
      newState[index] = !newState[index];
      return newState;
    });
  };

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    const options = { day: '2-digit', month: 'short', year: 'numeric' };
    return date.toLocaleDateString('en-GB', options);
  };

  const getUserDetails = async () => {
    const userData = await fetch(`http://localhost:3002/fatima/donors/donors/${donorId}`, {
          method: 'GET',
          headers: {
            'Authorization': `Bearer ${token}`
          }
        });
        const dice = await userData.json();
        console.log("data",dice);
        setUsername(dice.username);
        const { coordinates } = dice.location;
        setLatitude(coordinates[0]);
        setLongitude(coordinates[1]);
  };


  React.useEffect(() => {
    const fetchDonations = async () => {
      try {
        const pendingresponse = await fetch(`http://localhost:3002/fatima/donors/donor/${donorId}/donations`, {
          method: 'GET',
          headers: {
            'Authorization': `Bearer ${token}`
          }
        });
        if (!pendingresponse.ok) {
          throw new Error('Failed to fetch pending donations');
        }
        const pendingData = await pendingresponse.json();
        setDonations(pendingData);
    
        // Fetch rider details for each donation
        for (const donation of pendingData) {
          const riderData = await fetchRiderDetails(donation._id);
          // Update riderDetails state with fetched data
          setRiderDetails((prevRiderDetails) => ({
            ...prevRiderDetails,
            [donation._id]: riderData, // Use donationId as the key
          }));
        }
    
        const response = await fetch(`http://localhost:3002/fatima/donors/donor/${donorId}/donations/delivered`, {
          method: 'GET',
          headers: {
            'Authorization': `Bearer ${token}`
          }
        });
    
        const data = await response.json();
    
        // Check if the data array is empty
        if (data.length === 0) {
          setDelieveredDonations([]); // Set to null if empty
        } else {
          setDelieveredDonations(data); // Set to the fetched data
        }
      } catch (error) {
        console.error('Error fetching donations:', error);
        // console.log('API Response:', response.data);
      }
    };

    fetchDonations();
    getUserDetails();
  }, [isListFoodOpen]);
  // const cardWidth = donations.length <= 2 ? '60%' : 'calc(70% - 10px)'; // Adjust width based on the number of cards
  const handleListFoodOpen = () => {
    setIsListFoodOpen(true);
  };

  const handleListFoodClose = () => {
    setIsListFoodOpen(false);
  };
  return (
    
    <>
    <div className="user-action">
      <div className='user-info'>
        <img src="https://pluspng.com/img-png/user-png-icon-big-image-png-2240.png" alt="user" className='user-avatar' />
        <div className="user-name">
        <h2>{username}</h2>
        <h3>{latitude}, {longitude}</h3>
        </div>
        </div>
      <div className="list-action">
        <ListFood />
      </div>
     
    </div>
    <div className="cards">
        {donations.length===0 ? (console.log(donations.length)) : (<CardContainer numCards={1}>
          {donations.map((donation, index) => (
            <Card
            key={index}
            sx={{
              backgroundColor: '#f5f5f5',
              borderRadius: '8px',
              boxShadow: '0px 2px 4px rgba(0, 0, 0, 0.1)',
            //   width: cardWidth, // Dynamically set width
              height: 'min-content',
            }}
          >
              <CardHeader title={donation.food_type}/>
              <CardMedia>
              <LoadScript
                googleMapsApiKey="AIzaSyDu-D_IqxGn7dh2CHqJTz-Ew5dCfbTvKzs" // Replace with your actual API key
                libraries={['places']}
              >
                <GoogleMap
                  mapContainerStyle={{ height: '194px', borderRadius: '8px' }}
                  center={{ lat: latitude, lng: longitude }} // Example coordinates (San Francisco)
                  zoom={13}
                >
                  <Marker position={{ lat: latitude, lng: longitude }} />
                </GoogleMap>
              </LoadScript>
              </CardMedia>
              <div className="progressUpdate">
                  {/* <CircularDeterminate value={progress} /> */}
                  <CircularDeterminate value={calculateProgress(donation.status)} />
                </div>
              {/* <CardMedia component="img" src={`https://source.unsplash.com/random/${index}`} alt="random" /> */}
              <CardContent>
                
                <Typography variant="body2">{donation.status}</Typography>
              </CardContent>
              <CardActions disableSpacing>
              <div className="Rider-details"><RiderDetails rider={riderDetails[donation._id]} /></div> 
              <IconButton
                onClick={() => handleExpandClick(index)}
                aria-expanded={expanded[index]}
                aria-label="show more"
              >
                <ExpandMoreIcon />
              </IconButton>
              </CardActions>
              <Collapse in={expanded[index]} timeout="auto" unmountOnExit>
              <CardContent>
                <Typography paragraph>Details:</Typography>
                <Typography variant="body2">Serving Size: {donation.quantity}</Typography>
                <Typography variant="body2">Expiry date: {formatDate(donation.expiry_date)}</Typography>
              </CardContent>
            </Collapse>
            </Card>
          ))}
        </CardContainer>)}
      </div>
    <div className="user-table">
    {delieveredDonations.length > 0?( <UserTable data={delieveredDonations} />):(<p></p>)}
    </div>
    </>
  );
};

export default DashboardDonor;
