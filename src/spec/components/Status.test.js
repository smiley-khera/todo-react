import React from 'react'
import Status from '../../components/Status'
import Enzyme, { shallow } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'

Enzyme.configure({ adapter: new Adapter() });

function setup() {
    const props = {
        children: "Pending"
    };
    const enzymeWrapper = shallow(<Status {...props} />);
    return {
        props,
        enzymeWrapper
    }
}

describe('<Status/>', () => {
    it('should render correct status', () => {
        const { enzymeWrapper } = setup();
        expect(enzymeWrapper.find('div').hasClass('statusLabel')).toBe(true);
        expect(enzymeWrapper.props().children).toBe("Pending")
    })
});
