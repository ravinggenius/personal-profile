import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMinus, faPlus } from '@fortawesome/free-solid-svg-icons';
import React from 'react';
import styled from 'react-emotion';

import { iconStyles } from './third_party';

const Button = styled.button`
	all: unset;
	color: var(--primary);
	cursor: pointer;

	&:hover {
		color: var(--secondary);
	}
`;

const Toggle = ({ isOpen, onToggle }) => (
	<Button css={iconStyles} onClick={onToggle}>
		<FontAwesomeIcon fixedWidth icon={isOpen ? faMinus : faPlus} />
	</Button>
);

export default Toggle;
