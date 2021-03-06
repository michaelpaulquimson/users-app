import React, { useState, useEffect } from 'react';
import '../App.css';
import styled from 'styled-components';

import UsersService from '../services/UsersService';
import UserList from '../components/UserList';
import CreateUser from '../components/CreateUser';
import Utils from '../utils/Utils';

const Header = styled.h1`
	margin: 25px;
	text-align: center;
	font-weight: bold;
	font-size: 24px;
`;

function App() {
	const [users, setUsers] = useState([]);

	useEffect(() => {
		getUsers();
	}, []);

	async function getUsers() {
		const { users } = await UsersService.getUsers();
		if (users) setUsers(users);
	}

	async function createUser(user) {
		const userToCreate = {
			...user
		};
		const newUserCreated = await UsersService.createUser(userToCreate);
		userToCreate.id = newUserCreated.id;
		userToCreate.dob = Utils.convertToDate(newUserCreated.dob);
		setUsers([
			...users,
			userToCreate
		]);
	}

	async function updateUser(data) {
		await UsersService.updateUser(data);
		setUsers(users.map(u => {
			if (u.id === data.id) {
				data.dob = Utils.convertToDate(data.dob);
				return data;
			}
			return u;
		}));
	}

	async function deleteUser(id) {
		await UsersService.deleteUser(id);
		setUsers(users.filter(u => u.id !== id));
	}

	return (
		<div>
			<Header>User Management System</Header>
			<CreateUser
				onCreate={ async (user) => await createUser(user)}
			/>
			<UserList
				users={users}
				onUpdate={ async (user) => await updateUser(user)}
				onDelete={ async (user) => await deleteUser(user)}
			/>
		</div>
	);
}

export default App;
