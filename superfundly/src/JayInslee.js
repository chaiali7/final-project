import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';


//creates a media image card for a politician.
//Main change is the "learn more" button becomes "contact here"
export default function ImgMediaCard() {
  return (
    <Card sx={{ maxWidth: 665 }}>
      <CardMedia
        component="img"
        alt="Washington State governor Jay Inslee smiling in a professional headshot"
        height="200"
        src= "https://scontent-sea1-1.xx.fbcdn.net/v/t39.30808-6/242751665_413820690099489_8139193456816170381_n.jpg?_nc_cat=104&ccb=1-5&_nc_sid=09cbfe&_nc_ohc=L39g9Dpiz6MAX-NRc7N&_nc_ht=scontent-sea1-1.xx&oh=00_AT9IAa2Il5PHsKxy_Wh4vcqlMlCVN4YUb48SSRaKINIEVQ&oe=6235100A"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
        Washington Governor Jay Inslee
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Jay Inslee is the governor of Washington state. Environmental concerns can be directly addressed to his office.
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Favorite</Button>
        <Button size="small"><a target="_blank" href="https://www.governor.wa.gov/contact/contact/contact-gov-inslee" text-decoration="none">Contact Here</a></Button>
      </CardActions>
    </Card>
  );
}