import styled from '@emotion/styled';
import { OutboundLink } from 'gatsby-plugin-google-analytics';
import React from 'react';

import Section from './section';

const Aside = styled(Section.withComponent('aside'))`
	grid-area: websites;
`;

const Anchor = styled(OutboundLink)`
	display: block;
	width: fit-content;
`;

const Websites = ({ websites }) => {
	if (websites.length) {
		return (
			<Aside>
				{websites.map(({ name, url }) => (
					<Anchor href={url} key={url}>
						{name}
					</Anchor>
				))}
			</Aside>
		);
	}
};

export default Websites;
