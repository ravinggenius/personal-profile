import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
	faFacebook,
	faGithub,
	faStackOverflow
} from '@fortawesome/free-brands-svg-icons';
import React from 'react';
import styled from 'react-emotion';

const Anchor = styled.a``;

const ThirdParty = ({ code, username }) => {
	switch (code) {
		case 'facebook':
			return (
				<Anchor href={`https://www.facebook.com/${username}`}>
					<FontAwesomeIcon icon={faFacebook} />
				</Anchor>
			);
		case 'github':
			return (
				<Anchor href={`https://github.com/${username}`}>
					<FontAwesomeIcon icon={faGithub} />
				</Anchor>
			);
		case 'stackOverflow':
			return (
				<Anchor href={`https://stackoverflow.com/users/${username}`}>
					<FontAwesomeIcon icon={faStackOverflow} />
				</Anchor>
			);
		default:
			return null;
	}
};

export default ThirdParty;
