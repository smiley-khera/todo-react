import React, { Component } from 'react';
import TextField from 'material-ui/TextField';
import '../assets/stylesheets/tags.css'

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
        return (this.props.onSubmit(value));
    };

    render() {
        return (
                <TextField
                    className="tagField"
                    hintText="Add Tag"
                    floatingLabelText="Add Tag"
                    value={this.state.text}
                    onChange={this.onChange}
                    onKeyDown={this.onKeyDown}
                    id="outlined-basic"
                    label="Outlined"
                    variant="outlined"
                />

        );
    }
}
export default AddTag;