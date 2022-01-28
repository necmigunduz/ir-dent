import React from 'react';
import { AppBar, Toolbar, Typography } from '@material-ui/core';

const AppHeader = () => {
  return (
      <AppBar position="static" >
          <Toolbar>
              <Typography variant="h6" color="inherit">
                  BookList Application
              </Typography>
          </Toolbar>
      </AppBar>
  )
};

export default AppHeader;