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
const fs = require('fs');
const path = require('path');

export default async (request, context) => {
	try {
		const json = fs.readFileSync(path.join(__dirname, 'data', 'scen1-markdown.json'));
		return Response.json({ res: json });
	} catch (error) {
		return Response.json({ error }, { status: 500 });
	}
};