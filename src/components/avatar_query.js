import { StaticQuery, graphql } from 'gatsby';
import React from 'react';

import Avatar from './avatar';

const AvatarQuery = () => (
	<StaticQuery
		query={graphql`
			query AvatarQuery {
				avatar: file(relativePath: { eq: "profile.jpeg" }) {
					childImageSharp {
						fixed(height: 150, width: 150) {
							height
							width
							base64
							src
							srcSet
							srcWebp
							srcSetWebp
						}
					}
				}
			}
		`}
		render={data => <Avatar {...data.avatar.childImageSharp} />}
	/>
);

export default AvatarQuery;
