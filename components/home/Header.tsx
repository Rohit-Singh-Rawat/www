import Link from '@/components/ui/Link';

type Props = {};
const Header = (props: Props) => {
	return (
		<header
			className='flex items-start justify-between w-full'
			role='banner'
		>
			<div>
				<h1 className='text-lg font-normal'>Rohit Singh Rawat</h1>
				<p
					className='text-sm text-muted-foreground font-bespoke font-light'
					role='doc-subtitle'
				>
					Software Engineer
				</p>
			</div>
			<nav
				className='flex flex-row gap-4'
				role='navigation'
				aria-label='Main navigation'
			>
				{[
					{ href: '/', label: 'Home', ariaLabel: 'Go to home page' },
					{
						href: 'https://craft.rohitsinghrawat.com/',
						label: 'Crafts',
						ariaLabel: 'Go to crafts page',
					},
					{ href: '/blogs', label: 'Blogs', ariaLabel: 'Go to blogs page' },
				].map((link) => (
					<Link
						key={link.href}
						href={link.href}
						className='text-sm rounded-sm hover:text-muted-foreground transition-colors duration-300 ease-in-out'
						aria-label={link.ariaLabel}
					>
						<span className='relative before:content-[""] before:absolute before:bottom-0 before:left-0 before:w-full before:h-[1px] before:bg-foreground before:origin-right before:scale-x-0 before:transition-transform before:duration-300 hover:before:origin-left hover:before:scale-x-100'>
							{link.label}
						</span>
					</Link>
				))}
			</nav>
		</header>
	);
};
export default Header;
