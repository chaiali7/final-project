import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import './Card.css';
import { Link } from "react-router-dom";

export default function ActionAreaCard() {
  return (
    <Link  to="/CommunityPage" style={{ textDecoration: 'none' }}>
      <Card sx={{ maxWidth: 345 }}>
        <CardActionArea>
          <CardMedia
            component="img"
            height="140"
            src= "https://images.unsplash.com/photo-1569437061238-3cf61084f487?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80"
            alt="multi-colored hands"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              Community Advocacy
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Select this option if you wish to volunteer with your community. There are multiple community engagement opportunities to explore.
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>
  </Link>
  );
}