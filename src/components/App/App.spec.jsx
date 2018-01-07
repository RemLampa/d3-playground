import React from 'react';

import App from './App';

describe('<App/>', function () {
    beforeEach(function () {
        this.wrapper = shallow(<App />);
    });

    it('should be a div', function () {
        expect(this.wrapper).to.have.type('div');
    });

    it('should have proper text', function () {
        const expectedText = 'Hello World';

        expect(this.wrapper).to.have.text(expectedText);
    });
});
