import { StaticQuery, graphql } from 'gatsby';
import React from 'react';

import Bio from './bio';

const ProfileQuery = () => (
	<StaticQuery
		query={graphql`
			query BioQuery {
				bio: markdownRemark(fields: { slug: { eq: "/profile" } }) {
					htmlAst
				}
			}
		`}
		render={data => <Bio bio={data.bio.htmlAst} />}
	/>
);

export default ProfileQuery;
