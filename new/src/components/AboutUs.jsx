import React from 'react';
import { styled } from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import Collapse from '@mui/material/Collapse';
import './Dashboard.css';
import fatima from './images/aboutus/fatima.jpg';
import hira from './images/aboutus/hira.jpg';

const CardContainer = styled('div')({
  display: 'grid',
  gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
  gap: '20px',
  maxWidth: '1200px',
  margin: '0 auto',
});

const names = ['Hira Sajid','Sadia Masood', 'Fatima Nisar'];
const imageUrls = [hira, 'https://source.unsplash.com/random/3',fatima];
const descriptions = ['Looks like a cinnamon roll, is actually a cinnamon roll.','Looks like she could kill you, is actually a cinnamon roll.', 'Looks like she could kill you, could actually kill you'];

const ThreeCardPage = () => {
  const [expanded] = React.useState([true, true, true]);

  return (
    <div>
      <div className="cards">
        <CardContainer style={{textAlign: 'center'}}>
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
              <Collapse in={expanded[index]} timeout="auto" unmountOnExit>
                <CardContent>
                  {/*  <Typography paragraph>Details:</Typography> */}
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
