import React from 'react'
import Enzyme, {shallow} from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import Dashboard from "../../components/Dashboard";
import AddTodo from "../../containers/AddTodo";
import VisibleTodoList from "../../containers/VisibleTodoList";

Enzyme.configure({adapter: new Adapter()});

function setup() {
    const enzymeWrapper = shallow(<Dashboard />);
    return {
        enzymeWrapper
    }
}

describe('<Dashboard/>', () => {
    it('should contain AddTodo and Visible todo containers', () => {
        const {enzymeWrapper} = setup();
       expect(enzymeWrapper.find(AddTodo).length).toEqual(1);
       expect(enzymeWrapper.find(VisibleTodoList).length).toEqual(1)
    })
});
