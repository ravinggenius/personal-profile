import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import React from 'react';
import styled from 'react-emotion';
import Obfuscate from 'react-obfuscate';

import { Label, iconStyles } from './third_party';

const Anchor = styled(Obfuscate)``;

const Email = ({ email }) => {
	if (email) {
		return (
			<Anchor css={iconStyles} {...{ email }}>
				<FontAwesomeIcon fixedWidth icon={faEnvelope} />
				<Label>Email</Label>
			</Anchor>
		);
	}
};

export default Email;
