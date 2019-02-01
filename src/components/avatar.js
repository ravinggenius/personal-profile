import styled from '@emotion/styled';
import Img from 'gatsby-image';
import React from 'react';

const Image = styled(Img)`
	border-radius: 50%;
	grid-area: avatar;
	margin: 0;
`;

const Avatar = ({ ...ambient }) => <Image {...ambient} Tag="figure" />;

export default Avatar;
