import React from 'react';
import { render } from '@testing-library/react';
import App from './App';

test('renders react app', () => {

	const { queryAllByTitle } = render(<App />);
	const app = queryAllByTitle('app');

	expect(app).toBeTruthy();
});
