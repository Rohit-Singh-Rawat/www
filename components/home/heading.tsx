import React from 'react';

interface HeadingProps {
	title: string;
	subtitle?: string;
	className?: string;
	level?: 1 | 2 | 3 | 4 | 5 | 6;
}

const Heading = ({
	title,
	subtitle,
	className = '',
	level = 2,
}: HeadingProps) => {
	const headingElement = React.createElement(
		`h${level}`,
		{ className: 'text-base sm:text-lg font-normal' },
		title
	);

	return (
		<header className={`${className}`}>
			{headingElement}
			{subtitle && <p className='text-sm text-muted-foreground'>{subtitle}</p>}
		</header>
	);
};

export default Heading;
