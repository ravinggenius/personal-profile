import { css } from '@emotion/core';
import React from 'react';

import Section from './section';
import Testimonial from './testimonials/testimonial';

const Testimonials = ({ testimonials }) => {
	if (testimonials.length) {
		return (
			<Section
				css={css`
					grid-area: testimonials;
				`}
			>
				{testimonials.map(
					({ attribution, body, id, relationship, url }) => (
						<Testimonial
							key={id}
							{...{ attribution, body, relationship, url }}
						/>
					)
				)}
			</Section>
		);
	}
};

export default Testimonials;
