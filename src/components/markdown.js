import React from 'react';
import rehypeReact from 'rehype-react';

const renderAst = tree => {
	const reply = new rehypeReact({
		createElement: React.createElement
	}).Compiler(tree);

	return reply.type === 'div' ? <>{reply.props.children}</> : reply;
};

const Markdown = ({ tree, wrapper: Wrapper }) => (
	<Wrapper>{renderAst(tree)}</Wrapper>
);

export default Markdown;
