// Будет сгенерировано один раз при билде

export const dynamic = 'force-static'; // явно указываем SSG

async function getData() {
	return {
		timestamp: new Date().toISOString(),
	};
}

export default async function SSGExample() {
	const data = await getData();

	return (
		<div>
			<h1>SSG Example</h1>
			<p>Страница сгенерирована при билде</p>
			<p>Timestamp: {data.timestamp}</p>
		</div>
	);
}
