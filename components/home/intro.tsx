import { links } from '@/constant/wwwData';
const calculateAge = (birthDate: string) => {
	const birth = new Date(birthDate);
	const today = new Date();
	let age = today.getFullYear() - birth.getFullYear();
	const monthDiff = today.getMonth() - birth.getMonth();

	if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < birth.getDate())) {
		age--;
	}

	return age;
};

const isBirthday = (birthDate: string) => {
	const birth = new Date(birthDate);
	const today = new Date();
	return birth.getMonth() === today.getMonth() && birth.getDate() === today.getDate();
};

const AgeComponent = ({ birthDate }: { birthDate: string }) => {
	const age = calculateAge(birthDate);
	const isToday = isBirthday(birthDate);

	return (
		<span className='relative'>
			{isToday && (
				<span
					className='absolute -top-6 sm:-top-7 left-1/2 -translate-x-1/2 text-xs sm:text-xs text-primary animate-bounce bg-secondary/20 px-1.5 sm:px-2 py-0.5 sm:py-1 rounded-full border border-primary/20 whitespace-nowrap'
					role='status'
					aria-live='polite'
					aria-label='Birthday celebration message'
				>
					🎂 Happy Birthday! 🎉
				</span>
			)}
			<span aria-label={`${age} years old`}>{age} yo</span>
		</span>
	);
};
const ScribbleLink = ({
	href,
	children,
	animateInitial = true,
	className,
}: {
	href: string;
	children: React.ReactNode;
	animateInitial?: boolean;
	className?: string;
}) => {
	return (
		<a
			href={href}
			target='_blank'
			rel='noopener noreferrer'
			className={`group relative text-foreground inline-block hover:text-primary/80 transition-colors duration-300 ease-in-out ${className}`}
		>
			{children}
			<svg
				className={`absolute left-0 top-[90%] pointer-events-none stroke-foreground fill-none [stroke-dasharray:1] transition-[stroke-dashoffset] duration-[600ms] [transition-timing-function:cubic-bezier(0.7,0,0.3,1)] group-hover:[stroke-dashoffset:0] group-hover:duration-300 group-hover:[transition-timing-function:cubic-bezier(0.8,1,0.7,1)] ${
					animateInitial
						? 'animate-[scribble_600ms_cubic-bezier(0.8,1,0.7,1)_forwards]'
						: '[stroke-dashoffset:1]'
				}`}
				width='100%'
				height='9'
				viewBox='0 0 101 9'
			>
				<path
					d='M.426 1.973C4.144 1.567 17.77-.514 21.443 1.48 24.296 3.026 24.844 4.627 27.5 7c3.075 2.748 6.642-4.141 10.066-4.688 7.517-1.2 13.237 5.425 17.59 2.745C58.5 3 60.464-1.786 66 2c1.996 1.365 3.174 3.737 5.286 4.41 5.423 1.727 25.34-7.981 29.14-1.294'
					pathLength='1'
				/>
			</svg>
		</a>
	);
};

const Intro = () => {
	const birthDate = process.env.NEXT_PUBLIC_BIRTH_DATE || '2003-09-01';

	return (
		<section
			className='mt-6 sm:mt-8 space-y-4 sm:space-y-6 lg:space-y-8 font-thin'
			aria-labelledby='intro-heading'
			role='region'
		>
			<h2
				id='intro-heading'
				className='sr-only'
			>
				About Rohit Singh Rawat
			</h2>
			<p className='text-sm sm:text-base text-muted-foreground leading-relaxed sm:leading-relaxed'>
				Hey, I'm <span className='text-foreground'>Rohit Singh Rawat</span>, a{' '}
				<AgeComponent birthDate={birthDate} /> Software Engineer who finds beauty in{' '}
				<span className='text-foreground'>clarity</span>, the art of simplifying complexity, and the
				intersection of{' '}
				<span className='text-foreground italic font-bespoke font-light text-sm'>design</span> and{' '}
				<span className='text-foreground italic'>code</span>.
			</p>
			<p className='text-sm sm:text-base text-muted-foreground leading-relaxed sm:leading-relaxed'>
				I've worked at a startup and an agency as a{' '}
				<span className='text-foreground italic'>full-stack engineer</span>, and I'm currently
				working on freelance project. I'm a <span className='text-foreground'>gym rat</span>, a{' '}
				<span className='text-foreground italic'>Next.js</span> lover, and an
				<span className='text-foreground'> anime otaku</span>.
			</p>

			<p className='text-sm sm:text-base text-muted-foreground leading-relaxed sm:leading-relaxed'>
				You can reach out to me on{' '}
				<ScribbleLink
					href={links.x.url}
					className='font-bespoke font-light text-sm'
				>
					Twitter
				</ScribbleLink>{' '}
				or see my work on{' '}
				<ScribbleLink
					href={links.github.url}
					className='font-bespoke font-light text-sm'
				>
					GitHub
				</ScribbleLink>
				.
			</p>
		</section>
	);
};

export default Intro;
