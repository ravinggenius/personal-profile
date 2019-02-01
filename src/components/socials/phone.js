import styled from '@emotion/styled';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhone } from '@fortawesome/free-solid-svg-icons';
import normalize from 'phone';
import React from 'react';
import Obfuscate from 'react-obfuscate';

import { iconStyles } from './third_party';

const Anchor = styled(Obfuscate)``;

const Phone = ({ display }) => {
	if (display) {
		const [telephone] = normalize(display);

		if (telephone) {
			return (
				<Anchor
					aria-label="phone"
					css={iconStyles}
					tel={telephone}
					title="Phone"
				>
					<FontAwesomeIcon fixedWidth icon={faPhone} />
				</Anchor>
			);
		}
	}
};

export default Phone;
