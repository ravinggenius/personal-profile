import { StaticQuery, graphql } from 'gatsby';
import React from 'react';

import Websites from './websites';

const WebsitesQuery = () => (
	<StaticQuery
		query={graphql`
			query WebsitesQuery {
				websites: markdownRemark(fields: { slug: { eq: "/profile" } }) {
					frontmatter {
						websites {
							name
							url
						}
					}
				}
			}
		`}
		render={data => <Websites {...data.websites.frontmatter} />}
	/>
);

export default WebsitesQuery;
