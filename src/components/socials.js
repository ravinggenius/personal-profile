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
				{socials.map(({ code, username }) => (
					<ThirdParty
						{...{ code, username }}
						key={`${code}-${username}`}
					/>
				))}
			</Section>
		);
	}
};

export default Socials;
