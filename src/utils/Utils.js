import { format, getUnixTime } from 'date-fns';

const Utils = {
	convertToDate: (val) => {
		let date =  new Date(val * 1000);
		return format(date, 'MM/dd/yyyy');
	},
	convertToUnix: (val) => {
		return getUnixTime(val);
	},
	validateEmail: (val) => {
		return (/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i).test(val);
	},
	validateDob: (val) => {
		let date =  new Date(val);
		let newDate = format(date, 'MM/dd/yyyy');
		return (/^(0[1-9]|1[0-2])\/(0[1-9]|1\d|2\d|3[01])\/(19|20)\d{2}$/).test(newDate);
	},
	isEmpty: (obj) => {
		return Object.entries(obj) && Object.entries(obj).length === 0 && obj.constructor === Object;
	}
};

export default Utils;