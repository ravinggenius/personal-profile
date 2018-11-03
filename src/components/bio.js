import React from 'react';

import Markdown from './markdown';
import Section from './section';

const Bio = ({ bio }) => <Markdown tree={bio} wrapper={Section} />;

export default Bio;
