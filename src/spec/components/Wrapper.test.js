import React from 'react'
import Wrapper from '../../components/Wrapper'
import Enzyme, {shallow} from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import {AppBar} from "@material-ui/core";
import MenuBar from "../../containers/MenuBar";
import Dashboard from "../../components/Dashboard";

Enzyme.configure({adapter: new Adapter()});

function setup() {
    const enzymeWrapper = shallow(<Wrapper/>);
    return {
       enzymeWrapperl
    }
}

describe('<Wrapper/>', () => {
    it('should have App bar', () => {
        const {enzymeWrapper} = setup();
        expect(enzymeWrapper.find(AppBar).length).toEqual(1)
    });

    it('should have Menu bar', () => {
        const {enzymeWrapper} = setup();
        expect(enzymeWrapper.find(MenuBar).length).toEqual(1)
    });

    it('should have Dashboard', () => {
        const {enzymeWrapper} = setup();
        expect(enzymeWrapper.find(Dashboard).length).toEqual(1)
    });

});
