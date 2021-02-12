import React from 'react';
import { render } from '@testing-library/react';
import Button from './Button';

it('renders button', () => {
	const { queryAllByTitle } = render(<Button type='text' name='Submit' />);
	const button = queryAllByTitle('styled-button');

	expect(button).toBeTruthy();
});

