import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
	faFacebook,
	faGithub,
	faStackOverflow
} from '@fortawesome/free-brands-svg-icons';
import React from 'react';
import styled from 'react-emotion';

const Anchor = styled.a``;

const resolve = (code, handle) =>
	({
		facebook: [faFacebook, `https://www.facebook.com/${handle}`],
		github: [faGithub, `https://www.facebook.com/${handle}`],
		stackOverflow: [
			faStackOverflow,
			`https://stackoverflow.com/users/${handle}`
		]
	}[code]);

const ThirdParty = ({ code, handle }) => {
	const [icon, href] = resolve(code, handle);

	if (href) {
		return (
			<Anchor {...{ href }}>
				<FontAwesomeIcon {...{ icon }} />
			</Anchor>
		);
	}
};

export default ThirdParty;
