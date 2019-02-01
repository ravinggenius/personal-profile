import styled from '@emotion/styled';
import React from 'react';

import Markdown from '../markdown';

const Section = styled.section``;

const Body = ({ body }) => <Markdown tree={body} wrapper={Section} />;

export default Body;
