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
import './Dashboard.css'

const CardContainer = styled('div')({
  display: 'grid',
  gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
  gap: '20px',
  maxWidth: '1200px',
  margin: '0 auto',
});

const names = ['Hira Sajid', 'Fatima Nisar', 'Sadia Masood'];
const imageUrls = ['https://source.unsplash.com/random/1', 'https://source.unsplash.com/random/2', 'https://source.unsplash.com/random/3'];
const descriptions = ['Looks like a cinnamon roll.Is a cinnamon roll.', 'Looks like could kill you.Could kill you', 'Looks like she could kill you but is a cinnamon roll.'];

const ThreeCardPage = () => {
  const [expanded, setExpanded] = React.useState([false, false, false]);

  const handleExpandClick = (index) => {
    const newExpanded = [...expanded];
    newExpanded[index] = !newExpanded[index];
    setExpanded(newExpanded);
  };

  return (
    <div>
      <div className="cards">
        <CardContainer>
          {[0, 1, 2].map((index) => (
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
                title={names[index]}
              />
              <CardMedia
                component="img"
                height="194"
                image={imageUrls[index]}
                alt={`Image ${index + 1}`}
              />
              <CardContent>
                <Typography variant="body2" color="text.secondary">
                  {descriptions[index]}
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
                  <Typography paragraph>
                    {`Additional details for ${names[index]}`}
                  </Typography>
                </CardContent>
              </Collapse>
            </Card>
          ))}
        </CardContainer>
      </div>
    </div>
  );
};

export default ThreeCardPage;
