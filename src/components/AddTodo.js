import AddRoundedIcon from "@material-ui/icons/AddRounded";
import Typography from "@material-ui/core/Typography";
import Paper from "@material-ui/core/Paper";
// import React from "react";

// const AddTodo = () => (
//     <Paper elevation={3} style={{padding: 20, backgroundColor: "aliceblue"}}>
//         <AddRoundedIcon color="secondary" style={{display: "inline"}}/>
//         <Typography variant={"h6"} style={{color: "#f50057", display: "inline"}}>Add Todo</Typography>
//     </Paper>
// );
//
// export default AddTodo



import React, { Component } from 'react';

import TextField from 'material-ui/TextField';

class AddTodo extends Component {
    state = {
        text: '',
    };

    onChange = e => {
        const { value: text } = e.target;

        this.setState({
            text,
        });
    };

    onKeyDown = e => {
        const { value } = e.target;

        if (e.which === 13) {
            this.handleSubmit(value);


            this.setState({
                text: '',
            });
        }
    };
    handleSubmit = (value) => (this.props.onSubmit(value));

    render() {
        return (
            <Paper elevation={3} style={{padding: 5, backgroundColor: "aliceblue"}}>
               <TextField
                hintText="What do you need to do?"
                floatingLabelText="What do you need to do?"
                value={this.state.text}
                onChange={this.onChange}
                onKeyDown={this.onKeyDown}
                style={styles.textField}
            />
            </Paper>
        );
    }
}

const styles = {
    textField: {
        width: '100%',
        fontSize: 16,
    }
};

export default AddTodo;