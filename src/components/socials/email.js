import styled from '@emotion/styled';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import React from 'react';
import Obfuscate from 'react-obfuscate';

import { iconStyles } from './third_party';

const Anchor = styled(Obfuscate)``;

const Email = ({ email }) => {
	if (email) {
		return (
			<Anchor
				{...{ email }}
				aria-label="email"
				css={iconStyles}
				title="Email"
			>
				<FontAwesomeIcon fixedWidth icon={faEnvelope} />
			</Anchor>
		);
	}
};

export default Email;
