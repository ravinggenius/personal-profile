import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
	faFacebook,
	faGithub,
	faStackOverflow
} from '@fortawesome/free-brands-svg-icons';
import React from 'react';
import styled from 'react-emotion';

const Anchor = styled.a``;

const ThirdParty = ({ code, handle }) => {
	switch (code) {
		case 'facebook':
			return (
				<Anchor href={`https://www.facebook.com/${handle}`}>
					<FontAwesomeIcon icon={faFacebook} />
				</Anchor>
			);
		case 'github':
			return (
				<Anchor href={`https://github.com/${handle}`}>
					<FontAwesomeIcon icon={faGithub} />
				</Anchor>
			);
		case 'stackOverflow':
			return (
				<Anchor href={`https://stackoverflow.com/users/${handle}`}>
					<FontAwesomeIcon icon={faStackOverflow} />
				</Anchor>
			);
		default:
			return null;
	}
};

export default ThirdParty;
