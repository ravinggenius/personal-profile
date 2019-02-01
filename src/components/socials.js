import styled from '@emotion/styled';
import React, { PureComponent } from 'react';

import Section from './section';
import Email from './socials/email';
import Phone from './socials/phone';
import ThirdParty from './socials/third_party';
import Toggle from './socials/toggle';

const Wrapper = styled(Section)`
	display: flex;
	grid-area: socials;
	justify-content: space-evenly;
	flex-wrap: wrap;
`;

class Socials extends PureComponent {
	state = {
		isToggleOpen: false
	};

	handleToggle = () => {
		this.setState(({ isToggleOpen }) => ({
			isToggleOpen: !isToggleOpen
		}));
	};

	render() {
		const { email, phone, socials } = this.props;
		const { isToggleOpen } = this.state;

		if (email || phone || socials.length) {
			return (
				<Wrapper>
					<Phone display={phone} />
					<Email {...{ email }} />

					{isToggleOpen &&
						socials.map(({ code, handle }) => (
							<ThirdParty
								{...{ code, handle }}
								key={`${code}-${handle}`}
							/>
						))}

					<Toggle
						isOpen={isToggleOpen}
						onToggle={this.handleToggle}
					/>
				</Wrapper>
			);
		}
	}
}

export default Socials;
