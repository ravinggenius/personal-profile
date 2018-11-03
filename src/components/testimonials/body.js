import React from 'react';
import styled from 'react-emotion';

import Markdown from '../markdown';

const Section = styled.section``;

const Body = ({ body }) => <Markdown tree={body} wrapper={Section} />;

export default Body;
