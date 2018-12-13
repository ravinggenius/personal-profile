import React from 'react';
import styled from 'react-emotion';

const Address = styled.address`
	font-style: normal;
`;

const Location = ({ location }) => <Address>{location}</Address>;

export default Location;
