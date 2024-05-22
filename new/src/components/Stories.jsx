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
import "./Dashboard.css";
import image from './images/image.png';// Correct path to user image
import sadPic from './images/sadPic.jpg';
import eat from './images/eat.jpg';
import VerySad from './images/VerySad.jpg';
// import storyImage2 from './images/story2.png';
// import storyImage3 from './images/story3.png';

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

const stories = [
  {
    title: "Helping the Ones in Need",
    subheader: "Syed Afaq Pathan",
    image: sadPic,
    content: "Syed Afaq Pathan has been tirelessly working to provide essential resources to those in dire need. From organizing food drives to ensuring access to clean water, his efforts have touched the lives of many. Despite facing numerous challenges, Afaq's dedication and compassion continue to inspire others in the community. His story is a testament to the power of giving and the impact one individual can make.",
  },
  {
    title: "Feeding Hungry Communities",
    subheader: "Aamna Khan Afghani",
    image: eat,
    content: "Aamna Khan Afghani has been a beacon of hope for her community, leading initiatives to combat hunger. Through her food donation drives, she has provided meals to countless families struggling with food insecurity. Aamna's efforts have not only alleviated immediate hunger but also brought the community together, fostering a spirit of solidarity and mutual support.",
  },
  {
    title: "Fighting Malnutrition",
    subheader: "No one",
    image: VerySad, 
    content: "In a remote village, malnutrition remains a critical issue. With limited access to nutritious food, many children and adults suffer from hunger and related health problems. This story highlights the urgent need for food donations and the community's struggle to secure enough food to sustain themselves. Despite the hardships, the resilience and hope of the villagers are evident as they continue to seek better solutions.",
  },
];

const DonorCard = () => {
  const [expanded, setExpanded] = React.useState({});

  const handleExpandClick = (index) => {
    setExpanded((prevState) => ({
      ...prevState,
      [index]: !prevState[index],
    }));
  };

  return (
    <>
      <div className="user-action">
        <div className='user-info'>
          <img src={image} alt="user" className='user-avatar' />
          <div className="user-name">
            <h2>Stories</h2>
          </div>
        </div>
      </div>

      <CardContainer>
        {stories.map((story, index) => (
          <Card
            key={index}
            sx={{
              backgroundColor: '#f5f5f5',
              borderRadius: '8px',
              boxShadow: '0px 2px 4px rgba(0, 0, 0, 0.1)',
              width: '100%',
              height: 'min-content',
              marginBottom: '1rem',
            }}
          >
            <CardHeader
              title={story.title}
              subheader={story.subheader}
            />
            <CardMedia
              component="img"
              height="194"
              image={story.image}
              alt={story.title}
            />
            <CardContent>
              <Typography variant="body2" color="text.secondary">
                {story.content.substring(0, 100)}...
              </Typography>
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
                  {story.content}
                </Typography>
              </CardContent>
            </Collapse>
          </Card>
        ))}
      </CardContainer>
    </>
  );
};

export default DonorCard;
