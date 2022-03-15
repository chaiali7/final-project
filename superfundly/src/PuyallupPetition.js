import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';


//creates a media image card for different petitions.
//Main change is the "learn more" button becomes "sign here"
export default function ImgMediaCard() {
  return (
    <Card sx={{ maxWidth: 750 }}>
      <CardMedia
        component="img"
        alt="Puyallup water protector, Dakota Case, wearing traditional cedar hat"
        height="180"
        src= "https://assets.change.org/photos/2/el/ag/pZeLagdLleBAygF-800x450-noPad.jpg?1613434369"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
        Stand with the Puyallup Tribe - No LNG Fracked Gas in the Salish Sea!
        </Typography>
        <Typography variant="body2" color="text.secondary">
          "Dakota Case is a young father, a grandson and a fisherman in the Puyallup Tribe of Washington State. His family and many of our families have been living off the salmon in the Puget Sound for centuries, but our home – and our planet – is now at risk because of a proposed 8 million gallon liquefied fracked gas (LNG) facility."
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Favorite</Button>
        <Button size="small"><a target="_blank" href="https://secure.everyaction.com/_R8pWZRulEK8dtb9UrNW2w2?fbclid=IwAR3qSWLvGbfyDDxbbEows2R_rzVXF-58keCSztGrLUSw73z54BpXgtc_CmM" text-decoration="none">Sign Here</a></Button>
      </CardActions>
    </Card>
  );
}