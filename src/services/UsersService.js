import User from '../models/UserModel';
import config from '../config';

const headers = {
	'Content-Type': 'application/json',
	'Access-Control-Allow-Origin': '*',
	'Access-Control-Allow-Methods': 'GET, POST, OPTIONS, PUT, PATCH, DELETE',
	'Access-Control-Allow-Headers': 'X-Requested-With,content-type',
	'Access-Control-Allow-Credentials': true
};

const UsersService = {
	getUsers: async function() {
		try {
			const requestOptions = {
				method: 'GET',
				headers
			};

			const res = await fetch(
				`${config.baseUrl}/users`,
				requestOptions
			);

			const payload = await res.json();

			const users = payload ? payload.map(user => new User(user)) : [];

			return { users };
		} catch(err) {
			console.log(err);
		}
	},
	createUser: async function(data) {
		try {
			const requestOptions = {
				method: 'POST',
				headers,
				body: JSON.stringify(data)
			};

			const res = await fetch(
				`${config.baseUrl}/users`,
				requestOptions
			);

			const payload = await res.json();

			if (payload) return payload;
		} catch(err) {
			console.log(err);
		}
	},
	updateUser: async function(data) {
		const { id } = data;

		try {
			const requestOptions = {
				method: 'PUT',
				headers,
				body: JSON.stringify(data)
			};

			const res = await fetch(
				`${config.baseUrl}/users/${id}`,
				requestOptions
			);

			const payload = await res.json();

			if (payload) return payload;
		} catch(err) {
			console.log(err);
		}
	},
	deleteUser: async function(id) {
		try {
			const requestOptions = {
				method: 'DELETE',
				headers
			};

			const res = await fetch(
				`${config.baseUrl}/users/${id}`,
				requestOptions
			);

			const payload = await res.json();

			if (payload) return payload;
		} catch(err) {
			console.log(err);
		}
	}
};

export default UsersService;