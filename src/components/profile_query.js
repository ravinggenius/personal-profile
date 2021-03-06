import { StaticQuery, graphql } from 'gatsby';
import React from 'react';

import Profile from './profile';

const ProfileQuery = () => (
	<StaticQuery
		query={graphql`
			query ProfileQuery {
				profile: markdownRemark(fields: { slug: { eq: "/profile" } }) {
					frontmatter {
						name
						introduction
						location
					}
				}
			}
		`}
		render={data => <Profile {...data.profile.frontmatter} />}
	/>
);

export default ProfileQuery;
