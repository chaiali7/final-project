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
          src= "https://images.unsplash.com/photo-1575320181282-9afab399332c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8c2VuYXRvcnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=600&q=60"
          alt="multi-colored hands"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            Contact a Politician. 
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Select this option if you wish to contact a representative, senator, or council member to take actionable steps for cleanup. 
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}