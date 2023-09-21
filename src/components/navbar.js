import React from 'react';
import { AppBar, Tabs, Toolbar, Typography,Button, Tab, FormControl, InputLabel, FormHelperText, Input, Box, IconButton, Avatar } from '@mui/material';
import ShoppingBasketIcon from '@mui/icons-material/ShoppingBasket';
import { blue } from '@mui/material/colors';
import { useState } from 'react';
import useTheme from '@mui/material/styles/useTheme';
import useMediaQuery from '@mui/material/useMediaQuery'
import Drawer from './Drawer.js'
export default function App(props) {
  console.log(props);
  const [search,setsearch]=useState('');


  const theme = useTheme();
  console.log(theme);
  const isMatch = useMediaQuery(theme.breakpoints.down("md"));
  console.log(isMatch);

  return (
    <div>
      <AppBar position="static" sx={{color:'black', background:'white'}}>
        <Toolbar>
          <Typography variant="h3">
            Arc
          </Typography>
          
          <FormControl sx={{marginLeft:'auto', display:'flex', flexDirection:'row'}}>
            <InputLabel htmlFor="my-input">Bear-name</InputLabel>
            <Input id="my-input" aria-describedby="my-helper-text" onChange={(e)=>{setsearch(e.target.value)}} />
            <Button variant="contained" onClick={()=>{
              console.log(search);
              props.func(search);}}>Search</Button>
          </FormControl>
          {
            isMatch?(<Drawer/>
         ):( <Box  sx={{marginLeft:'auto'}}>
         <IconButton>
           <ShoppingBasketIcon></ShoppingBasketIcon>
           <Avatar sx={{ bgcolor: 'blue', marginLeft:40+'px'}}>H</Avatar>
         </IconButton>
       </Box>)
}
        </Toolbar>
      </AppBar>
    </div>
  );
}
