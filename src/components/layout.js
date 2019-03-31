import 'normalize.css';

import { Global, css } from '@emotion/core';
import styled from '@emotion/styled';
import React from 'react';
import Helmet from 'react-helmet';

import { generateSecondary } from '../utilities/color';

const Main = styled.main`
	background-color: #ffffff;
	border-radius: calc(var(--gutter) / 4);
	box-shadow: 3px 3px 10px rgba(0, 0, 0, 0.3);
	display: grid;
	grid-template-areas:
		'.               avatar               .'
		'profile        profile         profile'
		'bio              bio               bio'
		'websites       websites       websites'
		'testimonials testimonials testimonials'
		'socials         socials        socials';
	grid-template-columns: 1fr auto 1fr;
	margin: 0 auto;
	max-width: 600px;
	padding: var(--gutter);

	@media (min-width: 450px) {
		grid-column-gap: var(--gutter);
		grid-template-areas:
			'avatar            profile'
			'bio                   bio'
			'websites         websites'
			'testimonials testimonials'
			'socials           socials';
		grid-template-columns: auto 1fr;
	}
`;

const Layout = ({
	children,
	description,
	keywords,
	primary,
	secondary = null,
	title
}) => (
	<Main>
		<Global
			styles={css`
				body {
					--angle: calc(90deg + 75deg);
					--gutter: 20px;
					--primary: ${primary};
					--secondary: ${secondary || generateSecondary(primary)};

					background-attachment: fixed;
					background-color: var(--primary);
					background-image: linear-gradient(
						var(--angle),
						var(--primary) 0,
						var(--primary) 30%,
						var(--secondary) 100%
					);
					font-family: sans-serif;
					min-height: calc(100vh - (var(--gutter) * 2));
					padding: var(--gutter);

					> div#___gatsby {
						min-height: inherit;

						> div[role='group'] {
							display: grid;
							min-height: inherit;
							place-items: center;
						}
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
			`}
		/>

		<Helmet>
			<html lang="en" />

			<title>{title}</title>

			<meta name="description" contents={description} />
			<meta name="keywords" contents={keywords.join(',')} />
			<meta name="theme-color" contents={primary} />
		</Helmet>

		{children}
	</Main>
);

export default Layout;
