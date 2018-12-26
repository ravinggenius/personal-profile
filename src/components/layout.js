import 'normalize.css';

import React from 'react';
import styled, { css } from 'react-emotion';
import Helmet from 'react-helmet';

import { generateSecondary } from '../utilities/color';

const bodyStyles = css`
	--angle: calc(90deg + 75deg);
	--gutter: 20px;
	background-attachment: fixed;
	background-color: var(--primary);
	background-image: linear-gradient(
		var(--angle),
		var(--primary) 0,
		var(--primary) 30%,
		var(--secondary) 100%
	);
	font-family: sans-serif;
	min-height: 100vh;

	> div#___gatsby {
		min-height: inherit;

		> div[role='group'] {
			display: grid;
			min-height: inherit;
			place-items: center;
		}
	}

	a {
		color: var(--primary);

		&:hover {
			color: var(--secondary);
		}
	}

	*:focus {
		outline: var(--secondary) auto 5px;
	}
`;

const Main = styled.main`
	background-color: #ffffff;
	border-radius: calc(var(--gutter) / 4);
	box-shadow: 3px 3px 10px rgba(0, 0, 0, 0.3);
	margin: 0 auto;
	max-width: 600px;
	padding: var(--gutter);
`;

const Layout = ({ children, color, title }) => (
	<Main>
		<Helmet>
			<html lang="en" />

			<title>{title}</title>

			<meta name="description" contents="Sample" />
			<meta name="keywords" contents="sample, something" />
			<meta name="theme-color" contents={color} />

			<body
				className={bodyStyles}
				css={`
					--primary: ${color};
					--secondary: ${generateSecondary(color)};
				`}
			/>
		</Helmet>

		{children}
	</Main>
);

export default Layout;
