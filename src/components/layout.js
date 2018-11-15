import React from 'react';
import styled, { css } from 'react-emotion';
import Helmet from 'react-helmet';

import 'normalize.css';

const bodyStyles = css`
	--angle: calc(90deg + 75deg);
	--primary: darkslateblue;
	--secondary: aquamarine;
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

const Layout = ({ children, title }) => (
	<Main>
		<Helmet>
			<html lang="en" />

			<title>{title}</title>

			<meta name="description" contents="Sample" />
			<meta name="keywords" contents="sample, something" />

			<body className={bodyStyles} />
		</Helmet>

		{children}
	</Main>
);

export default Layout;
