import { connect } from 'react-redux'
import {addTodoItemRequest} from "../actions/todoItems";
import AddTodo from '../components/AddTodo'

const structuredTodo = (item) => (
     ({todo_item: {title: `${item}`}})
);
const mapDispatchToProps = dispatch => ({
    onSubmit: item => dispatch(addTodoItemRequest(structuredTodo(item))),
});

export default connect(
    null,
    mapDispatchToProps
)(AddTodo)