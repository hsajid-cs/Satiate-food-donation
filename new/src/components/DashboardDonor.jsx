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
import Button from '@mui/material/Button';
import "./Button.css";
import "./Dashboard.css"
// import "slick-carousel/slick/slick.css"; 
// import "slick-carousel/slick/slick-theme.css";

const CardContainer = styled(Box)(({ numCards }) => ({
  display: 'grid',
  gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
  gap: '20px',
  maxWidth: '1200px',
  margin: '0 auto',
  justifyContent: numCards === 1 ? 'center' : 'initial',
}));

const DashboardDonor = ({ numCards }) => {
  const [expanded, setExpanded] = React.useState([]);

  const handleExpandClick = (index) => {
    setExpanded((prevState) => {
      const newState = [...prevState];
      newState[index] = !newState[index];
      return newState;
    });
  };

  // const cardWidth = numCards <= 2 ? '60%' : 'calc(70% - 10px)'; // Adjust width based on the number of cards

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
        <ListFood className="action-btn" />
      </div>
     
    </div>
    <div className="cards">
    <CardContainer numCards={numCards}>
        {Array.from({ length: numCards }).map((_, index) => (
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
            <CardHeader title="Donor Name" subheader="Location" />
            <CardMedia
              component="img"
              height="194"
              image="https://source.unsplash.com/random/{index}"
              alt="random"
            />
            <CardContent>
              <Typography variant="body2" color="text.secondary">
                Description
              </Typography>
            </CardContent>
            <CardActions disableSpacing>
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
                <Typography paragraph>Blah blah blah</Typography>
              </CardContent>
            </Collapse>
          </Card>
        ))}
      </CardContainer>
    </div>
    <div className="user-table">
    <UserTable />
    </div>
    {/* <Button 
        style={{
          display : 'flex',
          flexDirection: 'row',
          fontSize: '1.5rem', // Adjust the font size as needed
          padding: '0.75rem 1.5rem', // Optional: adjust padding to match the larger font size
          backgroundColor: '#f5f5f5  ' , // Example background color
          color: 'black', // Change text color to black
          border: 'none',
          borderRadius: '4px',
          cursor: 'pointer',
          // display: 'inline-block',
          textAlign: 'center',
          // margin: '0 auto',
          marginBottom: '1rem', // Optional: add some space below the button
        }}
      > 
        <div style={{ display: 'inline-block' }}>
          <ListFood /> 
        </div>
      </Button> */}
    </>
  );
};

export default DashboardDonor;
