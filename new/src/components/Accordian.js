import * as React from 'react';
import { styled } from '@mui/material/styles';
import ArrowForwardIosSharpIcon from '@mui/icons-material/ArrowForwardIosSharp';
import MuiAccordion from '@mui/material/Accordion';
import MuiAccordionSummary from '@mui/material/AccordionSummary';
import MuiAccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';

const Accordion = styled((props) => (
  <MuiAccordion disableGutters elevation={0} square {...props} />
))(({ theme }) => ({
  border: `1px solid ${theme.palette.divider}`,
  '&:not(:last-child)': {
    borderBottom: 0,
  },
  '&::before': {
    display: 'none',
  },
}));

const AccordionSummary = styled((props) => (
  <MuiAccordionSummary
    expandIcon={<ArrowForwardIosSharpIcon sx={{ fontSize: '0.9rem' }} />}
    {...props}
  />
))(({ theme }) => ({
  backgroundColor:
    theme.palette.mode === 'dark'
      ? 'rgba(255, 255, 255, .05)'
      : 'rgba(0, 0, 0, .03)',
  flexDirection: 'row-reverse',
  '& .MuiAccordionSummary-expandIconWrapper.Mui-expanded': {
    transform: 'rotate(90deg)',
  },
  '& .MuiAccordionSummary-content': {
    marginLeft: theme.spacing(1),
  },
}));

const AccordionDetails = styled(MuiAccordionDetails)(({ theme }) => ({
  padding: theme.spacing(2),
  borderTop: '1px solid rgba(0, 0, 0, .125)',
}));

export default function Accordian() {
  const [expanded, setExpanded] = React.useState('panel1');

  const handleChange = (panel) => (event, newExpanded) => {
    setExpanded(newExpanded ? panel : false);
  };

  return ( //style={{borderRadius:'10px', backgroundColor:'#eff8e2'}}
    <div >
      <Accordion expanded={expanded === 'panel1'} onChange={handleChange('panel1')} >
        <AccordionSummary aria-controls="panel1d-content" id="panel1d-header">
          <Typography>Q: How does it work?</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
         
A: Our food donation app operates on a simple yet effective process. As a donor, you sign in and create listings of available donations, specifying the type and quantity of food items you're willing to donate. Once you submit your listing, notifications are sent out to individuals or organizations who have signed up as recipients. They can then review the available donations and choose what they need. If they decide to accept a donation, they can assign a rider from our network to pick it up and deliver it to their location. This streamlined process ensures that surplus food reaches those in need efficiently and effectively.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion expanded={expanded === 'panel2'} onChange={handleChange('panel2')} >
        <AccordionSummary aria-controls="panel2d-content" id="panel2d-header">
          <Typography>Q: What kind of food do we accept?</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
         A: 1. Only unused food items are eligible for donation.
          <br/>
2. Chilled foods must be kept below 41 degrees Fahrenheit.  <br/>
3. Hot foods should be maintained above 135 degrees Fahrenheit.  <br/>
4. Whole, uncut fruits and vegetables are accepted.  <br/>
5. Packaged foods must be unopened and undamaged for donation.  <br/>
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion expanded={expanded === 'panel3'} onChange={handleChange('panel3')} >
        <AccordionSummary aria-controls="panel3d-content" id="panel3d-header">
          <Typography>Q: Why does it matter?</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
          A: The platform aims to streamline food donation processes, ensuring efficient delivery to those in need. Its primary objective is to combat food waste and address insecurity by seamlessly connecting donors and recipients.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion expanded={expanded === 'panel4'} onChange={handleChange('panel4')} >
        <AccordionSummary aria-controls="panel4d-content" id="panel4d-header">
          <Typography>Q: What measures do we take for food safety?</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
           A: 
Maintaining food safety is of utmost importance to our organization. We require all participants in the food recovery process to adhere to safe food handling standards mandated by state and federal regulations, spanning from pickup to delivery and serving. Recipients of donated food are required to sign a waiver absolving donors of liability. Donors are safeguarded under the 1996 Bill Emerson Good Samaritan Food Donation Act, which shields well-intentioned donors from civil and criminal liability in the event that the donated product causes harm to recipients. 
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion expanded={expanded === 'panel5'} onChange={handleChange('panel5')} >
        <AccordionSummary aria-controls="panel5d-content" id="panel5d-header">
          <Typography>Q: What is the minimum amount of servings which can be donated? </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
          A: We typically accept food donations of 20 servings or more to accommodate the varying sizes of recipient agencies we serve. Even a single tray of pasta or sandwiches, for example, should not go to waste as it can make a significant difference to those in need.
          </Typography>
        </AccordionDetails>
      </Accordion>
    </div>
  );
}
