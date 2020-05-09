import React from 'react';
import Highlight, {defaultProps} from 'prism-react-renderer';
import theme from 'prism-react-renderer/themes/oceanicNext';

export default ({
	children,
}) => (
	<Highlight
		{...defaultProps}
		theme={theme}
		code={children.props.children}
		language={children.props.className.replace('language-', '')}>
		{({className, style, tokens, getLineProps, getTokenProps}) => (
			<pre
				className={className}
				style={{...style}}>
				{tokens.map((line, i) => (
					<div key={i} {...getLineProps({line, key: i})}>
						<span
							className="line-number mr1 o50">
							{i + 1}
						</span>
						{line.map((token, key) => (
							<span key={key} {...getTokenProps({token, key})} />
						))}
					</div>
				))}
			</pre>
		)}
	</Highlight>
);