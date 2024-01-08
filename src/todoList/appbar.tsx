import React from 'react';
import {AppBar, Button, IconButton, Toolbar, Typography} from "@mui/material";
import {Menu} from "@mui/icons-material";

export const Appbar = () => {
    return (
        <AppBar position="static">
            <Toolbar variant="dense">
                <IconButton edge="start" color="inherit" aria-label="menu" >
                    <Menu/>
                </IconButton>
                <Typography variant="h6" >
                    Todolist
                </Typography>
                <Button color="inherit"> Login </Button>
            </Toolbar>
        </AppBar>
    );
};

