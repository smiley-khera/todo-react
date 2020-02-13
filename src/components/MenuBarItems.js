import React from 'react';
import {makeStyles} from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Collapse from '@material-ui/core/Collapse';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import LocalOfferRoundedIcon from '@material-ui/icons/LocalOfferRounded';
import ExpandLess from '@material-ui/icons/ExpandLess';
import ExpandMore from '@material-ui/icons/ExpandMore';
import {MenuItems} from "../constants";


const useStyles = makeStyles(theme => ({
    root: {
        width: '100%',
        maxWidth: 360,
        backgroundColor: theme.palette.background.paper
    },
    nested: {
        paddingLeft: theme.spacing(8),
    },
}));


const MenuBarItems = () => {
    const classes = useStyles();
    const [open, setOpen] = React.useState(true);

    const handleClick = (multipleItems) => {
        if (multipleItems == true) {
            setOpen(!open)
        }

    };
    return (
        MenuItems.map((item) => (
            <ListItem key={item.name} button onClick={() => handleClick(item.multiple)}>
                <ListItemIcon>
                    <InboxIcon/>
                </ListItemIcon>
                <ListItemText primary={item.name}/>
                {item.multiple ? (open ? <ExpandLess/> : <ExpandMore/>) : ''}
            </ListItem>

        ))
    );


}

export default MenuBarItems;
