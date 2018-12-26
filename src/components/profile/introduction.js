import React from 'react';
import styled from 'react-emotion';

const Span = styled.span`
	font-size: larger;
`;

const Introduction = ({ introduction }) => <Span>{introduction}</Span>;

export default Introduction;
