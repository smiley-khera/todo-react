import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import React from "react";
import {makeStyles} from "@material-ui/core/styles";

const styles = makeStyles(theme => ({
    nested: {
        paddingLeft: theme.spacing(8),
    },
}));

const TagList = ({tags, setVisibilityFilter}) => {
    const classes = styles();

    return (tags.map(item =>
            (<ListItem button key={item.tag.id.$oid} className={classes.nested} onClick={() => setVisibilityFilter({id: item.tag.id.$oid, name: item.tag.name})}>
                <ListItemText primary={item.tag.name}/>
            </ListItem>)
        )
    )
};

export default TagList