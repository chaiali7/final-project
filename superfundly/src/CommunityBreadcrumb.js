import * as React from 'react';
import Breadcrumbs from '@mui/material/Breadcrumbs';
import Link2 from '@mui/material/Link';
import "./Breadcrumb.css";


function handleClick(event) {
  event.preventDefault();
  console.info('You clicked a breadcrumb.');
}

export default function ActiveLastBreadcrumb() {
  return (
    <div class="breadcrumb1" role="presentation" onClick={handleClick}>
      <Breadcrumbs aria-label="breadcrumb">
        <Link2 underline="hover" color="inherit" href="/">
          Superfund Sites
        </Link2>
        <Link2
          underline="hover"
          color="text.primary"
          href="/components/breadcrumbs/"
          aria-current="page"
        >
          Community Related Actions
        </Link2>
      </Breadcrumbs>
    </div>
  );
}