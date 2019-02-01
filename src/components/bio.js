import styled from '@emotion/styled';
import React from 'react';

import Markdown from './markdown';
import Section from './section';

const Wrapper = styled(Section)`
	grid-area: bio;
`;

const Bio = ({ bio }) => <Markdown tree={bio} wrapper={Wrapper} />;

export default Bio;
