import React from 'react';
import styled from 'react-emotion';

import Section from './section';

const Aside = styled(Section.withComponent('aside'))``;

const Anchor = styled.a`
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
