import React from 'react';
import PropTypes from 'prop-types';
import { Tr, Td } from 'react-super-responsive-table';
import 'react-super-responsive-table/dist/SuperResponsiveTableStyle.css';

import UpdateUser from './UpdateUser';

const UserItem = ({ user, onDelete, onUpdate }) => {
	const { id, firstName, lastName, email, dob } = user;

	return (
		<Tr>
			<Td>{id}</Td>
			<Td>{firstName}</Td>
			<Td>{lastName}</Td>
			<Td>{email}</Td>
			<Td>{dob}</Td>
			<Td onClick={() => onDelete(id)}>Delete</Td>
			<Td><UpdateUser user={user} onUpdate={onUpdate} /></Td>
		</Tr>
	);
};

UserItem.propTypes = {
	user: PropTypes.object.isRequired,
	onDelete: PropTypes.func.isRequired,
	onUpdate: PropTypes.func.isRequired
};

export default UserItem;
