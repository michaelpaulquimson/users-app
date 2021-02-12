import React, { useEffect, useState } from 'react';
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

const CloseButton = styled.h1`
	align-self: flex-end;
	margin-right: 8px;
	margin-bottom: 8px;
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

const UpdateUser = ({ user, onUpdate }) => {
	const [id, setId] = useState(user.id);
	const [firstName, setFirstName] = useState(user.firstName);
	const [lastName, setLastName] = useState(user.lastName);
	const [email, setEmail] = useState(user.email);
	const [dob, setDob] = useState(new Date(user.dob));
	const [modalIsOpen,setIsOpen] = React.useState(false);
	const [errors, setErrors] = useState({});

	function openModal() {
		setIsOpen(true);
	}

	function closeModal(){
		setIsOpen(false);
	}

	function handleUpdate(e) {
		let hasError = validateForm();

		if (hasError) {
			onUpdate({
				id,
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

	useEffect(() => {
		setId(user.id);
		setFirstName(user.firstName);
		setLastName(user.lastName);
		setEmail(user.email);
		setDob(new Date(user.dob));
	}, []);

	return (
		<>
			<div onClick={openModal}>Update User</div>
			<Modal
				isOpen={modalIsOpen}
				onRequestClose={closeModal}
				style={customStyles}
				contentLabel="Modal"
				ariaHideApp={false}
			>
				<Form onSubmit={handleUpdate}>
					<CloseButton onClick={closeModal}>X</CloseButton>
					<h1>Update User</h1>
					<input style={{ visibility: 'hidden' }} name='id' placeholder='id' type={'text'}  onChange={(e) => { setId(e.target.value); }} value={id} />
					<FormInput name='firstName' placeholder='Firstname' type={'text'} onChange={(e) => { setFirstName(e.target.value); }} value={firstName} error={errors.firstName} />
					<FormInput name='lastName' placeholder='Lastname' type={'text'} onChange={(e) => { setLastName(e.target.value); }} value={lastName} error={errors.lastName} />
					<FormInput name='email' placeholder='Email' type={'email'} onChange={(e) => { setEmail(e.target.value); }} value={email} error={errors.email} />
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
					<Button type='submit' name='Update User' />
				</Form>
			</Modal>
		</>
	);
};

UpdateUser.propTypes = {
	user: PropTypes.object.isRequired,
	onUpdate: PropTypes.func.isRequired
};

export default UpdateUser;
