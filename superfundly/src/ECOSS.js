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
        src= "https://ecoss.org/wp-content/uploads/2018/10/cropped-TNC_CoLamYouthEvent_HannahLetinich0021.jpg"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
        Environmental Coalition of South Seattle (ECOSS)
        </Typography>
        <Typography variant="body2" color="text.secondary">
          "Environmental Coalition of South Seattle (ECOSS) aims to clean up the superfund site in the Duwamish River.
          Their goal is to elevate the voice of those impacted by the Duwamish River pollution and other environmental injustices for a clean, healthy, equitable environment for people and wildlife."
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Favorite</Button>
        <Button size="small"><a target="_blank" href="https://ecoss.org/events/">Learn More</a></Button>
      </CardActions>
    </Card>
  );
}