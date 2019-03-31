import styled from '@emotion/styled';
import React from 'react';

import Introduction from './profile/introduction';
import Location from './profile/location';
import Name from './profile/name';
import Section from './section';

const Header = styled(Section.withComponent('header'))`
	align-items: center;
	display: flex;
	flex-direction: column;
	grid-area: profile;
	justify-content: center;
`;

const Profile = ({ name, introduction, location }) => (
	<Header>
		<Name {...{ name }} />
		<Introduction {...{ introduction }} />
		<Location {...{ location }} />
	</Header>
);

export default Profile;
