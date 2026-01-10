'use client';

import { ElementType, useEffect, useState } from 'react';
import { motion, Variants } from 'motion/react';

import { cn } from '@/lib/utils';

interface TypewriterProps {
	/**
	 * Text to type out
	 */
	text: string;

	/**
	 * HTML Tag to render the component as
	 * @default span
	 */
	as?: ElementType;

	/**
	 * Speed of typing in milliseconds
	 * @default 50
	 */
	speed?: number;

	/**
	 * Initial delay before typing starts
	 * @default 0
	 */
	initialDelay?: number;

	/**
	 * Optional class name for styling
	 */
	className?: string;

	/**
	 * Whether to show the cursor
	 * @default true
	 */
	showCursor?: boolean;

	/**
	 * Character or React node to use as cursor
	 * @default "|"
	 */
	cursorChar?: string | React.ReactNode;

	/**
	 * Animation variants for cursor
	 */
	cursorAnimationVariants?: {
		initial: Variants['initial'];
		animate: Variants['animate'];
	};

	/**
	 * Optional class name for cursor styling
	 */
	cursorClassName?: string;

	/**
	 * Opacity of the ghost/shadow text
	 * @default 0.2
	 */
	ghostOpacity?: number;

	/**
	 * Whether to show ghost text effect
	 * @default true
	 */
	showGhost?: boolean;
}

const Typewriter = ({
	text,
	as: Tag = 'span',
	speed = 50,
	initialDelay = 0,
	className,
	showCursor = true,
	cursorChar = '|',
	cursorClassName = 'ml-1',
	ghostOpacity = 0.2,
	showGhost = true,
	cursorAnimationVariants = {
		initial: { opacity: 0 },
		animate: {
			opacity: 1,
			transition: {
				duration: 0.01,
				repeat: Infinity,
				repeatDelay: 0.4,
				repeatType: 'reverse',
			},
		},
	},
	...props
}: TypewriterProps & React.HTMLAttributes<HTMLElement>) => {
	const [displayText, setDisplayText] = useState('');
	const [currentIndex, setCurrentIndex] = useState(0);

	useEffect(() => {
		if (currentIndex >= text.length) return;

		const timeout = setTimeout(
			() => {
				setDisplayText((prev) => prev + text[currentIndex]);
				setCurrentIndex((prev) => prev + 1);
			},
			currentIndex === 0 ? initialDelay + speed : speed
		);

		return () => clearTimeout(timeout);
	}, [currentIndex, text, speed, initialDelay]);

	return (
		<Tag
			className={cn(
				'inline-block relative min-w-[4ch] whitespace-pre-wrap tracking-tight',
				className
			)}
			{...props}
		>
			{/* Typed text - takes up space in normal flow */}
			<span className='inline-block whitespace-pre-line'>
				{displayText.split('').map((char, i) => (
					<motion.span
						key={i}
						initial={{ opacity: 0 }}
						animate={{ opacity: 1 }}
						transition={{ duration: 0.1 }}
						className='inline-block'
					>
						{char === ' ' ? '\u00A0' : char}
					</motion.span>
				))}
				{showCursor && currentIndex >= text.length && (
					<motion.span
						variants={cursorAnimationVariants}
						className={cn('inline-block', cursorClassName)}
						initial='initial'
						animate='animate'
					>
						{cursorChar}
					</motion.span>
				)}
			</span>
			{/* Ghost text - absolutely positioned below */}
			<span
				className={cn(
					'absolute top-0 left-0 inline-block pointer-events-none select-none',
					showGhost ? '' : 'opacity-0'
				)}
				style={showGhost ? { opacity: ghostOpacity } : undefined}
				aria-hidden='true'
			>
				{text}
			</span>
		</Tag>
	);
};

export default Typewriter;
