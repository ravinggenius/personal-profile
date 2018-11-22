import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
	faFacebook,
	faGithub,
	faStackOverflow
} from '@fortawesome/free-brands-svg-icons';
import React from 'react';
import styled, { css } from 'react-emotion';

export const iconStyles = css`
	align-items: center;
	display: flex;
	flex-direction: column;
	font-size: xx-large;
	justify-content: center;
	margin: 5px;
	padding: 5px;
	text-decoration: none;
`;

const Anchor = styled.a``;

export const Label = styled.span`
	font-size: small;
`;

const resolve = (code, handle) =>
	({
		facebook: [
			'Facebook',
			faFacebook,
			`https://www.facebook.com/${handle}`
		],
		github: ['GitHub', faGithub, `https://www.facebook.com/${handle}`],
		stackOverflow: [
			'StackOverflow',
			faStackOverflow,
			`https://stackoverflow.com/users/${handle}`
		]
	}[code]);

const ThirdParty = ({ code, handle }) => {
	const [label, icon, href] = resolve(code, handle);

	if (href) {
		return (
			<Anchor css={iconStyles} {...{ href }}>
				<FontAwesomeIcon {...{ icon }} />
				<Label>{label}</Label>
			</Anchor>
		);
	}
};

export default ThirdParty;
