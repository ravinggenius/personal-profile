import React from 'react';
import styled from 'react-emotion';

import Markdown from '../markdown';

const Aside = styled.aside``;

const Bio = ({ bio }) => <Markdown tree={bio} wrapper={Aside} />;

export default Bio;
