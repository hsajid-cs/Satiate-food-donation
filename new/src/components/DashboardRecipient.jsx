import React from 'react';
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
import AssignRider from './AssignRider';
import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';
import AddRider from './AddRider';
import './Dashboard.css'
import CircularDeterminate from './Progress';
import DonationTable from './DonationTable';
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

const DashboardRecipient = () => {
  // const [riderInfo, setRiderInfo] = React.useState({});
  // const fetchRiderInfo = async (donorId, donationId) => {
  //   console.log("hello",donorId,donationId);
  //   try {
  //     const response = await fetch(`http://localhost:3002/fatima/donors/donors/${donorId}/donations/${donationId}/rider`);
  //     console.log("hello",response);
  //     if (!response.ok) {
  //       throw new Error('Failed to fetch rider information');
  //     }
  //     const data = await response.json();
  //     // Update riderInfo state with the response
  //     setRiderInfo(prevState => ({
  //       ...prevState,
  //       [`${donorId}-${donationId}`]: data // Store rider information by donation id
  //     }));
  //   } catch (error) {
  //     console.error('Error fetching rider information:', error);
  //     // Handle error
  //   }
  // };
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
  const [expanded, setExpanded] = React.useState({});
  const [data, setData] = React.useState([]);
  const [donations, setDonations] = React.useState([]);
  const token = localStorage.getItem('token');
  const recipientId = jwtDecode(token).userId;
  console.log(recipientId);
  const fetchDonations = async () => {
    try {
      // Fetch nearby donations based on recipient ID
      
      const rec_donations = await fetch(`http://localhost:3002/fatima/recipients/recipients/${recipientId}`, {
        method: 'GET',
        headers: {
          'Authorization': `Bearer ${token}` // Include token from local storage
        }
      });
      if (!rec_donations.ok) {
        throw new Error('Failed to fetch nearby donations');
      }
      const donation = await rec_donations.json();
      
      setDonations(donation.received_donations);
      // console.log(donation);
      // console.log(donation.nearbyDonors);
      console.log(donation);
      console.log("received",donation.received_donations);
       // Set numCards to the length of the fetched data array
    } catch (error) {
      console.error('Error fetching nearby donations:', error);
      // Handle error
    }
  };
  const fetchNearbyDonations = async () => {
    try {
      // Fetch nearby donations based on recipient ID
      const response = await fetch(`http://localhost:3002/fatima/recipients/donations/nearby/${recipientId}`, {
        method: 'GET',
        headers: {
          'Authorization': `Bearer ${token}` // Include token from local storage
        }
      });
      if (!response.ok) {
        throw new Error('Failed to fetch nearby donations');
      }
      const data = await response.json();
      setData(data.nearbyDonors);
      console.log(data);
      console.log("nearby",data.nearbyDonors);
      // Set numCards to the length of the fetched data array
    } catch (error) {
      console.error('Error fetching nearby donations:', error);
      // Handle error
    }
  };

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    const options = { day: '2-digit', month: 'short', year: 'numeric' };
    return date.toLocaleDateString('en-GB', options);
  };

  React.useEffect(() => {
    // data.forEach((donor) => {
    //   donor.donationData.forEach((donation) => {
    //     fetchRiderInfo(donor.donorId, donation.donation_id);
    //   });
    // });

    console.log(data.length);
    fetchNearbyDonations();
    fetchDonations();
  }, []); // Run once on component mount
//  const [progress, setProgress] = React.useState(0);
  const handleExpandClick = (index) => {
    setExpanded((prevState) => ({
      ...prevState,
      [index]: !prevState[index],
    }));
  };

  // const isRiderAssigned = (donorId, donationId) => {
  //   console.log(riderInfo);
  //   console.log(riderInfo.length);
  //   return !!riderInfo[`${donorId}-${donationId}`]; // Check if riderInfo exists for the donation
  // };

  // const dothis = (donorId, donationId) => {
  //   const isAssignedRider = isRiderAssigned(donorId, donationId);
  //   console.log(isAssignedRider);
  // };


  const handleAssignRider = (donor_id, donation_id) => {
    // Logic to assign rider to the card with the specified index
    console.log(`Assigning rider ${donor_id} to card ${donation_id}`);
  };

  return (
    <>
    <div className="user-action">
      <div className='user-info'>
        <img src="https://pluspng.com/img-png/user-png-icon-big-image-png-2240.png" alt="user" className='user-avatar' />
        <div className="user-name">
        <h2>UserName</h2>
        <h3>Location</h3>
        </div>
        </div>
        <div className="list-action">
        <AddRider className="action-btn" />
        
      </div>
      </div>
      {/* <div className="cards">
      <CardContainer>
  {donations.map((donation, index) => (
    <Card
      key={`${donation.donation_id}-${index}`}
      sx={{
        backgroundColor: '#f5f5f5',
        borderRadius: '8px',
        boxShadow: '0px 2px 4px rgba(0, 0, 0, 0.1)',
        height: 'min-content',
      }}
    >
      <CardHeader/>
      <LoadScript
                googleMapsApiKey="AIzaSyDu-D_IqxGn7dh2CHqJTz-Ew5dCfbTvKzs" // Replace with your actual API key
                libraries={['places']}
              >
                <GoogleMap
                  mapContainerStyle={{ height: '194px', borderRadius: '8px' }}
                  center={{ lat: 37.7749, lng: -122.4194 }} // Example coordinates (San Francisco)
                  zoom={13}
                >
                  <Marker position={{ lat: 37.7749, lng: -122.4194 }} />
                </GoogleMap>
              </LoadScript>
      <div className="progressUpdate">
        <CircularDeterminate value={calculateProgress(donation.delivery_status)} />
      </div>
      <CardContent>
        <Typography variant="body2" color="text.secondary">
          Food Type: {donation.food_type}<br/>
          Quantity: {donation.quantity}<br/>
          Expiry Date: {formatDate(donation.expiry_date)}
        </Typography>
      </CardContent>
      <CardActions disableSpacing>

        <IconButton
          onClick={() => handleExpandClick(`${donation.donation_id}-${index}`)}
          aria-expanded={expanded[`${donation.donation_id}-${index}`]}
          aria-label="show more"
        >
          <ExpandMoreIcon />
        </IconButton>
      </CardActions>
      <Collapse in={expanded[`${donation.donation_id}-${index}`]} timeout="auto" unmountOnExit>
        <CardContent>
          <Typography paragraph>Details:</Typography>
          <Typography paragraph>
            Description: {donation.food_type}<br/>
            Expiry date: {formatDate(donation.expiry_date)}<br/>
            Serving Size: {donation.quantity}
          </Typography>
        </CardContent>
      </Collapse>
    </Card>
  ))}
</CardContainer>


      </div> */}
      <div className="cards">
        <CardContainer>
          {data.map((donor, donorIndex) => (
            donor.donationData && donor.donationData.length > 0 && (donor.donationData
              .filter((donation) => donation.status === "pending")
              .map((pendingDonation, donationIndex) => (
                <Card
                  key={`${donorIndex}-${donationIndex}`}
                  sx={{
                    backgroundColor: '#f5f5f5',
                    borderRadius: '8px',
                    boxShadow: '0px 2px 4px rgba(0, 0, 0, 0.1)',
                    height: 'min-content',
                  }}
                >
                  <CardHeader
                    title={donor.username}
                    subheader={`Location: ${donor.location[0]}, ${donor.location[1]}`}
                  />
                  <LoadScript
                googleMapsApiKey="AIzaSyDu-D_IqxGn7dh2CHqJTz-Ew5dCfbTvKzs" // Replace with your actual API key
                libraries={['places']}
              >
                <GoogleMap
                  mapContainerStyle={{ height: '194px', borderRadius: '8px' }}
                  center={{ lat: donor.location[0], lng: donor.location[1] }} // Example coordinates (San Francisco)
                  zoom={13}
                >
                  <Marker position={{ lat: donor.location[0], lng: donor.location[1] }} />
                </GoogleMap>
              </LoadScript>
                  <div className="progressUpdate">
                  <CircularDeterminate value={calculateProgress(pendingDonation.status)} />
                </div>
                            <CardContent>
            <Typography variant="body2" color="text.secondary">
              {pendingDonation.food_type}
            </Typography>
          </CardContent>
          <CardActions disableSpacing>   
          {pendingDonation.donation_id && (
  <AssignRider
  onClickAssign={() => handleAssignRider(donor.donorId,pendingDonation.donation_id)}
  donationId={pendingDonation.donation_id}

/>
)}

            <ExpandMore
              expand={expanded[`${donorIndex}-${donationIndex}`]}
              onClick={() => handleExpandClick(`${donorIndex}-${donationIndex}`)}
              aria-expanded={expanded[`${donorIndex}-${donationIndex}`]}
              aria-label="show more"
            >
              <ExpandMoreIcon />
            </ExpandMore>
          </CardActions>
          <Collapse in={expanded[`${donorIndex}-${donationIndex}`]} timeout="auto" unmountOnExit>
            <CardContent>
              <Typography paragraph>Details:</Typography>
             
              <Typography paragraph>
              Description: {pendingDonation.food_type}<br/>
                Expiry date: {formatDate(pendingDonation.expiry_date)}<br/>
                Serving Size: {pendingDonation.quantity}
              </Typography>
            </CardContent>
          </Collapse>
                </Card>
              ))
          )))}
        </CardContainer>
      </div>
      {/* <DonationTable data={donations}/> */}
   </>
  );
};

export default DashboardRecipient;