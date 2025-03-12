import type { APIRoute } from 'astro';
import { experimental_AstroContainer as AstroContainer } from 'astro/container';
import Counter from '../components/counter.astro';
import Test from './test.astro';

let counter = 0;
export const prerender = false;
const container = await AstroContainer.create();

export const GET: APIRoute = async ({ request }) => {
	console.log('GET');

	const counterComp = await container.renderToString(Counter, {
		props: { count: counter },
	});

	console.log('counterComp', counterComp);
	const encoder = new TextEncoder();
	const bytes = encoder.encode(counterComp);
	console.log('bytes', bytes);

	//const welcomeComp = await container.renderToString(Welcome);

	const page = await container.renderToString(Test, {
		slots: { default: counterComp },
	});

	console.log(page);
	console.log('updated');

	return new Response(page, {
		headers: {
			'Content-Type': 'text/html',
		},
	});

	/*
	return new Response(bytes, {
		headers: new Headers([
			['Content-Type', 'text/html'],
			['Content-Length', bytes.byteLength.toString()],
		]),
	});
	*/
};
