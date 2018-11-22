import React from 'react';
import styled from 'react-emotion';

import Introduction from './profile/introduction';
import Location from './profile/location';
import Name from './profile/name';
import Section from './section';

const Header = styled(Section.withComponent('header'))`
	text-align: center;
`;

const Profile = ({ name, introduction, location }) => (
	<Header>
		<Name {...{ name }} />
		<Introduction {...{ introduction }} />
		<Location {...{ location }} />
	</Header>
);

export default Profile;
