import React from 'react';
import PropTypes from 'prop-types';
import { Tr, Td } from 'react-super-responsive-table';
import 'react-super-responsive-table/dist/SuperResponsiveTableStyle.css';
import styled from 'styled-components';

import UpdateUser from './UpdateUser';

const StyledTableData = styled.td`
	color: blue;
	cursor: pointer;
`;

const UserItem = ({ user, onDelete, onUpdate }) => {
	const { id, firstName, lastName, email, dob } = user;

	return (
		<Tr>
			<Td>{id}</Td>
			<Td>{firstName}</Td>
			<Td>{lastName}</Td>
			<Td>{email}</Td>
			<Td>{dob}</Td>
			<StyledTableData onClick={() => {if (window.confirm('Are you sure you wish to delete this item?')) onDelete(id);}}>Delete User</StyledTableData>
			<StyledTableData><UpdateUser user={user} onUpdate={onUpdate} /></StyledTableData>
		</Tr>
	);
};

UserItem.propTypes = {
	user: PropTypes.object.isRequired,
	onDelete: PropTypes.func.isRequired,
	onUpdate: PropTypes.func.isRequired
};

export default UserItem;
