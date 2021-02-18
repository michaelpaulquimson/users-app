import React from 'react';
import { render, fireEvent, waitFor } from '@testing-library/react';
import CreateUser from '../components/CreateUser';

const onCreate = jest.fn();

describe('CreateUser', () => {
	it('renders create user button', () => {
		render(<CreateUser onCreate={onCreate} />);
		const createUserButton = document.querySelector('#create-user-button');
		expect(createUserButton).toBeTruthy();
	});

	it('display create user modal upon clicking the create user button', () => {
		render(<CreateUser onCreate={onCreate} />);
		const createUserButton = document.querySelector('#create-user-button');
		fireEvent.click(createUserButton);
		const createUserHeader = document.querySelector('#create-user-header');
		expect(createUserHeader).toBeTruthy();
	});

	it('hide create user modal upon clicking the close button', async () => {
		render(<CreateUser onCreate={onCreate} />);
		const createUserButton = document.querySelector('#create-user-button');
		fireEvent.click(createUserButton);
		const createUserHeader = document.querySelector('#create-user-header');
		expect(createUserHeader).toBeTruthy();
		const createUserModalCloseBtn = document.querySelector('#create-user-close-btn');
		expect(createUserModalCloseBtn).toBeTruthy();
		fireEvent.click(createUserModalCloseBtn);
		const checkCreateUserHeader = document.querySelector('#create-user-header');
		expect(checkCreateUserHeader).toBeFalsy();
	});
});

describe('CreateUser Inputs', () => {
	it('firstname input on change is working', () => {
		render(<CreateUser onCreate={onCreate} />);
		const createUserButton = document.querySelector('#create-user-button');
		fireEvent.click(createUserButton);
		const createUserHeader = document.querySelector('#create-user-header');
		expect(createUserHeader).toBeTruthy();
		const createUserFormInputFirstName = document.querySelector('#create-user-form-input-firstName');
		expect(createUserFormInputFirstName).toBeInTheDocument();
		fireEvent.change(createUserFormInputFirstName, { target: { value: 'Michael' } });
		expect(createUserFormInputFirstName.value).toBe('Michael');
		fireEvent.change(createUserFormInputFirstName, { target: { value: 'Michael1' } });
		expect(createUserFormInputFirstName.value).not.toBe('Michael');
	});

	it('invalid input on firstname should display error msg', async () => {
		const { getByTitle } = render(<CreateUser onCreate={onCreate} />);
		const createUserButton = document.querySelector('#create-user-button');
		fireEvent.click(createUserButton);
		const createUserHeader = document.querySelector('#create-user-header');
		expect(createUserHeader).toBeTruthy();
		const createUserFormInputFirstName = document.querySelector('#create-user-form-input-firstName');
		expect(createUserFormInputFirstName).toBeInTheDocument();
		fireEvent.change(createUserFormInputFirstName, { target: { value: '' } });
		expect(createUserFormInputFirstName.value).toBe('');
		const createUserSubmitBtn = getByTitle('styled-button');
		expect(createUserSubmitBtn).toBeTruthy();
		fireEvent.click(createUserSubmitBtn);
		const createUserFormInputFirstNameErrorMsg = document.querySelector('#create-user-form-input-firstName-error-msg');
		await waitFor(() => expect(createUserFormInputFirstNameErrorMsg).toHaveTextContent('Firstname is required'));
	});

	it('lastname input on change is working', () => {
		render(<CreateUser onCreate={onCreate} />);
		const createUserButton = document.querySelector('#create-user-button');
		fireEvent.click(createUserButton);
		const createUserHeader = document.querySelector('#create-user-header');
		expect(createUserHeader).toBeTruthy();
		const createUserFormInputFirstName = document.querySelector('#create-user-form-input-lastName');
		expect(createUserFormInputFirstName).toBeInTheDocument();
		fireEvent.change(createUserFormInputFirstName, { target: { value: 'Quimson' } });
		expect(createUserFormInputFirstName.value).toBe('Quimson');
		fireEvent.change(createUserFormInputFirstName, { target: { value: 'Quimson1' } });
		expect(createUserFormInputFirstName.value).not.toBe('Quimson');
	});

	it('invalid input on lastname should display error msg', async () => {
		const { getByTitle } = render(<CreateUser onCreate={onCreate} />);
		const createUserButton = document.querySelector('#create-user-button');
		fireEvent.click(createUserButton);
		const createUserHeader = document.querySelector('#create-user-header');
		expect(createUserHeader).toBeTruthy();
		const createUserFormInputLastName = document.querySelector('#create-user-form-input-lastName');
		expect(createUserFormInputLastName).toBeInTheDocument();
		fireEvent.change(createUserFormInputLastName, { target: { value: '' } });
		expect(createUserFormInputLastName.value).toBe('');
		const createUserSubmitBtn = getByTitle('styled-button');
		expect(createUserSubmitBtn).toBeTruthy();
		fireEvent.click(createUserSubmitBtn);
		const createUserFormInputLastNameErrorMsg = document.querySelector('#create-user-form-input-lastName-error-msg');
		await waitFor(() => expect(createUserFormInputLastNameErrorMsg).toHaveTextContent('Lastname is required'));
	});

	it('email input on change is working', () => {
		render(<CreateUser onCreate={onCreate} />);
		const createUserButton = document.querySelector('#create-user-button');
		fireEvent.click(createUserButton);
		const createUserHeader = document.querySelector('#create-user-header');
		expect(createUserHeader).toBeTruthy();
		const createUserFormInputFirstName = document.querySelector('#create-user-form-input-email');
		expect(createUserFormInputFirstName).toBeInTheDocument();
		fireEvent.change(createUserFormInputFirstName, { target: { value: 'michael@asda.com' } });
		expect(createUserFormInputFirstName.value).toBe('michael@asda.com');
		fireEvent.change(createUserFormInputFirstName, { target: { value: 'michael@asda.com1' } });
		expect(createUserFormInputFirstName.value).not.toBe('michael@asda.com');
	});

	it('invalid input on email should display error msg', async () => {
		const { getByTitle } = render(<CreateUser onCreate={onCreate} />);
		const createUserButton = document.querySelector('#create-user-button');
		fireEvent.click(createUserButton);
		const createUserHeader = document.querySelector('#create-user-header');
		expect(createUserHeader).toBeTruthy();
		const createUserFormInputLastName = document.querySelector('#create-user-form-input-email');
		expect(createUserFormInputLastName).toBeInTheDocument();
		fireEvent.change(createUserFormInputLastName, { target: { value: '' } });
		expect(createUserFormInputLastName.value).toBe('');
		const createUserSubmitBtn = getByTitle('styled-button');
		expect(createUserSubmitBtn).toBeTruthy();
		fireEvent.click(createUserSubmitBtn);
		const createUserFormInputLastNameErrorMsg = document.querySelector('#create-user-form-input-email-error-msg');
		await waitFor(() => expect(createUserFormInputLastNameErrorMsg).toHaveTextContent('Email is required'));
		fireEvent.change(createUserFormInputLastName, { target: { value: '123' } });
		expect(createUserFormInputLastName.value).toBe('123');
		expect(createUserSubmitBtn).toBeTruthy();
		fireEvent.click(createUserSubmitBtn);
		await waitFor(() => expect(createUserFormInputLastNameErrorMsg).toHaveTextContent('Invalid email'));
		fireEvent.change(createUserFormInputLastName, { target: { value: 'michael@asd.com' } });
		expect(createUserFormInputLastName.value).toBe('michael@asd.com');
		expect(createUserSubmitBtn).toBeTruthy();
		fireEvent.click(createUserSubmitBtn);
		const checkCreateUserFormInputLastNameErrorMsg = document.querySelector('#create-user-form-input-email-error-msg');
		await waitFor(() => expect(checkCreateUserFormInputLastNameErrorMsg).toBeFalsy());
	});

	it('dob input on change is working', async () => {
		const { getByTitle } = render(<CreateUser onCreate={onCreate} />);
		const createUserButton = document.querySelector('#create-user-button');
		fireEvent.click(createUserButton);
		const createUserHeader = document.querySelector('#create-user-header');
		expect(createUserHeader).toBeTruthy();
		const createUserFormInputDob = document.querySelector('#create-user-form-input-dob');
		expect(createUserFormInputDob).toBeInTheDocument();
		fireEvent.change(createUserFormInputDob, { target: { value: '01/02/2021' } });
		expect(createUserFormInputDob.value).toBe('01/02/2021');
		const createUserSubmitBtn = getByTitle('styled-button');
		expect(createUserSubmitBtn).toBeTruthy();
		fireEvent.click(createUserSubmitBtn);
	});

	it('invalid input on dob should display error msg', async () => {
		const { getByTitle } = render(<CreateUser onCreate={onCreate} />);
		const createUserButton = document.querySelector('#create-user-button');
		fireEvent.click(createUserButton);
		const createUserHeader = document.querySelector('#create-user-header');
		expect(createUserHeader).toBeTruthy();
		const createUserFormInputDob = document.querySelector('#create-user-form-input-dob');
		expect(createUserFormInputDob).toBeInTheDocument();
		fireEvent.change(createUserFormInputDob, { target: { value: '01/02/2022' } });
		expect(createUserFormInputDob.value).toBe('01/02/2022');
		const createUserSubmitBtn = getByTitle('styled-button');
		expect(createUserSubmitBtn).toBeTruthy();
		fireEvent.click(createUserSubmitBtn);
		const createUserFormInputLastNameErrorMsg = document.querySelector('#create-user-form-input-dob-error-msg');
		await waitFor(() => expect(createUserFormInputLastNameErrorMsg).toHaveTextContent('Date of birth is required'));
	});
});
