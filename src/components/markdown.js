import React from 'react';
import rehypeReact from 'rehype-react';

const renderAst = new rehypeReact({
	createElement: React.createElement
}).Compiler;

const Markdown = ({ tree, wrapper: Wrapper }) => (
	<Wrapper>{renderAst(tree)}</Wrapper>
);

export default Markdown;
