import React from 'react';

const Toc = ({children}) => (
	<ul>{children.map((c, index) => (
		<li
			key={index}>
			<p>
				<a
					href={`#${c.title}`}>
					{c.title}
				</a>
			</p>
			{c.children.length > 0 && <Toc>{c.children}</Toc>}
		</li>
	))}</ul>
);

export default Toc;