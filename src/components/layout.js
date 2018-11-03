import { StaticQuery, graphql } from 'gatsby';
import PropTypes from 'prop-types';
import React from 'react';
import styled, { injectGlobal } from 'react-emotion';
import Helmet from 'react-helmet';

import 'normalize.css';

injectGlobal`
	body {
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
	}
`;

const Main = styled.main`
	background-color: white;
	margin: 0 auto;
	min-height: 80vh;
	width: 500px;
`;

const Layout = ({ children }) => (
	<StaticQuery
		query={graphql`
			query SiteTitleQuery {
				site {
					siteMetadata {
						title
					}
				}
			}
		`}
		render={data => (
			<Main>
				<Helmet
					title={data.site.siteMetadata.title}
					meta={[
						{ name: 'description', content: 'Sample' },
						{ name: 'keywords', content: 'sample, something' }
					]}
				>
					<html lang="en" />
				</Helmet>

				{children}
			</Main>
		)}
	/>
);

Layout.propTypes = {
	children: PropTypes.node.isRequired
};

export default Layout;
