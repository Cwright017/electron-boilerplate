import test from 'ava';
import React from 'react';
import { mount, shallow } from 'enzyme';
import App from './App.jsx';


test('Should render Hello World', t => {
    const wrapper = shallow(<App/>);
    t.is(wrapper.text().trim(), 'Hello World');
})

// describe('<App />', () => {
//   it('Should render Hello World', function () {
//     const wrapper = shallow(<App/>);
//     expect(wrapper.text().trim()).to.equal('Hello World');
//   });
// });
