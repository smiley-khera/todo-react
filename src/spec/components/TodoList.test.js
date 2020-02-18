import React from 'react'
import TodoList from '../../components/TodoList'
import Enzyme, {mount} from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import TODO_ITEMS_LIST from '../fixture/todoItems/LIST.json'
import {Paper} from "@material-ui/core";
import {BrowserRouter} from "react-router-dom";

Enzyme.configure({adapter: new Adapter()});

function setup() {
    const props = {
        todoItems: TODO_ITEMS_LIST,
        removeTagOfTodoItem: jest.fn(),
        deleteTodoRequest: jest.fn(),
        canManage: true,
        restoreTodoItemRequest: jest.fn()
    };
    const enzymeWrapper = mount(<BrowserRouter>
                                     <TodoList {...props} />
                                </BrowserRouter>);
    return {
        props,
        enzymeWrapper
    }
}

describe('<TodoList/>', () => {
    it('should receive all props', () => {
        const {enzymeWrapper} = setup();
        const props = enzymeWrapper.props().children.props;

        expect(props.removeTagOfTodoItem).toBeDefined();
        expect(props.deleteTodoRequest).toBeDefined();
        expect(props.todoItems).toEqual(TODO_ITEMS_LIST);
        expect(props.canManage).toEqual(true);
        expect(props.restoreTodoItemRequest).toBeDefined();
    });

    it('should render exact number of todo items', () => {
        const {enzymeWrapper} = setup();
        expect(enzymeWrapper.find(Paper).length).toEqual(2)
    });

});
