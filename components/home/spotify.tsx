import { getNowPlaying, getRecentlyPlayed } from '@/lib/spotify';
import Image from 'next/image';
import Link from 'next/link';
import ArrowUpRight from '@/components/icons/arrow';

export default async function Spotify() {
	let nowPlayingData = await getNowPlaying();

	if (typeof nowPlayingData === 'string') {
		const recentlyPlayedData = await getRecentlyPlayed();

		if (
			typeof recentlyPlayedData !== 'string' &&
			recentlyPlayedData.tracks.length > 0
		) {
			const song = recentlyPlayedData.tracks[0];
			return (
				<div className='flex flex-col w-full mt-10 -space-y-1'>
					<div className='flex gap-x-2 p-1 bg-accent border border-border/50 shadow-inner shadow-black/20 rounded-md w-full items-end z-10'>
						<div className='relative w-[50px] h-[50px] flex-shrink-0'>
							<Image
								alt={song.title}
								width={50}
								height={50}
								className='rounded-sm object-cover z-10 relative'
								src={song.albumImageUrl}
							/>
							<div className='absolute -right-4 top-1/2 -translate-y-1/2 w-[45px] h-[45px] bg-gradient-to-br from-muted via-muted-foreground/50 to-border rounded-full shadow-lg opacity-80 z-0'>
								<div className='absolute inset-0 rounded-full bg-gradient-to-r from-transparent via-foreground/10 to-transparent'></div>
							</div>
						</div>
						<div className='flex flex-col overflow-hidden w-full ml-4'>
							<Link
								href={song.songUrl}
								target='_blank'
								className='flex items-center gap-1 group'
							>
								<p className='truncate text-foreground group-hover:underline'>
									{song.title}
								</p>
								<ArrowUpRight className='w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity' />
							</Link>
							<p className='truncate text-muted-foreground font-light'>
								{song.artist}
							</p>
						</div>
					</div>
					<div className='flex flex-row gap-x-1.5 items-center pl-1 border border-border/50 shadow-inner shadow-black/20 rounded-md mx-1 py-0.5 pt-1.5 animate-in slide-in-from-top-2 duration-300 delay-500'>
						<span className='relative flex h-2 w-2'>
							<span className='relative inline-flex rounded-full h-2 w-2 bg-muted-foreground/30'></span>
						</span>
						<div className='text-xs text-muted-foreground/50'>
							Last played recently at{' '}
							{new Date(song.playedAt).toLocaleString('en-IN', {
								timeZone: 'Asia/Kolkata',
								hour: '2-digit',
								minute: '2-digit',
								day: '2-digit',
								month: 'short',
							})}{' '}
							IST
						</div>
					</div>
				</div>
			);
		} else {
			return (
				<div className='flex flex-col w-full my-10 p-4 text-center text-muted-foreground border border-border/50 rounded-md'>
					🎶 No tracks available right now. 🎶
				</div>
			);
		}
	}

	const { artist, songUrl, title, albumImageUrl, isPlaying } = nowPlayingData;

	return (
		<div className='flex flex-col w-full mt-10 -space-y-1'>
			<div className='flex gap-x-2 p-1 bg-accent border border-border/50 shadow-inner shadow-black/20 rounded-md w-full items-end z-10'>
				<div className='relative w-[50px] h-[50px] flex-shrink-0'>
					<Image
						alt={title}
						width={50}
						height={50}
						className='rounded-sm object-cover z-10 relative'
						src={albumImageUrl}
					/>
					<div
						className={`absolute -right-4 top-1/2 -translate-y-1/2 w-[45px] h-[45px] bg-gradient-to-br from-muted via-muted-foreground/50 to-border rounded-full shadow-lg opacity-80 z-0 ${
							isPlaying ? 'animate-spin duration-100' : ''
						}`}
					>
						<div className='absolute inset-0 rounded-full bg-gradient-to-r from-transparent via-foreground/10 to-transparent'></div>
					</div>
				</div>
				<div className='flex flex-col overflow-hidden w-full ml-4'>
					<Link
						href={songUrl}
						target='_blank'
						className='flex items-center gap-1 group'
					>
						<p className='truncate text-foreground group-hover:underline'>
							{title}
						</p>
						<ArrowUpRight className='w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity' />
					</Link>
					<p className='truncate text-muted-foreground font-light'>{artist}</p>
				</div>
			</div>
			<div className='flex flex-row gap-x-1.5 items-center pl-1 border border-border/50 shadow-inner shadow-black/20 rounded-md mx-1 py-0.5 pt-1.5 animate-in slide-in-from-top-2 duration-300 delay-500'>
				<span className='relative flex h-2 w-2'>
					<span
						className={`relative inline-flex rounded-full h-2 w-2 ${
							isPlaying
								? 'bg-green-500 animate-pulse'
								: 'bg-muted-foreground/30'
						}`}
					></span>
				</span>
				<div className='text-xs text-muted-foreground/50'>
					{isPlaying ? 'Now playing' : 'Not playing'}
				</div>
			</div>
		</div>
	);
}
