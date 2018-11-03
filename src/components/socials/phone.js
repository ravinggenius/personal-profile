import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhone } from '@fortawesome/free-solid-svg-icons';
import normalize from 'phone';
import React from 'react';
import styled from 'react-emotion';
import Obfuscate from 'react-obfuscate';

const Anchor = styled(Obfuscate)``;

const Phone = ({ display }) => {
	if (display) {
		const [telephone] = normalize(display);

		if (telephone) {
			return (
				<Anchor tel={telephone}>
					<FontAwesomeIcon icon={faPhone} />
				</Anchor>
			);
		}
	}
};

export default Phone;
