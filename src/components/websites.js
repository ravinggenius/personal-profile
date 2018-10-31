import React from 'react';
import styled from 'react-emotion';

import Section from './section';

const Anchor = styled.a``;

const Websites = ({ websites }) => {
	if (websites.length) {
		return (
			<Section>
				{websites.map(({ name, url }) => (
					<Anchor href={url} key={url}>
						{name}
					</Anchor>
				))}
			</Section>
		);
	}
};

export default Websites;
