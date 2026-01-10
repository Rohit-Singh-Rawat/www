'use client';
import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { cn } from '@/lib/utils';

export const TextFlip = ({ words, duration = 3000 }: { words: string[]; duration?: number }) => {
	const [currentIndex, setCurrentIndex] = useState(0);
	const isFirstRender = useRef(true);

	useEffect(() => {
		const interval = setInterval(() => {
			isFirstRender.current = false;
			setCurrentIndex((prevIndex) => (prevIndex + 1) % words.length);
		}, duration);

		return () => clearInterval(interval);
	}, []);

	return (
		<>
			<motion.span
				layout
				className='relative w-fit overflow-hidden text-sm  text-muted-foreground h-[1rem] font-bespoke font-light'
			>
				<AnimatePresence mode='wait'>
					<motion.span
						key={currentIndex}
						initial={isFirstRender.current ? false : { y: -10, filter: 'blur(2px)', opacity: 0 }}
						animate={{
							y: 0,
							filter: 'blur(0px)',
							opacity: 1,
						}}
						exit={{ y: 10, filter: 'blur(2px)', opacity: 0 }}
						transition={{
							duration: 0.5,
						}}
						className={cn(' whitespace-nowrap')}
					>
						{words[currentIndex]}
					</motion.span>
				</AnimatePresence>
			</motion.span>
		</>
	);
};
