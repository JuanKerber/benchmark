import React from 'react'
import { Link } from 'react-router-dom'

import './topbar.css'
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import SettingsRoundedIcon from '@mui/icons-material/SettingsRounded';

const Topbar = () => {

  return (
    <AppBar position="static">
    <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            benchmark.
          </Typography>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
            component={Link} to="/benchmark/params"
          >
            <SettingsRoundedIcon/>
          </IconButton>
        </Toolbar>
    </AppBar>
  )
}


export default Topbar
