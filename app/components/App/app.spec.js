import test from 'ava';
import React from 'react';
import { mount, shallow } from 'enzyme';
import App from './App.jsx';

const props = {
    todos: [ 'One' ]
}

test('Should render Hello World', t => {
    const wrapper = shallow(<App {...props} />);

    t.is(wrapper.find('h1').text().trim(), 'Hello World');
    t.is(wrapper.find('span').length, 1);
    t.is(wrapper.find('span').first().text().trim(), props.todos[0])
})
