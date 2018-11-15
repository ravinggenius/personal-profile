import React from 'react';
import styled, { css } from 'react-emotion';
import Helmet from 'react-helmet';

import 'normalize.css';

import { generateSecondary } from '../utilities/color';

const bodyStyles = css`
	--angle: calc(90deg + 75deg);
	background-attachment: fixed;
	background-color: var(--primary);
	background-image: linear-gradient(
		var(--angle),
		var(--primary) 0,
		var(--primary) 30%,
		var(--secondary) 100%
	);
	min-height: 100vh;
`;

const Main = styled.main`
	background-color: white;
	margin: 0 auto;
	min-height: 80vh;
	width: 500px;
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
