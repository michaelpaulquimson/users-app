import React, { useState } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Modal from 'react-modal';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import Utils from '../utils/Utils';
import subDays from 'date-fns/subDays';
import subYears from 'date-fns/subYears';

import FormInput from './FormInput';
import Button from './Button';

const customStyles = {
	content : {
		top                   : '20%',
		left                  : '50%',
		right                 : 'auto',
		bottom                : 'auto',
		marginRight           : '-50%',
		transform             : 'translate(-50%, -50%)'
	}
};

const CreateUserButton = styled.button`
	border: 1px solid black;
	margin: 8px;
	padding: 4px;
	border-radius: 4px;
	width: 280px;
	text-align: center;
	background-color: #4CAF50;
	color: white;
`;

const CloseButton = styled.h1`
	align-self: flex-end;
	margin-right: 8px;
	margin-bottom: 8px;
`;

const Container = styled.div`
	display: flex;
	justify-content: center;
`;

const Form = styled.form`
	display: flex;
	flex-direction: column;
	align-items: center;

	.react-datepicker-wrapper {
		.react-datepicker__input-container {
			input {
				border: 1px solid black;
				margin: 8px;
				padding: 4px;
				border-radius: 4px;
				width: 280px;
			}
		}
	}
`;

const DisplayErrorMsg = styled.p`
	color: red;
`;

const CreateUser = ({ onCreate }) => {
	const [firstName, setFirstName] = useState('');
	const [lastName, setLastName] = useState('');
	const [email, setEmail] = useState('');
	const [dob, setDob] = useState('');
	const [modalIsOpen,setIsOpen] = React.useState(false);
	const [errors, setErrors] = useState({});

	function openModal() {
		setIsOpen(true);
	}

	function closeModal(){
		setFirstName('');
		setLastName('');
		setEmail('');
		setDob('');

		setIsOpen(false);
	}

	function handleCreate(e) {
		let hasError = validateForm();

		if (hasError) {
			onCreate({
				firstName,
				lastName,
				email,
				dob: Utils.convertToUnix(dob),
			});
			closeModal();
		}

		e.preventDefault();
	}

	function validateForm() {
		setErrors({});

		let err = {};

		if (!firstName) err.firstName = 'Firstname is required';
		if (!lastName) err.lastName = 'Lastname is required';
		if (!email) err.email = 'Email is required';
		if (email) {
			let validEmail = Utils.validateEmail(email);
			if (!validEmail) err.email = 'Invalid email';
		}
		if (!dob) {
			err.dob = 'Date of birth is required';
		} else {
			let validDob = Utils.validateDob(dob);
			if (!validDob) err.dob = 'Invalid date of birth';
		}

		setErrors(err);

		return Utils.isEmpty(err);
	}

	return (
		<>
			<Container>
				<CreateUserButton onClick={openModal}>Create User</CreateUserButton>
			</Container>
			<Modal
				isOpen={modalIsOpen}
				onRequestClose={closeModal}
				style={customStyles}
				contentLabel="Modal"
				ariaHideApp={false}
			>
				<Form onSubmit={handleCreate}>
					<CloseButton onClick={closeModal}>X</CloseButton>
					<h1>Create User</h1>
					<FormInput name='firstName' value={firstName} placeholder='Firstname' type={'text'} onChange={(e) => setFirstName(e.target.value)} error={errors.firstName} />
					<FormInput name='lastName' value={lastName} placeholder='Lastname' type={'text'} onChange={(e) => setLastName(e.target.value)} error={errors.lastName} />
					<FormInput name='email' value={email} placeholder='Email' type={'text'} onChange={(e) => setEmail(e.target.value)} error={errors.email} />
					<DatePicker
						selected={dob}
						onChange={date => setDob(date)}
						monthsShown={1}
						showYearDropdown
						placeholderText='Date of birth'
						minDate={subYears(new Date(), 150)}
						maxDate={subDays(new Date(), 1)}
					/>
					{errors.dob && <DisplayErrorMsg>{errors.dob}</DisplayErrorMsg>}
					<Button type='submit' name='Create User' />
				</Form>
			</Modal>
		</>
	);
};

CreateUser.propTypes = {
	onCreate: PropTypes.func.isRequired,
};


export default CreateUser;
