'use client';

import React from 'react';
import NextLink from 'next/link';

interface LinkProps {
	href: string;
	children: React.ReactNode;
	className?: string;
	audioUrl?: string;
	playOnHover?: boolean;
	playOnClick?: boolean;
	volume?: number;
	'aria-label'?: string;
	'aria-describedby'?: string;
	title?: string;
	rel?: string;
	target?: string;
	prefetch?: boolean;
	replace?: boolean;
	scroll?: boolean;
	shallow?: boolean;
	locale?: string;
	[key: string]: any;
}

const Link: React.FC<LinkProps> = ({
	href,
	children,
	className = '',
	audioUrl = '/audio/switch.mp3',
	playOnHover = true,
	playOnClick = true,
	volume = 0.1,
	'aria-label': ariaLabel,
	'aria-describedby': ariaDescribedBy,
	title,
	rel,
	target,
	prefetch,
	replace,
	scroll,
	shallow,
	locale,
	...props
}) => {
	// External link detection
	const isExternal = href.startsWith('http') || href.startsWith('//');
	const linkRel = isExternal ? rel || 'noopener noreferrer' : rel;
	const linkTarget = isExternal && !target ? '_blank' : target;

	// Simple audio play function
	const playSound = () => {
		if (!audioUrl) return;

		const audio = new Audio(audioUrl);
		audio.volume = volume;
		audio.play().catch(() => {
			// Silently handle autoplay restrictions
		});
	};

	const handleMouseEnter = () => {
		if (playOnHover) {
			playSound();
		}
	};

	const handleClick = () => {
		if (playOnClick) {
			playSound();
		}
	};

	const handleKeyDown = (e: React.KeyboardEvent) => {
		if ((e.key === 'Enter' || e.key === ' ') && playOnClick) {
			playSound();
		}
	};

	const handleFocus = () => {
		if (playOnHover) {
			playSound();
		}
	};

	return (
		<NextLink
			href={href}
			className={className}
			onMouseEnter={handleMouseEnter}
			onClick={handleClick}
			onKeyDown={handleKeyDown}
			onFocus={handleFocus}
			prefetch={prefetch}
			replace={replace}
			scroll={scroll}
			shallow={shallow}
			locale={locale}
			aria-label={ariaLabel || (isExternal ? `${children} (opens in new tab)` : undefined)}
			aria-describedby={ariaDescribedBy}
			title={title}
			rel={linkRel}
			target={linkTarget}
			{...props}
		>
			{children}
		</NextLink>
	);
};

export default Link;
