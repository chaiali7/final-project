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
        alt="Seattle mayor, Bruce Harrell smiling in a professional headshot"
        height="200"
        src= "https://www.seattle.gov/images/MayorHarrell/bruce-harrell-banner2.jpg"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
        Seattle Mayor Bruce Harrell
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Bruce Harrell is the mayor of Seattle. Environmental concerns can be directly adressed to his office.
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Favorite</Button>
        <Button size="small"><a target="_blank" href="https://web6.seattle.gov/mo/correspondence/contact-mayor" text-decoration="none">Contact Here</a></Button>
      </CardActions>
    </Card>
  );
}