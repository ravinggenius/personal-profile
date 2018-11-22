import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhone } from '@fortawesome/free-solid-svg-icons';
import normalize from 'phone';
import React from 'react';
import styled from 'react-emotion';
import Obfuscate from 'react-obfuscate';

import { Label, iconStyles } from './third_party';

const Anchor = styled(Obfuscate)``;

const Phone = ({ display }) => {
	if (display) {
		const [telephone] = normalize(display);

		if (telephone) {
			return (
				<Anchor css={iconStyles} tel={telephone}>
					<FontAwesomeIcon icon={faPhone} />
					<Label>Phone</Label>
				</Anchor>
			);
		}
	}
};

export default Phone;
