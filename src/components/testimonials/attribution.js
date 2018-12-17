import { OutboundLink } from 'gatsby-plugin-google-analytics';
import React from 'react';
import styled from 'react-emotion';

const Anchor = styled(OutboundLink)``;
const Footer = styled.footer``;
const Cite = styled.cite``;

const Attribution = ({ name, relationship, url }) => {
	const mention = url ? <Anchor href={url}>{name}</Anchor> : name;

	return (
		<Footer>
			<Cite>
				{mention}
				{name && relationship ? ', ' : null}
				{relationship}
			</Cite>
		</Footer>
	);
};

export default Attribution;
