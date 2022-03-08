import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

export default function ImgMediaCard() {
  return (
    <Card sx={{ maxWidth: 750 }}>
      <CardMedia
        component="img"
        alt="six people wearing traditional central American folk fashions in front of the Duwamish River"
        height="180"
        src= "https://images.squarespace-cdn.com/content/v1/5d744c68218c867c14aa5531/1623099778121-6C18H58OIR8CF11FD4AU/beautiful+dresses.jpg?format=2500w"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          Duwamish River Community Coalition
        </Typography>
        <Typography variant="body2" color="text.secondary">
          "The Duwamish River Community Coalition aims to clean up the superfund site in the Duwamish River.
          Their goal is to elevate the voice of those impacted by the Duwamish River pollution and other environmental injustices for a clean, healthy, equitable environment for people and wildlife."
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Favorite</Button>
        <Button size="small"><a target="_blank" href="https://www.drcc.org/">Learn More</a></Button>
      </CardActions>
    </Card>
  );
}