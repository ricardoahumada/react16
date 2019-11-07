import React from 'react';
import ReactDOM from 'react-dom';
import UserForm from '../../components/UserForm';
import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { shallow, mount, render } from 'enzyme';
import { BrowserRouter as Router } from 'react-router-dom';


configure({ adapter: new Adapter() });

it('Changing input name updates state', () => {
    const newName='Ric';

    const wrapper = mount(
        <Router>
            <UserForm />
        </Router>
    );

    const inputName = wrapper.find('input');
    inputName.first().simulate('focus');
    inputName.first().simulate('change', { target: { value: newName } });

    const userForm = wrapper.find('UserForm');
    expect(userForm.state('name')).toBe(newName);

});