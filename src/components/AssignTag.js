import TextField from '@material-ui/core/TextField';
import Autocomplete from '@material-ui/lab/Autocomplete';
import React from "react";
import {connect} from "react-redux";
import {assignTagRequest} from "../actions/todoItems";

class AssignTag extends React.Component {
    render() {
        const {options, todoId, assignTag} = this.props;
        return (<Autocomplete
            id={todoId}
            onChange={(event, option) => (
                 assignTag(todoId, option.id)
                )}
            options={options}
            getOptionLabel={option => option.name}
            style={{width: 200, display: 'inline-block', minHeight: '20px', background: 'aliceblue', position: 'relative', top: '-15px'}}
            renderInput={params => (
                <TextField {...params} label="Assign Tag" variant="outlined" fullWidth/>
            )}
        />)
    }
}

const formattedOptions = (tags) => (
    tags.map(item => ({id: item.tag.id.$oid, name: item.tag.name}))
);

const mapStateToProps = state => ({
    options: formattedOptions(state.tags)
});

const mapDispatchToProps = dispatch =>({
    assignTag: (todo,tag) => dispatch(assignTagRequest(todo, tag))
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(AssignTag)

