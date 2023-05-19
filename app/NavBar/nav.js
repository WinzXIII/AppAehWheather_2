import { StyleSheet, Text, View } from "react-native";

import * as React from 'react';
import AppBar from '@mui/material/AppBar';

import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';

import { MenuOutlined } from '@ant-design/icons';
import { Icon } from '@rneui/themed';

export default function Nav() {
  return (
    
      <AppBar position="static">
        <Toolbar>

          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
          <MenuOutlined />
          </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          AEH WHEATHER

          </Typography>
          <Button color="inherit" href="cc">หน้าหลัก</Button>
          <Button color="inherit">พยากรณ์อากาศ</Button>
          <Button color="inherit">ภูมิอากาศ</Button>
          <Button color="inherit" >บริการ</Button>
          <Button color="inherit" >บริการ</Button>
          <Button color="inherit">Login</Button>
        </Toolbar>
      </AppBar>
    
  );
}


