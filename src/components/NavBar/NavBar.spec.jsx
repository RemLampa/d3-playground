import React from 'react';
import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink,
    UncontrolledDropdown,
    DropdownToggle,
    DropdownMenu,
    DropdownItem
} from 'reactstrap';

import NavBar from './NavBar';

describe('<NavBar />', function () {
    beforeEach(function () {
        this.wrapper = shallow(<NavBar />);        
    });

    it('should be a div', function () {
        expect(this.wrapper).to.have.type('div');
    });

    it('should contain a <Navbar />', function () {
        expect(this.wrapper).to.have.exactly(1).descendants(Navbar);
    });

    it('');
});
