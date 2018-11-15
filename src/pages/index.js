import React from 'react';

import Layout from '../components/layout_query';
import Bio from '../components/bio_query';
import Profile from '../components/profile_query';
import Socials from '../components/socials_query';
import Testimonials from '../components/testimonials_query';
import Websites from '../components/websites_query';

const IndexPage = () => (
	<Layout>
		<Profile />
		<Bio />
		<Websites />
		<Testimonials />
		<Socials />
	</Layout>
);

export default IndexPage;
