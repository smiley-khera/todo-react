import React from 'react'
import TagList from '../../components/TagList'
import Enzyme, {mount} from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import TAG_LIST from '../fixture/tag/LIST.json'
import {ListItem} from "@material-ui/core";

Enzyme.configure({adapter: new Adapter()});

function setup() {
    const props = {
        setVisibilityFilter: jest.fn(),
        tags: TAG_LIST
    };
    const enzymeWrapper = mount(<TagList {...props} />);
    return {
        props,
        enzymeWrapper
    }
}

describe('<TagList/>', () => {
    it('should receive all props', () => {
        const {enzymeWrapper} = setup();
        expect(enzymeWrapper.props().setVisibilityFilter).toBeDefined();
        expect(enzymeWrapper.props().tags).toEqual(TAG_LIST);
    });

    it('should render exact number of tags', () => {
        const {enzymeWrapper} = setup();
        expect(enzymeWrapper.find(ListItem).length).toEqual(6)
    })
});
