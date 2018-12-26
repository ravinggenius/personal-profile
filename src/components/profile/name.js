import React from 'react';
import styled from 'react-emotion';

const H1 = styled.h1`
	font-variant: small-caps;
	margin: 0;
`;

const Name = ({ name }) => <H1>{name}</H1>;

export default Name;
