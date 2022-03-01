import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';

export default function ActionAreaCard() {
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="140"
          src= "https://media.istockphoto.com/photos/signature-picture-id181884392?b=1&k=20&m=181884392&s=170667a&w=0&h=r1OnONVEc0e9tAPUbRysIJJWKuQb_wTA_KW1cYKgjm0="
          alt="multi-colored hands"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            Sign a Petition
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Select this option if you wish to sign petitions related to environmental cleanup. There are multiple petition opportunities to explore.
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}