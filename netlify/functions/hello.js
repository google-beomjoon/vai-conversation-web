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
		const body = request.body;
		return Response.json({ resData: body });
	} catch (error) {
		return Response.json({ error }, { status: 500 });
	}
};