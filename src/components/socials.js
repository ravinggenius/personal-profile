import React from 'react';
import styled from 'react-emotion';

import Section from './section';
import Email from './socials/email';
import Phone from './socials/phone';
import ThirdParty from './socials/third_party';

const Wrapper = styled(Section)`
	display: flex;
	justify-content: space-evenly;
	flex-wrap: wrap;
`;

const Socials = ({ email, phone, socials }) => {
	if (email || phone || socials.length) {
		return (
			<Wrapper>
				<Phone display={phone} />
				<Email {...{ email }} />
				{socials.map(({ code, handle }) => (
					<ThirdParty
						{...{ code, handle }}
						key={`${code}-${handle}`}
					/>
				))}
			</Wrapper>
		);
	}
};

export default Socials;
