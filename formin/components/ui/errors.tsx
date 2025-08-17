interface ErrorProps {
	error?: string;
}

export function Error({ error }: ErrorProps) {
	if (!error) return null;

	return <span className='text-red-600 text-sm mt-1 block'>{error}</span>;
}
