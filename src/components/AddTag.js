import Paper from "@material-ui/core/Paper";
import React, { Component } from 'react';
import TextField from 'material-ui/TextField';

class AddTag extends Component {
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
    handleSubmit = (value) => {
        console.log(value);
        console.log(this.props);
        return (this.props.onSubmit(value));
    };

    render() {
        return (
                <TextField
                    hintText="Add Tag"
                    floatingLabelText="Add Tag"
                    value={this.state.text}
                    onChange={this.onChange}
                    onKeyDown={this.onKeyDown}
                    style={styles.textField}
                    id="outlined-basic"
                    label="Outlined"
                    variant="outlined"
                />

        );
    }
}

const styles = {
    textField: {
        width: '100%',
        fontSize: 16,
        margin: '15px'
    }
};

export default AddTag;