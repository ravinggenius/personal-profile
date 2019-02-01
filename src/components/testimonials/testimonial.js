import styled from '@emotion/styled';
import React from 'react';

import Attribution from './attribution';
import Body from './body';

const Blockquote = styled.blockquote`
	margin: 1em 0;
	position: relative;

	&::before {
		--width: 0.5ch;
		background-color: var(--secondary);
		border-radius: 2px;
		content: '';
		height: 100%;
		left: calc((var(--gutter) + var(--width)) / -2);
		position: absolute;
		width: var(--width);
	}
`;

const Testimonial = ({ attribution, body, relationship, url }) => (
	<Blockquote>
		<Body {...{ body }} />
		<Attribution {...{ relationship, url }} name={attribution} />
	</Blockquote>
);

export default Testimonial;
