import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
	fa500px,
	faBandcamp,
	faBitbucket,
	faBlogger,
	faCodepen,
	faDeviantart,
	faDiaspora,
	faDribbble,
	faEbay,
	faEllo,
	faEtsy,
	faFacebook,
	faFlickr,
	faGithub,
	faGitlab,
	faHackerNews,
	faHouzz,
	faInstagram,
	faLastfm,
	faLinkedin,
	faMastodon,
	faMedium,
	faMeetup,
	faMixcloud,
	faNpm,
	faPinterest,
	faQuora,
	faReddit,
	faSlack,
	faSlideshare,
	faSoundcloud,
	faStackExchange,
	faStackOverflow,
	faSteam,
	faTumblr,
	faTwitch,
	faTwitter,
	faVimeo,
	faWordpress,
	faYelp,
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

const resolve = (code, handle) =>
	({
		'500px': ['500px', fa500px, `https://500px.com/${handle}`],
		bandcamp: ['Bandcamp', faBandcamp, `https://${handle}.bandcamp.com/`],
		bitbucket: [
			'Bitbucket',
			faBitbucket,
			`https://bitbucket.com/${handle}`
		],
		blogger: ['Blogger', faBlogger, `https://${handle}.blogger.com/`],
		codepen: ['CodePen', faCodepen, `https://codepen.io/${handle}/`],
		deviantart: [
			'DeviantArt',
			faDeviantart,
			`https://www.deviantart.com/${handle}`
		],
		diaspora: [
			'Diaspora*',
			faDiaspora,
			`https://${handle.split('@')[1]}/people/${handle.split('@')[0]}`
		],
		dribbble: ['Dribbble', faDribbble, `https://dribbble.com/${handle}`],
		ebay: ['eBay', faEbay, `https://www.ebay.com/usr/${handle}`],
		ello: ['Ello', faEllo, `https://ello.co/${handle}`],
		etsy: ['Etsy', faEtsy, `https://www.etsy.com/people/${handle}`],
		facebook: [
			'Facebook',
			faFacebook,
			`https://www.facebook.com/${handle}`
		],
		flickr: [
			'Flickr',
			faFlickr,
			`https://www.flickr.com/people/${handle}/`
		],
		github: ['GitHub', faGithub, `https://github.com/${handle}`],
		gitlab: ['Gitlab', faGitlab, `https://gitlab.com/${handle}`],
		hackerNews: [
			'Hacker News',
			faHackerNews,
			`https://news.ycombinator.com/user?id=${handle}`
		],
		houzz: ['Houzz', faHouzz, `https://www.houzz.com/user/${handle}`],
		instagram: [
			'Instagram',
			faInstagram,
			`https://www.instagram.com/${handle}/`
		],
		lastfm: ['Last.fm', faLastfm, `https://www.last.fm/user/${handle}/`],
		linkedin: [
			'Linkedin',
			faLinkedin,
			`https://www.linkedin.com/in/${handle}/`
		],
		mastodon: [
			'Mastodon',
			faMastodon,
			`https://${handle.split('@')[1]}/@${handle.split('@')[0]}`
		],
		medium: [
			'Medium',
			faMedium,
			`https://medium.com/@${handle.replace(/^@/, '')}`
		],
		meetup: [
			'Meetup',
			faMeetup,
			`https://www.meetup.com/members/${handle}/`
		],
		mixcloud: [
			'Mixcloud',
			faMixcloud,
			`https://www.mixcloud.com/${handle}/`
		],
		npm: [
			'npm',
			faNpm,
			`https://www.npmjs.com/~${handle.replace(/^~/, '')}`
		],
		pinterest: [
			'Pinterest',
			faPinterest,
			`https://www.pinterest.com/${handle}/`
		],
		quora: ['Quora', faQuora, `https://www.quora.com/profile/${handle}`],
		reddit: ['Reddit', faReddit, `https://www.reddit.com/user/${handle}`],
		slack: [
			'Slack',
			faSlack,
			`https://${handle.split('@')[1]}.slack.com/${handle.split('@')[0]}`
		],
		slideshare: [
			'Slideshare',
			faSlideshare,
			`https://www.slideshare.net/${handle}`
		],
		soundcloud: [
			'SoundCloud',
			faSoundcloud,
			`https://soundcloud.com/${handle}`
		],
		stackExchange: [
			'StackExchange',
			faStackExchange,
			`https://${handle.split('@')[1]}.stackexchange.com/users/${handle.split('@')[0]}`
		],
		stackOverflow: [
			'StackOverflow',
			faStackOverflow,
			`https://stackoverflow.com/users/${handle}`
		],
		steam: ['Steam', faSteam, `https://steamcommunity.com/id/${handle}`],
		tumblr: ['Tumblr', faTumblr, `https://${handle}.tumblr.com/`],
		twitch: ['Twitch', faTwitch, `https://www.twitch.tv/${handle}`],
		twitter: ['Twitter', faTwitter, `https://twitter.com/${handle}`],
		vimeo: ['Vimeo', faVimeo, `https://vimeo.com/${handle}`],
		wordpress: [
			'WordPress',
			faWordpress,
			`https://${handle}.wordpress.com/`
		],
		yelp: [
			'Yelp',
			faYelp,
			`https://www.yelp.com/user_details?userid=${handle}`
		],
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
			<Anchor
				{...{ href }}
				aria-label={label}
				css={iconStyles}
				title={label}
			>
				<FontAwesomeIcon fixedWidth {...{ icon }} />
			</Anchor>
		);
	}
};

export default ThirdParty;
