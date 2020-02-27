import React from 'react';
import TextField from '@material-ui/core/TextField';
import Paper from "@material-ui/core/Paper";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import FormControl from "@material-ui/core/FormControl";
import InputLabel from "@material-ui/core/InputLabel";
import Select from "@material-ui/core/Select";
import MenuItem from "@material-ui/core/MenuItem";
import Input from "@material-ui/core/Input";
import ListItemText from "@material-ui/core/ListItemText";
import Checkbox from "@material-ui/core/Checkbox";
import {connect} from "react-redux";
import {fetchTags} from "../actions/menu";
import {updateTodoRequest} from "../actions/todoItems";

class EditTodoItem extends React.Component {
    componentDidMount() {
        this.props.fetchTags();
    }

    constructor(props) {
        super();
        const {location: {state: {todo_item: {title, description, status, tag_ids}}}} = props;

        this.state = {
            title,
            description,
            status,
            tag_ids
        }
    }

    handleTitle = event => {
        this.setState({title: event.target.value})
    };
    handleDescription = event => {
        this.setState({description: event.target.value})
    };
    handleSelectChange = event => {
        this.setState({tag_ids: event.target.value})
    };
    handleStatus = event => {
        this.setState({status: event.target.value})
    };
    handleSubmit = () => {
        const {updateTodo, location: {state: {todo_item: {id}}}} = this.props;
        updateTodo(id, {
                todo_item:
                this.state
            }
        );
        this.redirectToBack();
    };
    redirectToBack = () => (
        this.props.history.push(`/`)
    );

    render() {
        const {tags} = this.props;

        return (
            <div style={{margin: '90px auto', width: '720px'}}>
                <AppBar position="fixed">
                    <Toolbar>
                        <Typography variant="h6" noWrap>
                            TODO
                        </Typography>
                    </Toolbar>
                </AppBar>
                <h1 style={{textAlign: "center"}}>Edit Todo</h1>
                <Paper elevation={8}
                       style={{background: 'aliceblue', marginTop: '50px', width: '720px', padding: '40px'}}>
                    <form
                        noValidate
                        autoComplete="off"
                        style={{lineHeight: '80px'}}
                    >

                        <TextField
                            id="title"
                            label="Title*"
                            color="secondary"
                            defaultValue={this.state.title}
                            fullWidth
                            onChange={this.handleTitle}/>

                        <br/>

                        <TextField
                            id="title"
                            label="Description*"
                            color="secondary"
                            defaultValue={this.state.description}
                            fullWidth
                            onChange={this.handleDescription}/>

                        <br/>
                        <FormControl fullWidth>
                            <InputLabel id="demo-simple-select-label">Status</InputLabel>
                            <Select
                                labelId="demo-simple-select-label"
                                id="demo-simple-select"
                                value={this.state.status}
                                onChange={this.handleStatus}
                            >
                                <MenuItem value={'Pending'}>Pending</MenuItem>
                                <MenuItem value={'Started'}>Started</MenuItem>
                                <MenuItem value={'Finished'}>Finished</MenuItem>
                            </Select>
                        </FormControl>

                        <FormControl fullWidth>
                            <InputLabel id="demo-mutiple-checkbox-label">Tags</InputLabel>
                            <Select
                                labelId="demo-mutiple-checkbox-label"
                                id="demo-mutiple-checkbox"
                                multiple
                                value={this.state.tag_ids}
                                onChange={this.handleSelectChange}
                                input={<Input/>}
                                renderValue={selected => {
                                    return ((tags.filter(tag => selected.includes(tag.id))).map(t => t.name).join(', '))
                                }
                                }
                            >
                                {tags.map(tag => (
                                    <MenuItem key={tag.id} value={tag.id}>
                                        <Checkbox checked={
                                            this.state.tag_ids.includes(tag.id)}/>
                                        <ListItemText primary={tag.name}/>
                                    </MenuItem>
                                ))}
                            </Select>
                        </FormControl>

                        <div>
                            <Button
                                variant="contained"
                                color="secondary"
                                onClick={this.handleSubmit}
                            >
                                Back
                            </Button>

                            <Button
                                variant="contained"
                                style={{float: 'right'}}
                                onClick={this.handleSubmit}
                            >
                                Cancel
                            </Button>

                            <Button
                                variant="contained"
                                color="primary"
                                style={{float: 'right', marginRight: '10px'}}
                                onClick={this.handleSubmit}
                            >
                                Submit
                            </Button>
                        </div>
                    </form>
                </Paper>
            </div>
        )
    }
}

const mapDispatchToProps = dispatch => ({
    fetchTags: () => dispatch(fetchTags()),
    updateTodo: (todoId, todo) => {
        dispatch(updateTodoRequest(todoId, todo))
    }

});
const mapStateToProps = state => ({
    tags: state.tags.map(element => ({id: element.tag.id.$oid, name: element.tag.name}))
});
export default connect(
    mapStateToProps,
    mapDispatchToProps
)(EditTodoItem)