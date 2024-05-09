import * as React from 'react';
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
import modalImage from './images/modal.jpeg';
import ListFood from './ListFood';

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

export default function DonorCard() {
  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  }; 

  

  return (
    <Card sx={{ maxWidth: '600px ',
    maxHeight: '100%',
      
      backgroundColor: '#f5f5f5',
      borderRadius: '8px',
      boxShadow: '0px 2px 4px rgba(0, 0, 0, 0.1)',
      margin: '0 auto',
    }}>
      <CardHeader
        title="Username"
        subheader="Listing Date"
      />
      <CardMedia
        component="img"
        height="194"
        image={modalImage}
        alt="picture"
      />
      <CardContent>
        <Typography variant='h5'>Dishname</Typography>
        <Typography variant="body2" color="text.secondary">
          Address
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
      <ListFood/>

        {/* <IconButton aria-label="">
          <ShareIcon />
        </IconButton> */}
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
          
          <Typography paragraph>
            Serving Size
          </Typography>
          <Typography paragraph>
            Expiry Date
          </Typography>
          <Typography paragraph>
            Food Description
          </Typography>
        </CardContent>
      </Collapse>
    </Card>
  );
}