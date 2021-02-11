import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Table, Thead, Tbody, Tr, Th } from 'react-super-responsive-table';
import 'react-super-responsive-table/dist/SuperResponsiveTableStyle.css';

import UserItem from './UserItem';

const Container = styled.div`
	max-width: 1440px;
	max-height: 1024px;
	margin: auto;

	table {
		font-family: Arial, Helvetica, sans-serif;
		border-collapse: collapse;
		width: 100%;
		margin: 25px 0;
	}

	table td, table th {
		border: 1px solid #ddd;
		padding: 8px;
		text-align: center;
	}

	table tr:nth-child(even){background-color: #f2f2f2;}

	table tr:hover {background-color: #ddd;}

	table th {
		white-space: pre;
		padding-top: 12px;
		padding-bottom: 12px;
		background-color: #4CAF50;
		color: white;
		font-weight: bold;
	}
`;

const UserList = ({ users, onUpdate, onDelete }) => {

	function renderUserItem(user) {
		return (
			<UserItem key={user.id} user={user} onUpdate={onUpdate} onDelete={onDelete} />
		);
	}

	function renderUserList() {
		const hasUsers = users.length > 0 ? true : false;

		const renderUserList = users.map(user => renderUserItem(user));
		const noUserFound = <tr><td colSpan='6'>No user found.</td></tr>;

		return hasUsers ? renderUserList : noUserFound;
	}

	return (
		<Container>
			<Table>
				<Thead>
					<Tr>
						<Th>ID</Th>
						<Th>FIRSTNAME</Th>
						<Th>LASTNAME</Th>
						<Th>EMAIL</Th>
						<Th>DATE OF BIRTH</Th>
						<Th colSpan='2'>ACTIONS</Th>
					</Tr>
				</Thead>
				<Tbody>
					{renderUserList()}
				</Tbody>
			</Table>
		</Container>
	);
};

UserList.propTypes = {
	users: PropTypes.array.isRequired,
	onDelete: PropTypes.func.isRequired,
	onUpdate: PropTypes.func.isRequired
};

export default UserList;
