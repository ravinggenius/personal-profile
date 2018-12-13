import { StaticQuery, graphql } from 'gatsby';
import PropTypes from 'prop-types';
import React from 'react';

import Layout from './layout';

const LayoutQuery = ({ children }) => (
	<StaticQuery
		query={graphql`
			query SiteTitleQuery {
				profile: markdownRemark(fields: { slug: { eq: "/profile" } }) {
					frontmatter {
						primary
						secondary
					}
				}
				site {
					siteMetadata {
						title
					}
				}
			}
		`}
		render={data => (
			<Layout {...data.profile.frontmatter} {...data.site.siteMetadata}>
				{children}
			</Layout>
		)}
	/>
);

LayoutQuery.propTypes = {
	children: PropTypes.node.isRequired
};

export default LayoutQuery;
