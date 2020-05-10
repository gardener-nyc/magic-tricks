import React from 'react';
import {Link} from 'gatsby';
import {version} from '../../../package.json';

export default () => (
	<header className="header bg--white bb--black">
		<div className="grid-container">
			<div className="row">
				<div className="col c4 show--md">
					<div className="header__height">
						<a
							target="_blank"
							to="https://gardener.nyc"
							className="mono o50">
							← gardener.nyc
						</a>
					</div>
				</div>
				<div className="col c4--md">
					<div className="header__height">
						<p className="tc">
							<Link
								to="/"
								className="mono">
								magic tricks
								<span className="o50"> {version}</span>
							</Link>
						</p>
					</div>
				</div>
				<div className="col c4 show--md">
					<div className="header__height">
						<p className="tr">
							<a
								target="_blank"
								href="https://github.com/gardener-nyc/magic-tricks"
								className="mono o50">
								github
							</a>
						</p>
					</div>
				</div>
			</div>
		</div>
	</header>
);