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
        alt="Polluted Duwamish River with grey skies and gray waters"
        height="180"
        src= "https://assets.change.org/photos/6/uf/rr/uYufRRavynMUWpL-800x450-noPad.jpg?1628789055"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
        Environmental Coalition of South Seattle (ECOSS)
        </Typography>
        <Typography variant="body2" color="text.secondary">
          "Duwamish River Cleanup Coalition started this petition to Enviromental Protection Agency. We want to express our grave concerns for the health of the Duwamish Valley communities as a result of proposed changes to how EPA and members of the Lower Duwamish Waterway Group  intend to clean up our Duwamish River."
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Favorite</Button>
        <Button size="small"><a target="_blank" href="https://www.change.org/p/seattle-s-duwamish-river-cleanup-is-under-triple-threat" text-decoration="none">Sign Here</a></Button>
      </CardActions>
    </Card>
  );
}