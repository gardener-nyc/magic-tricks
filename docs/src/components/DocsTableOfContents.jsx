import React from 'react';
import scrollTo from '../../../lib/scrollTo';

const scrollToEl = event => {
	const hashEl = document.getElementById(event.target.getAttribute('href').replace('#', ''));
	
	if (!hashEl) return;
	
	event.preventDefault();

	scrollTo(hashEl.offsetTop - 65); // header height
};

const Toc = ({children}) => (
	<ul>{children.map((c, index) => (
		<li
			key={index}>
			<p>
				<a
					onClick={scrollToEl}
					href={`#${c.title}`}>
					{c.title}
				</a>
			</p>
			{c.children.length > 0 && <Toc>{c.children}</Toc>}
		</li>
	))}</ul>
);

export default Toc;