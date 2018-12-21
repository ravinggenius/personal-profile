import React from 'react';
import styled from 'react-emotion';

import Markdown from './markdown';
import Section from './section';

const Wrapper = styled(Section)`
	grid-area: bio;
`;

const Bio = ({ bio }) => <Markdown tree={bio} wrapper={Wrapper} />;

export default Bio;
