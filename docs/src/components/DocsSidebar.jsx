import React from 'react';
import classNames from 'classnames';
import {Link} from 'gatsby';

export default ({
	links,
	activePathname
}) => (
	<div className="sidebar">
		<ul>{links.map(link => (
			<li
				className="mb1"
				key={link.url}>
				<Link
					to={link.url}
					className={classNames('link--menu fw', {
						active: link.url === activePathname
					})}>
					{link.title}
				</Link>
			</li>
		))}</ul>
	</div>
);