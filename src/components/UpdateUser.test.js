import React from 'react';
import { render, fireEvent, waitFor } from '@testing-library/react';
import UpdateUser from '../components/UpdateUser';

const onUpdate = jest.fn();
const user = {
	dob: '07/23/2020',
	email: 'john.doe@gmail.com',
	firstName: 'John',
	id: 1,
	lastName: 'Doe'
};

describe('UpdateUser', () => {
	it('renders update user button', () => {
		render(<UpdateUser user={user} onUpdate={onUpdate} />);
		const updateUserButton = document.querySelector('#update-user-button');
		expect(updateUserButton).toBeTruthy();
	});

	it('display update user modal upon clicking the update user button', () => {
		render(<UpdateUser user={user} onUpdate={onUpdate} />);
		const updateUserButton = document.querySelector('#update-user-button');
		fireEvent.click(updateUserButton);
		const updateUserHeader = document.querySelector('#update-user-header');
		expect(updateUserHeader).toBeTruthy();
	});

	it('hide update user modal upon clicking the close button', async () => {
		render(<UpdateUser user={user} onUpdate={onUpdate} />);
		const updateUserButton = document.querySelector('#update-user-button');
		fireEvent.click(updateUserButton);
		const updateUserHeader = document.querySelector('#update-user-header');
		expect(updateUserHeader).toBeTruthy();
		const updateUserModalCloseBtn = document.querySelector('#update-user-close-btn');
		expect(updateUserModalCloseBtn).toBeTruthy();
		fireEvent.click(updateUserModalCloseBtn);
		const checkUpdateUserHeader = document.querySelector('#update-user-header');
		expect(checkUpdateUserHeader).toBeFalsy();
	});
});

describe('UpdateUser Inputs', () => {
	it('firstname input on change is working', () => {
		render(<UpdateUser user={user} onUpdate={onUpdate} />);
		const updateUserButton = document.querySelector('#update-user-button');
		fireEvent.click(updateUserButton);
		const updateUserHeader = document.querySelector('#update-user-header');
		expect(updateUserHeader).toBeTruthy();
		const updateUserFormInputFirstName = document.querySelector('#update-user-form-input-firstName');
		expect(updateUserFormInputFirstName).toBeInTheDocument();
		fireEvent.change(updateUserFormInputFirstName, { target: { value: 'Michael' } });
		expect(updateUserFormInputFirstName.value).toBe('Michael');
		fireEvent.change(updateUserFormInputFirstName, { target: { value: 'Michael1' } });
		expect(updateUserFormInputFirstName.value).not.toBe('Michael');
	});

	it('invalid input on firstname should display error msg', async () => {
		const { getByTitle } = render(<UpdateUser user={user} onUpdate={onUpdate} />);
		const updateUserButton = document.querySelector('#update-user-button');
		fireEvent.click(updateUserButton);
		const updateUserHeader = document.querySelector('#update-user-header');
		expect(updateUserHeader).toBeTruthy();
		const updateUserFormInputFirstName = document.querySelector('#update-user-form-input-firstName');
		expect(updateUserFormInputFirstName).toBeInTheDocument();
		fireEvent.change(updateUserFormInputFirstName, { target: { value: '' } });
		expect(updateUserFormInputFirstName.value).toBe('');
		const updateUserSubmitBtn = getByTitle('styled-button');
		expect(updateUserSubmitBtn).toBeTruthy();
		fireEvent.click(updateUserSubmitBtn);
		const updateUserFormInputFirstNameErrorMsg = document.querySelector('#update-user-form-input-firstName-error-msg');
		await waitFor(() => expect(updateUserFormInputFirstNameErrorMsg).toHaveTextContent('Firstname is required'));
	});

	it('lastname input on change is working', () => {
		render(<UpdateUser user={user} onUpdate={onUpdate} />);
		const updateUserButton = document.querySelector('#update-user-button');
		fireEvent.click(updateUserButton);
		const updateUserHeader = document.querySelector('#update-user-header');
		expect(updateUserHeader).toBeTruthy();
		const updateUserFormInputFirstName = document.querySelector('#update-user-form-input-lastName');
		expect(updateUserFormInputFirstName).toBeInTheDocument();
		fireEvent.change(updateUserFormInputFirstName, { target: { value: 'Quimson' } });
		expect(updateUserFormInputFirstName.value).toBe('Quimson');
		fireEvent.change(updateUserFormInputFirstName, { target: { value: 'Quimson1' } });
		expect(updateUserFormInputFirstName.value).not.toBe('Quimson');
	});

	it('invalid input on lastname should display error msg', async () => {
		const { getByTitle } = render(<UpdateUser user={user} onUpdate={onUpdate} />);
		const updateUserButton = document.querySelector('#update-user-button');
		fireEvent.click(updateUserButton);
		const updateUserHeader = document.querySelector('#update-user-header');
		expect(updateUserHeader).toBeTruthy();
		const updateUserFormInputLastName = document.querySelector('#update-user-form-input-lastName');
		expect(updateUserFormInputLastName).toBeInTheDocument();
		fireEvent.change(updateUserFormInputLastName, { target: { value: '' } });
		expect(updateUserFormInputLastName.value).toBe('');
		const updateUserSubmitBtn = getByTitle('styled-button');
		expect(updateUserSubmitBtn).toBeTruthy();
		fireEvent.click(updateUserSubmitBtn);
		const updateUserFormInputLastNameErrorMsg = document.querySelector('#update-user-form-input-lastName-error-msg');
		await waitFor(() => expect(updateUserFormInputLastNameErrorMsg).toHaveTextContent('Lastname is required'));
	});

	it('email input on change is working', () => {
		render(<UpdateUser user={user} onUpdate={onUpdate} />);
		const updateUserButton = document.querySelector('#update-user-button');
		fireEvent.click(updateUserButton);
		const updateUserHeader = document.querySelector('#update-user-header');
		expect(updateUserHeader).toBeTruthy();
		const updateUserFormInputFirstName = document.querySelector('#update-user-form-input-email');
		expect(updateUserFormInputFirstName).toBeInTheDocument();
		fireEvent.change(updateUserFormInputFirstName, { target: { value: 'michael@asda.com' } });
		expect(updateUserFormInputFirstName.value).toBe('michael@asda.com');
		fireEvent.change(updateUserFormInputFirstName, { target: { value: 'michael@asda.com1' } });
		expect(updateUserFormInputFirstName.value).not.toBe('michael@asda.com');
	});

	it('invalid input on email should display error msg', async () => {
		const { getByTitle } = render(<UpdateUser user={user} onUpdate={onUpdate} />);
		const updateUserButton = document.querySelector('#update-user-button');
		fireEvent.click(updateUserButton);
		const updateUserHeader = document.querySelector('#update-user-header');
		expect(updateUserHeader).toBeTruthy();
		const updateUserFormInputLastName = document.querySelector('#update-user-form-input-email');
		expect(updateUserFormInputLastName).toBeInTheDocument();
		fireEvent.change(updateUserFormInputLastName, { target: { value: '' } });
		expect(updateUserFormInputLastName.value).toBe('');
		const updateUserSubmitBtn = getByTitle('styled-button');
		expect(updateUserSubmitBtn).toBeTruthy();
		fireEvent.click(updateUserSubmitBtn);
		const updateUserFormInputLastNameErrorMsg = document.querySelector('#update-user-form-input-email-error-msg');
		await waitFor(() => expect(updateUserFormInputLastNameErrorMsg).toHaveTextContent('Email is required'));
		fireEvent.change(updateUserFormInputLastName, { target: { value: '123' } });
		expect(updateUserFormInputLastName.value).toBe('123');
		expect(updateUserSubmitBtn).toBeTruthy();
		fireEvent.click(updateUserSubmitBtn);
		await waitFor(() => expect(updateUserFormInputLastNameErrorMsg).toHaveTextContent('Invalid email'));
		fireEvent.change(updateUserFormInputLastName, { target: { value: 'michael@asd.com' } });
		expect(updateUserFormInputLastName.value).toBe('michael@asd.com');
		expect(updateUserSubmitBtn).toBeTruthy();
		fireEvent.click(updateUserSubmitBtn);
		const checkUpdateUserFormInputLastNameErrorMsg = document.querySelector('#update-user-form-input-email-error-msg');
		await waitFor(() => expect(checkUpdateUserFormInputLastNameErrorMsg).toBeFalsy());
	});

	it('dob input on change is working', async () => {
		const { getByTitle } = render(<UpdateUser user={user} onUpdate={onUpdate} />);
		const updateUserButton = document.querySelector('#update-user-button');
		fireEvent.click(updateUserButton);
		const updateUserHeader = document.querySelector('#update-user-header');
		expect(updateUserHeader).toBeTruthy();
		const updateUserFormInputDob = document.querySelector('#update-user-form-input-dob');
		expect(updateUserFormInputDob).toBeInTheDocument();
		fireEvent.change(updateUserFormInputDob, { target: { value: '01/02/2021' } });
		expect(updateUserFormInputDob.value).toBe('01/02/2021');
		const updateUserSubmitBtn = getByTitle('styled-button');
		expect(updateUserSubmitBtn).toBeTruthy();
		fireEvent.click(updateUserSubmitBtn);
	});

	it('invalid input on dob should display error msg', async () => {
		const { getByTitle } = render(<UpdateUser user={user} onUpdate={onUpdate} />);
		const updateUserButton = document.querySelector('#update-user-button');
		fireEvent.click(updateUserButton);
		const updateUserHeader = document.querySelector('#update-user-header');
		expect(updateUserHeader).toBeTruthy();
		const updateUserFormInputDob = document.querySelector('#update-user-form-input-dob');
		expect(updateUserFormInputDob).toBeInTheDocument();
		fireEvent.change(updateUserFormInputDob, { target: { value: '' } });
		expect(updateUserFormInputDob.value).toBe('');
		const updateUserSubmitBtn = getByTitle('styled-button');
		expect(updateUserSubmitBtn).toBeTruthy();
		fireEvent.click(updateUserSubmitBtn);
		const updateUserFormInputLastNameErrorMsg = document.querySelector('#update-user-form-input-dob-error-msg');
		await waitFor(() => expect(updateUserFormInputLastNameErrorMsg).toHaveTextContent('Date of birth is required'));
	});
});