'use client';

import { useEffect, useState } from 'react';
import { getVisitorCount } from '../../app/api/userCount/actions';

const VisitorCounter = () => {
	const [visitorCount, setVisitorCount] = useState<number | null>(null);
	const [error, setError] = useState<string | null>(null);

	useEffect(() => {
		const fetchVisitorCount = async () => {
			try {
				const count = await getVisitorCount();
				setVisitorCount(count);
			} catch (err) {
				console.error('Error fetching visitor count:', err);
				setError('Failed to load visitor count');
			}
		};

		fetchVisitorCount();
	}, []);

	if (error) {
		return <div className='text-sm text-destructive'>Error</div>;
	}

	if (visitorCount === null) {
		return <div className='text-sm text-muted-foreground'>Loading...</div>;
	}

	return (
		<div className='text-sm text-muted-foreground'>{visitorCount} Visitors</div>
	);
};

export default VisitorCounter;
