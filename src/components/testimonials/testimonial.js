import React from 'react';
import styled from 'react-emotion';

import Attribution from './attribution';
import Body from './body';

const Blockquote = styled.blockquote``;

const Testimonial = ({ attribution, body, relationship, url }) => (
	<Blockquote>
		<Body {...{ body }} />
		<Attribution {...{ relationship, url }} name={attribution} />
	</Blockquote>
);

export default Testimonial;
