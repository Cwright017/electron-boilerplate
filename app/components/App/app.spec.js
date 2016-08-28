import React from 'react';
import { mount, shallow } from 'enzyme';
import {expect} from 'chai';
import App from './App.jsx';

describe('<App />', () => {
  it('Should render Hello World', function () {
    const wrapper = shallow(<App/>);
    expect(wrapper.text().trim()).to.equal('Hello World');
  });
});
