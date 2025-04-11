type PageProps = {
	params: {
		[key: string]: string;
	};
};


export default function ClientId({ params }: PageProps) {
	return (
		<h1>{params.clientId}</h1>
	);
}