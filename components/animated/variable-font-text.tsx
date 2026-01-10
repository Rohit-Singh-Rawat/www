'use client';

import { useState, useEffect, useCallback } from 'react';
import { AnimationOptions, motion, stagger, useAnimate } from 'motion/react';

interface TextProps {
	label: string;
	fromFontVariationSettings: string;
	toFontVariationSettings: string;
	transition?: AnimationOptions;
	staggerDuration?: number;
	staggerFrom?: 'first' | 'last' | 'center' | number;
	className?: string;
	onClick?: () => void;
	groupRef: React.RefObject<HTMLElement | null>;
}

const VariableFontHoverByLetter = ({
	label,
	fromFontVariationSettings = "'wght' 400, 'slnt' 0",
	toFontVariationSettings = "'wght' 900, 'slnt' -10",
	transition = {
		type: 'spring',
		duration: 0.7,
	},
	staggerDuration = 0.03,
	staggerFrom = 'first',
	className,
	onClick,
	groupRef,
	...props
}: TextProps) => {
	const [scope, animate] = useAnimate();
	const [isHovered, setIsHovered] = useState(false);
	const [isMobile, setIsMobile] = useState(false);

	const mergeTransition = useCallback(
		(baseTransition: AnimationOptions) => ({
			...baseTransition,
			delay: stagger(staggerDuration, {
				from: staggerFrom,
			}),
		}),
		[staggerDuration, staggerFrom]
	);

	const animateIn = useCallback(() => {
		if (isHovered) return;
		setIsHovered(true);

		const mergedTransition = mergeTransition(transition);
		animate('.letter', { fontVariationSettings: toFontVariationSettings }, mergedTransition);
	}, [isHovered, animate, toFontVariationSettings, mergeTransition, transition]);

	const animateOut = useCallback(() => {
		setIsHovered(false);

		const mergedTransition = mergeTransition(transition);
		animate('.letter', { fontVariationSettings: fromFontVariationSettings }, mergedTransition);
	}, [animate, fromFontVariationSettings, mergeTransition, transition]);

	// Check for mobile screen size
	useEffect(() => {
		const checkMobile = () => {
			setIsMobile(window.innerWidth < 640); // sm breakpoint
		};

		checkMobile();
		window.addEventListener('resize', checkMobile);

		return () => {
			window.removeEventListener('resize', checkMobile);
		};
	}, []);

	// Auto-animate on mobile after 300ms and keep it animated
	useEffect(() => {
		if (!isMobile) return;

		const timer = setTimeout(() => {
			animateIn();
		}, 300);

		return () => {
			clearTimeout(timer);
		};
	}, [isMobile, animateIn]);

	// Listen for group hover (only on non-mobile)
	useEffect(() => {
		if (!groupRef || isMobile) return;

		const groupElement = groupRef.current;
		if (!groupElement) return;

		const handleGroupMouseEnter = () => {
			animateIn();
		};

		const handleGroupMouseLeave = () => {
			animateOut();
		};

		groupElement.addEventListener('mouseenter', handleGroupMouseEnter);
		groupElement.addEventListener('mouseleave', handleGroupMouseLeave);

		return () => {
			groupElement.removeEventListener('mouseenter', handleGroupMouseEnter);
			groupElement.removeEventListener('mouseleave', handleGroupMouseLeave);
		};
	}, [groupRef, animateIn, animateOut, isMobile]);

	return (
		<motion.span
			className={className}
			onClick={onClick}
			ref={scope}
			{...props}
		>
			<span className='sr-only'>{label}</span>

			{label.split('').map((letter: string, i: number) => {
				return (
					<motion.span
						key={i}
						className='inline-block whitespace-pre letter'
						aria-hidden='true'
					>
						{letter}
					</motion.span>
				);
			})}
		</motion.span>
	);
};

export default VariableFontHoverByLetter;
