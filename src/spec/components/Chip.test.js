import React from 'react'
import ChipsArray from '../../components/Chip'
import Enzyme, {shallow, mount} from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import TAG_LIST from '../fixture/tag/LIST.json'
import TODO_ITEM_LIST from '../fixture/todoItems/LIST'
import Chip from "@material-ui/core/Chip";

Enzyme.configure({adapter: new Adapter()});

function setup() {
    const props = {
        items: TAG_LIST.map(item =>
            (
                {
                    key: item.tag.id.$oid,
                    name: item.tag.name
                }
            )
        ),
        onDelete: jest.fn(),
        todoId: TODO_ITEM_LIST[0].todo_item.id.$oid,
        canDelete: true
    };
    const enzymeWrapper = mount(<ChipsArray {...props} />);
    return {
        props,
        enzymeWrapper
    }
}

describe('<ChipsArray/>', () => {
    it('should receive all props', () => {
        const {enzymeWrapper} = setup();
        expect(enzymeWrapper.props().onDelete).toBeDefined();
        expect(enzymeWrapper.props().items).toEqual(TAG_LIST.map(item =>
            (
                {
                    key: item.tag.id.$oid,
                    name: item.tag.name
                }
            )
        ));
        expect(enzymeWrapper.props().todoId).toBe("1");
        expect(enzymeWrapper.props().canDelete).toBe(true);

    });

    it('should render exact number of chips', () => {
        const {enzymeWrapper} = setup();
        expect(enzymeWrapper.find(Chip).length).toEqual(6)
    })
});
