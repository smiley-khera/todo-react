import React from 'react';
import {withStyles} from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Collapse from '@material-ui/core/Collapse';
import {connect} from 'react-redux';
import {setVisibilityFilter, toggleNestedMenuItems, fetchTags} from '../actions/menu'
import InboxIcon from "@material-ui/icons/MoveToInbox";
import LocalOfferRoundedIcon from '@material-ui/icons/LocalOfferRounded';
import ExpandLess from "@material-ui/icons/ExpandLess";
import ExpandMore from "@material-ui/icons/ExpandMore";
import TagLink from "./TagLink";
import AddTag from "../containers/AddTag";

const styles = (theme => ({
    root: {
        width: '100%',
        maxWidth: 360,
        backgroundColor: theme.palette.background.paper
    },
}));


class MenuBar extends React.Component {
    componentDidMount() {
        this.props.fetchTags();
        this.props.setVisibilityFilter({name: 'Inbox', id: null})
    }

    showCollapsibleItems = items =>
        (items.map(item =>
            (item.open)).includes(true));

    handleClick = item => this.props.toggleNestedMenuItems(item.name);

    render() {
        const {classes, menuItems, setVisibilityFilter} = this.props;
        return (

            <List
                component="nav"
                aria-labelledby="nested-list-subheader"
                className={classes.root}
            >
                {menuItems.map((item, index) => (
                    item.multiple ?
                        (
                            <div>
                                <ListItem key={index} button onClick={() => this.handleClick(item)}>
                                    <ListItemIcon>
                                        {item.name === 'Inbox' ? <InboxIcon/> : <LocalOfferRoundedIcon/>}
                                    </ListItemIcon>
                                    <ListItemText primary={item.name}/>
                                    {item.open ? <ExpandMore/> : <ExpandLess/>}
                                </ListItem>
                                <Collapse in={this.showCollapsibleItems(menuItems)} timeout="auto" unmountOnExit>
                                    <TagLink/>
                                    <AddTag/>
                                </Collapse>
                            </div>
                        )
                        :
                        (<ListItem key={index} button
                                   onClick={() => setVisibilityFilter({name: item.name, id: null})}>
                            <ListItemIcon>
                                <InboxIcon/>
                            </ListItemIcon>
                            <ListItemText primary={item.name}/>
                        </ListItem>)
                ))}
            </List>
        )
    }
}

const mapStateToProps = state => ({
    visibilityFilter: state.visibilityFilter,
    menuItems: state.menuItems
});
const mapDispatchToProps = dispatch => ({
    setVisibilityFilter: item => dispatch(setVisibilityFilter(item)),
    toggleNestedMenuItems: item => dispatch(toggleNestedMenuItems(item)),
    fetchTags: () => dispatch(fetchTags())
});

const styledComponent = withStyles(styles)(MenuBar);

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(styledComponent)