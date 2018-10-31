import React from 'react';

import Layout from '../components/layout';
import Profile from '../components/profile_query';
import Websites from '../components/websites_query';

const IndexPage = () => (
	<Layout>
		<Profile />
		<Websites />
	</Layout>
);

export default IndexPage;
