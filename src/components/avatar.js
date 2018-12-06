import Img from 'gatsby-image';
import React from 'react';
import styled from 'react-emotion';

const Image = styled(Img)`
	border-radius: 50%;
	left: calc(${({ fixed: { width } }) => `50% - ${width / 2}px`});
	margin: calc(
			${({ fixed: { height } }) => `-${height / 2}px`} - var(--gutter)
		)
		0 0 0;
`;

const Avatar = ({ ...ambient }) => <Image {...ambient} Tag="figure" />;

export default Avatar;
