import styled from '@emotion/styled';
import React from 'react';

const Span = styled.span`
	font-size: larger;
`;

const Introduction = ({ introduction }) => <Span>{introduction}</Span>;

export default Introduction;
