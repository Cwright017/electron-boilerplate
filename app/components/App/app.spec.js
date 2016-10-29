import React from 'react';
import { mount, shallow } from 'enzyme';
import App from './App.jsx';

const props = {
    todos: [ 'One' ]
}

it('Should render Hello World', () => {
    const wrapper = shallow(<App {...props} />);

    expect(wrapper.find('.title').text().trim()).toEqual('Hello World');
    expect(wrapper.find('.App__todo').length).toBe(1);
    expect(wrapper.find('.App__todo').first().text().trim()).toEqual(props.todos[0]);
})
