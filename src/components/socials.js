import React from 'react';

import Section from './section';
import Email from './socials/email';
import Phone from './socials/phone';
import ThirdParty from './socials/third_party';

const Socials = ({ email, phone, socials }) => {
	if (email || phone || socials.length) {
		return (
			<Section>
				<Phone display={phone} />
				<Email {...{ email }} />
				{socials.map(({ code, handle }) => (
					<ThirdParty
						{...{ code, handle }}
						key={`${code}-${handle}`}
					/>
				))}
			</Section>
		);
	}
};

export default Socials;
