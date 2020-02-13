import React from 'react'
import CssBaseline from "@material-ui/core/CssBaseline";
import {withStyles} from '@material-ui/core/styles';
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import '../assets/stylesheets/style.css'

const drawerWidth = 240;

const styles = (theme => ({
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


class EditTodoItem extends React.Component{
    componentDidMount() {
        console.log(this.props.location)
    }

    render(){
        console.log("pro" + JSON.stringify(this.props));
        const {classes, location: {state: {todo_item: {title, description, tags}}}} = this.props;

        return(
            <div className={classes.root}>
                <CssBaseline/>
                <AppBar position="fixed" className={classes.appBar}>
                    <Toolbar>
                        <Typography variant="h6" noWrap>
                            TODO
                        </Typography>
                    </Toolbar>
                </AppBar>


                <form onSubmit={this.onFormSubmit}>
                    <label htmlFor="name">Name</label>
                    <input
                        type="text"
                        name="title"
                        id="title"
                        value={title}
                        // onChange={this.handleChange}
                    />
                    <label htmlFor="decsription">Description</label>
                    <input
                        type="text"
                        name="description"
                        id="description"
                        value={description}
                        // onChange={this.handleChange}
                    />
                    <button type="submit">
                        Submit
                    </button>
                </form>

            </div>
        )
    }
}
const styledComponent = withStyles(styles)(EditTodoItem);
export default styledComponent

// ({todo_item}) =>{
//     const classes = useStyles();
//
//     return (
//         <div className={classes.root}>
//             <CssBaseline/>
//             <AppBar position="fixed" className={classes.appBar}>
//                 <Toolbar>
//                     <Typography variant="h6" noWrap>
//                         TODO
//                     </Typography>
//                 </Toolbar>
//             </AppBar>
//
//
//
//             <form onSubmit={this.onFormSubmit}>
//             <label for="name">Name</label>
//             <input
//             type="text"
//             name="title"
//             id="title"
//             value={name}
//             // onChange={this.handleChange}
//             />
//             <label for="job">Job</label>
//             <input
//             type="text"
//             name="description"
//             id="description"
//             value={}
//             onChange={this.handleChange} />
//             <button type="submit">
//             Submit
//             </button>
//             </form>
//
//         </div>)
// };

