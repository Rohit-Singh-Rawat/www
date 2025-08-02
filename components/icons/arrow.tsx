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

export default ArrowUpRight;
