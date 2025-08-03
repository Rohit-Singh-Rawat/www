export default function NoiseBackground() {
	return (
		<div
			className='fixed top-0 left-0 w-full h-full pointer-events-none z-10'
			aria-hidden='true'
			role='presentation'
		>
			<div className='bg-[url("/images/noise2.png")] bg-[size:128px] w-full h-full bg-center bg-repeat opacity-[0.03]'></div>
		</div>
	);
}
