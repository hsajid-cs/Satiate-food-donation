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
// import modalImage from './images/modal.jpeg';
// import ListFood from './ListFood';

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

const DonorCard = () => {
  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  return (
    <CardContainer>
      {Array.from({ length: 4 }).map((_, index) => (
        <Card
          key={index}
          sx={{
            backgroundColor: '#f5f5f5',
            borderRadius: '8px',
            boxShadow: '0px 2px 4px rgba(0, 0, 0, 0.1)',
            width: '100%',
          }}
        >
       
        </Card>
      ))}
    </CardContainer>
  );
};

export default DonorCard;