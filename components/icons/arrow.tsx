import React, { SVGProps } from 'react';

type IconProps = SVGProps<SVGSVGElement> & {
	secondaryfill?: string;
	strokewidth?: number;
	title?: string;
};

function ArrowUpRight({ title = 'badge 13', ...props }: IconProps) {
	return (
		<svg
			height='20'
			width='20'
			viewBox='0 0 20 20'
			xmlns='http://www.w3.org/2000/svg'
			{...props}
		>
			<title>{title}</title>
			<g fill='#7a6464'>
				<line
					fill='none'
					stroke='#7a6464'
					strokeLinecap='round'
					strokeLinejoin='round'
					strokeWidth='2'
					x1='4'
					x2='16'
					y1='16'
					y2='4'
				/>
				<polyline
					fill='none'
					points='16 11 16 4 9 4'
					stroke='#7a6464'
					strokeLinecap='round'
					strokeLinejoin='round'
					strokeWidth='2'
				/>
			</g>
		</svg>
	);
}

type RightArrowProps = SVGProps<SVGSVGElement>;

const RightArrow = ({ className, ...props }: RightArrowProps) => {
	return (
		<svg
			className={` ${className || ''}`}
			width='10'
			height='10'
			viewBox='0 0 10 10'
			aria-hidden='true'
			{...props}
		>
			<g fillRule='evenodd'>
				<line
					className='transition-all duration-300 [stroke-dasharray:9] [stroke-dashoffset:9] group-hover:[stroke-dashoffset:0]'
					fill='none'
					stroke='currentColor'
					strokeWidth='1'
					strokeLinecap='round'
					x1='1'
					y1='5'
					x2='9'
					y2='5'
				/>
				<path
					className='transition-transform duration-300 group-hover:translate-x-1 group-hover:delay-0 delay-100'
					fill='none'
					stroke='currentColor'
					strokeWidth='1'
					strokeLinecap='round'
					strokeLinejoin='round'
					d='M1 1l4 4-4 4'
				/>
			</g>
		</svg>
	);
};

export { RightArrow };

export default ArrowUpRight;
