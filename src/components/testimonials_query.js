import { StaticQuery, graphql } from 'gatsby';
import React from 'react';

import Testimonials from './testimonials';

const TestimonialsQuery = () => (
	<StaticQuery
		query={graphql`
			query TestimonialsQuery {
				testimonials: allMarkdownRemark(
					filter: { frontmatter: { isPublished: { eq: true } } }
					sort: { fields: frontmatter___position, order: ASC }
				) {
					edges {
						node {
							id
							frontmatter {
								attribution
								relationship
								url
							}
							htmlAst
						}
					}
				}
			}
		`}
		render={data => (
			<Testimonials
				testimonials={data.testimonials.edges.map(({ node }) => ({
					...node.frontmatter,
					id: node.id,
					body: node.htmlAst
				}))}
			/>
		)}
	/>
);

export default TestimonialsQuery;
