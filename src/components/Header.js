import React from 'react';
import {AppBar, makeStyles, Toolbar, Typography} from "@material-ui/core";

const useStyle = makeStyles({
    root: {
        background: '#333333'
    }
})

const Header = () => {
    const classes = useStyle()
    return (
        <AppBar position="fixed" className={classes.root}>
            <Toolbar variant="dense">
                <Typography variant="h6" color="inherit">
                    Your Todo List...
                </Typography>
            </Toolbar>
        </AppBar>
    );
}

export default Header;