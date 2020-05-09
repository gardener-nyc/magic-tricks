import React from 'react';
import DocsHeader from '../components/DocsHeader';
import DocsSidebar from '../components/DocsSidebar';
import DocsTableOfContents from '../components/DocsTableOfContents';
import {MDXProvider} from '@mdx-js/react';
import CodeBlock from '../components/CodeBlock';

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
				<div className="col c8--md c6--lg pt2 pt4--md pb4 rich-text">
					<MDXProvider
						components={{
							pre: CodeBlock
						}}>
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