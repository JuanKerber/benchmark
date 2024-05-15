import React from 'react'
import { Link } from 'react-router-dom'


import './navbar.css'

import Box from '@mui/material/Box';
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import { HomeRounded, FavoriteRounded, AddLocationRounded } from '@mui/icons-material';

const Navbar = () => {

  const [value, setValue] = React.useState(0);
  return (
  <BottomNavigation
  sx={{
    width: "100%",
    mx: "auto"
  }}
  value={value}
  onChange={(event, newValue) => {
    setValue(newValue);
  }}
>
  <BottomNavigationAction component={Link} to="/benchmark/"  label="Home" icon={<HomeRounded />} />
  <BottomNavigationAction component={Link} to="/benchmark/add" label="Add" icon={<AddLocationRounded />} />
  <BottomNavigationAction component={Link} to="/benchmark/likes" label="Favorites" icon={<FavoriteRounded />} />
</BottomNavigation>
  )
}

export default Navbar
