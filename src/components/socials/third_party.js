import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
	faFacebook,
	faGithub,
	faInstagram,
	faLastfm,
	faMastodon,
	faStackOverflow,
	faTwitter,
	faYoutube
} from '@fortawesome/free-brands-svg-icons';
import { OutboundLink } from 'gatsby-plugin-google-analytics';
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

const Anchor = styled(OutboundLink)``;

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
		github: ['GitHub', faGithub, `https://github.com/${handle}`],
		instagram: [
			'Instagram',
			faInstagram,
			`https://www.instagram.com/${handle}/`
		],
		lastfm: ['Last.fm', faLastfm, `https://www.last.fm/user/${handle}/`],
		mastodon: [
			'Mastodon',
			faMastodon,
			`https://${handle.split('@')[1]}/@${handle.split('@')[0]}`
		],
		stackOverflow: [
			'StackOverflow',
			faStackOverflow,
			`https://stackoverflow.com/users/${handle}`
		],
		twitter: ['Twitter', faTwitter, `https://twitter.com/${handle}`],
		youtube: [
			'YouTube',
			faYoutube,
			`https://www.youtube.com/user/${handle}`
		]
	}[code]);

const ThirdParty = ({ code, handle }) => {
	const [label, icon, href] = resolve(code, handle);

	if (href) {
		return (
			<Anchor css={iconStyles} {...{ href }}>
				<FontAwesomeIcon fixedWidth {...{ icon }} />
				<Label>{label}</Label>
			</Anchor>
		);
	}
};

export default ThirdParty;
