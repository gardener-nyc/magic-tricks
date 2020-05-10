import React from 'react';
import DocsHeader from '../components/DocsHeader';
import DocsSidebar from '../components/DocsSidebar';
import DocsTableOfContents from '../components/DocsTableOfContents';
import {MDXProvider} from '@mdx-js/react';
import CodeBlock from '../components/CodeBlock';

const components = {
	pre: CodeBlock,
	h1: props => <h1 {...props} id={props.children} />,
	h2: props => <h2 {...props} id={props.children} />,
	h3: props => <h2 {...props} id={props.children} />,
	h4: props => <h4 {...props} id={props.children} />,
	h5: props => <h5 {...props} id={props.children} />,
	h6: props => <h6 {...props} id={props.children} />,
};

export default ({
	links,
	activePathname,
	tableOfContents,
	children
}) => (
	<React.Fragment>
		<DocsHeader />
		<div className="grid-container contained">
			<div className="row">
				<div className="sidebar__sticky col c4 c3--lg show--md pt2 pb2">
					<DocsSidebar
						links={links}
						activePathname={activePathname}
					/>
				</div>
				<div className="col c8--md c6--lg pt2 pb4 rich-text">
					<MDXProvider
						components={components}>
						{children}
					</MDXProvider>
				</div>
				<div className="sidebar__sticky col c3 show--lg pt2 pb2">
					<DocsTableOfContents>{tableOfContents}</DocsTableOfContents>
				</div>
			</div>
		</div>
	</React.Fragment>
);