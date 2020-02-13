import AddTodo from "../containers/AddTodo";
import VisibleTodoList from "../containers/VisibleTodoList";
import React from "react";
import {makeStyles} from "@material-ui/core/styles";
const drawerWidth = 240;

const useStyles = makeStyles(theme => ({
    root: {
        display: 'flex',
    },
    appBar: {
        width: `calc(100% - ${drawerWidth}px)`,
        marginLeft: drawerWidth,
    },
    drawer: {
        width: drawerWidth,
        flexShrink: 0,
    },
    drawerPaper: {
        width: drawerWidth,
    },
    toolbar: theme.mixins.toolbar,
    content: {
        flexGrow: 1,
        backgroundColor: theme.palette.background.default,
        padding: theme.spacing(3),
    },
}));

export default function Dashboard () {
    const classes = useStyles();
    return (<main className={classes.content}>
        <div className={classes.toolbar}/>
        <AddTodo/>
        <VisibleTodoList/>
    </main>)
};

// export default Dashboard