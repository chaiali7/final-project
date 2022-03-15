import * as React from 'react';
import Breadcrumbs from '@mui/material/Breadcrumbs';
import Link2 from '@mui/material/Link';
import "./Breadcrumb.css";
import { Link } from "react-router-dom";

function handleClick(event) {
  event.preventDefault();
  console.info('You clicked a breadcrumb.');
}

export default function ActiveLastBreadcrumb() {
  return (
    <div class="breadcrumb1" role="presentation" onClick={handleClick}>
      <Breadcrumbs aria-label="breadcrumb">
        <Link to="/" style={{ textDecoration: 'none' }}>
          <Link2 underline="hover" color="green" href="/">
            Superfund Sites
          </Link2>
        </Link>
        <Link2
          underline="hover"
          color="text.primary"
          href="/components/breadcrumbs/"
          aria-current="page"
        >
          Sign Some Petitions!
        </Link2>
      </Breadcrumbs>
    </div>
  );
}