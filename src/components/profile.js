import React from 'react';

import Bio from './profile/bio';
import Introduction from './profile/introduction';
import Location from './profile/location';
import Name from './profile/name';
import Section from './section';

const Profile = ({ bio, name, introduction, location }) => (
	<Section>
		<Name {...{ name }} />
		<Introduction {...{ introduction }} />
		<Location {...{ location }} />
		<Bio {...{ bio }} />
	</Section>
);

export default Profile;
