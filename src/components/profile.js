import React from 'react';

import Introduction from './profile/introduction';
import Location from './profile/location';
import Name from './profile/name';
import Section from './section';

const Header = Section.withComponent('header');

const Profile = ({ name, introduction, location }) => (
	<Header>
		<Name {...{ name }} />
		<Introduction {...{ introduction }} />
		<Location {...{ location }} />
	</Header>
);

export default Profile;
