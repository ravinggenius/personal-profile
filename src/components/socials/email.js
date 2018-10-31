import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import React from 'react';
import styled from 'react-emotion';
import Obfuscate from 'react-obfuscate';

const Inner = styled(Obfuscate)``;

const Email = ({ email }) => {
	if (email) {
		return (
			<Inner {...{ email }}>
				<FontAwesomeIcon icon={faEnvelope} />
			</Inner>
		);
	}
};

export default Email;
