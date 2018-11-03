import React from 'react';
import styled from 'react-emotion';

const Anchor = styled.a``;
const Footer = styled.footer``;
const Cite = styled.cite``;

const Attribution = ({ name, relationship, url }) => {
	const mention = url ? <Anchor href={url}>{name}</Anchor> : name;

	return (
		<Footer>
			<Cite>
				{mention} {relationship}
			</Cite>
		</Footer>
	);
};

export default Attribution;
