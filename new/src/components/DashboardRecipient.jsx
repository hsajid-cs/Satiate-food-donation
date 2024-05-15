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

const DashboardRecipient = ({ data, numCards }) => {
  const [expanded, setExpanded] = React.useState({});

  const handleExpandClick = (index) => {
    setExpanded((prevState) => ({
      ...prevState,
      [index]: !prevState[index],
    }));
  };

  const cardWidth = numCards <= 2 ? '40%' : 'calc(70% - 5px)'; // Adjust width based on the number of cards


  const handleAssignRider = (index) => {
    // Logic to assign rider to the card with the specified index
    console.log(`Assigning rider to card ${index}`);
  };

  return (
    <>
     <CardContainer>
    {data.map((item, index) => (
        <Card
          key={index}
          sx={{
            backgroundColor: '#f5f5f5',
            borderRadius: '8px',
            boxShadow: '0px 2px 4px rgba(0, 0, 0, 0.1)',
            width: cardWidth, // Dynamically set width
            height: 'min-content',
          }}
        >
          <CardHeader
            title={item.donorName}
            subheader={item.location}
          />
          <CardMedia
            component="img"
            height="194"
            image={item.image}
            alt={item.donorName}
          />
  
          <CardContent>
            <Typography variant="body2" color="text.secondary">
              {item.description}
            </Typography>
          </CardContent>
          <CardActions disableSpacing>   
          <AssignRider onClickAssign={handleAssignRider} index={index} />
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
                Expiry date: {item.expiryDate}<br/>
                Serving Size: {item.servingSize}
              </Typography>
            </CardContent>
          </Collapse>
        </Card>
      ))}
    </CardContainer>
   </>
  );
};

export default DashboardRecipient;
