import Utils from '../utils/Utils';

class User {
	constructor({ id, firstName, lastName, email, dob }) {
		this.id = id;
		this.firstName = firstName;
		this.lastName = lastName;
		this.email = email;
		this.dob = Utils.convertToDate(dob);
	}
}

export default User;