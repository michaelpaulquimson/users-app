import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const StyledButton = styled.button`
	border: 1px solid black;
	margin: 8px;
	padding: 4px;
	border-radius: 4px;
	width: 280px;
	text-align: center;
	background-color: #4CAF50;
	color: white;
`;

const Button = ({ type, name }) => {
	return (
		<StyledButton title='styled-button' type={type}>{name}</StyledButton>
	);
};

Button.propTypes = {
	type: PropTypes.string.isRequired,
	name: PropTypes.string.isRequired
};

export default Button;