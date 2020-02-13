import {connect} from 'react-redux'
import TodoList from '../components/TodoList'
import {removeTagOfTodoItem, deleteTodoRequest, restoreTodoItemRequest} from "../actions/todoItems";

const canManage = (filter) =>(
    !filter.name.includes("Archived")
);
const mapStateToProps = state => ({
    todoItems: state.todoItems,
    canManage: canManage(state.visibilityFilter)
});
const mapDispatchToProps = dispatch => ({
    removeTagOfTodoItem: (item,tag) => dispatch(removeTagOfTodoItem(item,tag)),
    deleteTodoRequest: (todoId) => dispatch(deleteTodoRequest(todoId)),
    restoreTodoItemRequest: (todoId) => dispatch(restoreTodoItemRequest(todoId))
});
export default connect(
    mapStateToProps,
    mapDispatchToProps
)(TodoList)