import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

import UsersService from '../services/UsersService';

const Header = styled.h1`
	margin: 25px;
	text-align: center;
`;

function App() {
	const [users, setUsers] = useState([]);

	useEffect(() => {
		getUsers();
		console.log(users);
	}, []);

	async function getUsers() {
		const { users } = await UsersService.getUsers();
		if (users) setUsers(users);
	}

	return (
		<div>
			<Header>User Management System</Header>
		</div>
	);
}

export default App;