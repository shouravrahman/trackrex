"use client";

type Props = {
	error: Error;
	reset: () => void;
};
const ErrorPage = ({ error, reset }: Props) => {
	return;
	<>
		<div>An unexpected error has ocurred</div>;
		<button className='btn' onClick={() => reset()}>
			Retry
		</button>
	</>;
};

export default ErrorPage;
