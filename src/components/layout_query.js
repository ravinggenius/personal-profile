import { StaticQuery, graphql } from 'gatsby';
import PropTypes from 'prop-types';
import React from 'react';

import Layout from './layout';

const LayoutQuery = ({ children }) => (
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
			<Layout title={data.site.siteMetadata.title}>{children}</Layout>
		)}
	/>
);

LayoutQuery.propTypes = {
	children: PropTypes.node.isRequired
};

export default LayoutQuery;
