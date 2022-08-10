import React from "react";
import { Typography,Drawer, makeStyles,List,AppBar,Toolbar,ListItem,ListItemIcon,ListItemText } from "@material-ui/core";
import { AddCircleOutlineOutlined, SubjectOutlined } from "@material-ui/icons";
import { useHistory } from "react-router-dom";
import { useLocation } from "react-router-dom";
const drawerWidth = 240
const useStyles = makeStyles((theme) => ({
    page: {
        background : "#f9f9f9",
        width:"100%",
        padding : theme.spacing(3)
    },
    drawer:{
        width : drawerWidth
    },
    drawerPaper:{
        width : drawerWidth
    },
    root: {
        display : "flex"
    },
    active:{
        background:"#f4f4f4"
    },
    ninjatitle: {
        background : "#f5f5f6",
        padding : 5
    }

}))
export default function Layout({children}){
    const classes = useStyles()
    const history = useHistory()
    const location = useLocation()
    const menuItems = [
        {
            text : 'my notes',
            icon : <SubjectOutlined color="secondary" />,
            path : '/'
        },
        {
            text : 'Create Notes',
            icon : <AddCircleOutlineOutlined color="secondary" />,
            path : '/create'
        }
    ]
    return(
        <div className={classes.root}>
            <Drawer 
                className={classes.drawer}
                variant="permanent"
                anchor="left"
                classes={{paper: classes.drawerPaper}}
            >
            <div>
                <Typography className={classes.ninjatitle} variant="h5">
                   Ninja Notes 
                </Typography>
            </div>
            {/* List/ link */}
            {menuItems.map((item) =>(
                <ListItem 
                key={item.text}
                button
                onClick={()=> history.push(item.path)}    
                className={location.pathname === item.path ? classes.active : ''}
                >
                    <ListItemIcon>{item.icon}</ListItemIcon>
                    <ListItemText>{item.text}</ListItemText>
                </ListItem>
            ))}
            </Drawer>
            <div className={classes.page}>
                {children}
            </div>
            
        </div>
    )
    
}