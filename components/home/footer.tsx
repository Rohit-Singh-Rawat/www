import Link from '@/components/ui/Link';
import VisitorCounter from '../analytics/VisitorCounter';

export default function Footer() {
	return (
		<>
			<p className='text-xs sm:text-sm mt-6 sm:mt-8 text-left text-muted-foreground mb-2 w-full'>
				Previous portfolio ?{' '}
				<Link
					href={`${process.env.NEXT_PUBLIC_OLD_PORTFOLIO_URL}`}
					target='_blank'
					rel='noopener noreferrer'
					className='text-foreground hover:underline hover:decoration-muted-foreground hover:underline-offset-4   rounded-sm'
					aria-label='View previous portfolio version (opens in new tab)'
				>
					here
				</Link>
			</p>
			<footer
				className='w-full py-4 sm:py-5 border-t border-border/50'
				role='contentinfo'
			>
				<div className='flex flex-col sm:flex-row items-center justify-between gap-2 sm:gap-0 text-xs sm:text-sm text-muted-foreground'>
					<div className='order-2 sm:order-1'>
						<p>© {new Date().getFullYear()} RohitSinghRawat. All rights reserved.</p>
					</div>
					<div className='flex items-center gap-3 sm:gap-4 order-1 sm:order-2'>
						<time
							className='text-xs sm:text-sm'
							dateTime={new Date().toISOString()}
							aria-label='Current time in India Standard Time'
						>
							{new Date().toLocaleTimeString('en-US', {
								hour12: false,
								timeZone: 'Asia/Kolkata',
								hour: '2-digit',
								minute: '2-digit',
							})}{' '}
							IST
						</time>
						<span
							className='hover:text-foreground transition-colors text-xs sm:text-sm cursor-default'
							title='Total visitors: 12,847'
							role='status'
							aria-label='Website visitor count: 12,847'
						>
							<VisitorCounter />
						</span>
					</div>
				</div>
			</footer>
		</>
	);
}
