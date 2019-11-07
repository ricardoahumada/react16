import React from 'react';
import ReactDOM from 'react-dom';
import User from '../../components/User';
import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { shallow, mount, render } from 'enzyme';

configure({ adapter: new Adapter() });

it('Correct user shown', () => {
    const user = { id: 1, name: 'ricardo', email: 'r@r.com' };
    const doneChange = jest.fn();
    const wrapper = render(
        <User {...user} />
    );

    const found = wrapper.find('.id');

    expect(found.text()).toBe('1');

});