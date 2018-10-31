import { StaticQuery, graphql } from 'gatsby';
import React from 'react';

import Socials from './socials';

const SocialsQuery = () => (
	<StaticQuery
		query={graphql`
			query SocialsQuery {
				socials: markdownRemark(fields: { slug: { eq: "/profile" } }) {
					frontmatter {
						email
						phone
						socials {
							code
							username
						}
					}
				}
			}
		`}
		render={data => <Socials {...data.socials.frontmatter} />}
	/>
);

export default SocialsQuery;
