import styled from '@emotion/styled';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMinus, faPlus } from '@fortawesome/free-solid-svg-icons';
import React from 'react';

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
	<Button
		aria-label={isOpen ? 'collapse' : 'expand'}
		css={iconStyles}
		onClick={onToggle}
	>
		<FontAwesomeIcon fixedWidth icon={isOpen ? faMinus : faPlus} />
	</Button>
);

export default Toggle;
