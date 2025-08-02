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
	return (
		birth.getMonth() === today.getMonth() && birth.getDate() === today.getDate()
	);
};

const AgeComponent = ({ birthDate }: { birthDate: string }) => {
	const age = calculateAge(birthDate);
	const isToday = isBirthday(birthDate);

	return (
		<span className='relative'>
			{isToday && (
				<span className='absolute -top-6 sm:-top-7 left-1/2 -translate-x-1/2 text-xs sm:text-xs text-primary animate-bounce bg-secondary/20 px-1.5 sm:px-2 py-0.5 sm:py-1 rounded-full border border-primary/20 whitespace-nowrap'>
					🎂 Happy Birthday! 🎉
				</span>
			)}
			{age}-year-old
		</span>
	);
};

const Intro = () => {
	const birthDate = process.env.NEXT_PUBLIC_BIRTH_DATE || '2003-09-01';

	return (
		<div className='mt-6 sm:mt-8 space-y-4 sm:space-y-6 lg:space-y-8 font-thin'>
			<p className='text-sm sm:text-base text-muted-foreground leading-relaxed sm:leading-relaxed'>
				Hey, I'm <span className='text-foreground'>Rohit Singh Rawat</span>, a{' '}
				<AgeComponent birthDate={birthDate} /> Software Engineer who finds
				beauty in <span className='text-foreground'>clarity</span>,{' '}
				<span className='text-foreground'>design</span>, and the complexity
				behind simple things.
			</p>
			<p className='text-sm sm:text-base text-muted-foreground leading-relaxed sm:leading-relaxed'>
				I started coding in late 2022 and have since worked at a{' '}
				<span className='text-foreground'>startup</span> and an agency as a{' '}
				<span className='text-foreground'>full-stack engineer</span>, working
				across <span className='text-foreground'>frontend</span>,{' '}
				<span className='text-foreground'>infrastructure</span>, and{' '}
				<span className='text-foreground'>scalable architectures</span>.
			</p>
			<p className='text-sm sm:text-base text-muted-foreground leading-relaxed sm:leading-relaxed'>
				<span className='text-foreground'>Next.js</span> quickly became my
				favorite <span className='text-foreground'>playground</span>. When I'm
				not coding, you'll find me at the{' '}
				<span className='text-foreground'>gym</span>, playing badminton, or{' '}
				<span className='text-foreground'>web surfing</span>.
			</p>
		</div>
	);
};

export default Intro;
