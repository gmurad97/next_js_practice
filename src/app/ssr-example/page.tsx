// Будет рендериться при каждом запросе

export const dynamic = 'force-dynamic'; // явно указываем SSR

async function getData() {
	return {
		timestamp: new Date().toISOString(),
	};
}

export default async function SSRExample() {
	const data = await getData();

	return (
		<div>
			<h1>SSR Example</h1>
			<p>Страница рендерится при каждом запросе</p>
			<p>Timestamp: {data.timestamp}</p>
		</div>
	);
}
