import Paper from "@material-ui/core/Paper";
import Chip from "./Chip";
import React from "react";
import Status from "./Status";
import DeleteIcon from '@material-ui/icons/Delete';
import RestoreIcon from '@material-ui/icons/Restore';
import IconButton from '@material-ui/core/IconButton';
import '../assets/stylesheets/todos.css'
import {Link} from 'react-router-dom'
import Button from '@material-ui/core/Button';

const TodoList = (
    {
        todoItems,
        removeTagOfTodoItem,
        deleteTodoRequest,
        canManage,
        restoreTodoItemRequest
    }) =>
    (todoItems.map(element => (
        <Paper
            elevation={8}
            style={{padding: 20, marginTop: 10, height: '88px'}}
            key={element.todo_item.id.$oid}
        >
            <div style={{display: 'inline-block', width: '65%'}}>
                {element.todo_item.title}
                <Chip
                    items={element.todo_item.tags}
                    onDelete={removeTagOfTodoItem}
                    todoId={element.todo_item.id.$oid}
                    canDelete={canManage}
                />
            </div>
            <div style={{display: 'inline-block', width: '30%'}}>
                <Status>
                    {element.todo_item.status}
                </Status>
                <Link to={{
                    pathname: `/todo_items/${element.todo_item.id.$oid}/edit`, state: {
                        todo_item: {
                            id: element.todo_item.id.$oid,
                            title: element.todo_item.title,
                            description: element.todo_item.description,
                            status: element.todo_item.status,
                            tag_ids: element.todo_item.tags.map(tag => (tag.id)),

                        }
                    }
                }}>
                    <Button
                        variant="contained"
                    >
                        Edit
                    </Button>
                </Link>
            </div>
            <div>
                <IconButton
                    className="deleteButton"
                    style={{position: 'relative', left: '-111px', top: '-6px'}}
                    onClick={() =>
                        canManage ?
                            deleteTodoRequest(element.todo_item.id.$oid)
                            :
                            restoreTodoItemRequest(element.todo_item.id.$oid)}>
                    {canManage ? <DeleteIcon/> : <RestoreIcon/>}
                </IconButton>
            </div>
        </Paper>
    )));
export default TodoList