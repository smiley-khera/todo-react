import React from 'react'
import AddTag from '../../components/AddTag'
import Enzyme, {shallow} from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";

Enzyme.configure({adapter: new Adapter()});

function setup() {
    const props = {
        onSubmit: jest.fn()
    };
    const enzymeWrapper = shallow(<MuiThemeProvider>
                                         <AddTag {...props}/>
                                  </MuiThemeProvider>);
    return {
        props,
        enzymeWrapper
    }
}

describe('<AddTag/>', () => {
    it('should receive onSubmit props', () => {
        const {enzymeWrapper} = setup();
        expect(enzymeWrapper.props().onSubmit).toBeDefined()
    })
});
