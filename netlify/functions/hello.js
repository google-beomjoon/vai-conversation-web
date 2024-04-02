// const API_ENDPOINT = 'https://cat-fact.herokuapp.com/facts';

// export default async (request, context) => {
//   try {
//     const response = await fetch(API_ENDPOINT);
//     const data = await response.json();
//     return Response.json({ data });
//   } catch (error) {
//     console.log(error);
//     return Response.json({ error: 'Failed fetching data' }, { status: 500 });
//   }
// };


export default async (request, context) => {
	try {
		const body = await request.json();
		const url = "https://semiconductor.samsung.com/processor/mobile-processor/exynos-2400/"; // body.url;
		const response = await fetch(url);
		const text = await response.text();
		const parser = new DOMParser();
        const doc = parser.parseFromString(text, 'text/html');

        var thumbnail = doc.querySelector('meta[name="thumbnail"]')?.content;
		if (!thumbnail) thumbnail = doc.querySelector('meta[property="og:image"]')?.content;
        var title = doc.querySelector('meta[property="og:title"]')?.content;
        var description = doc.querySelector('meta[property="og:description"]')?.content;

		return Response.json({ thumbnail, title, description });
	} catch (error) {
		return Response.json({ error }, { status: 500 });
	}
};