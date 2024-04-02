const fs = require('fs');
const path = require('path');

export default async (request, context) => {
	const headers = {
		"Access-Control-Allow-Origin": "*",
		"Access-Control-Allow-Headers": "Content-Type",
		"Access-Control-Allow-Methods": "GET, POST"
	}

	try {
		const userInput = await request.text();
		const filePath = path.join(__dirname, 'data', `${userInput}-markdown.json`);
		const data = fs.readFileSync(filePath, 'utf-8');
		return Response.json(JSON.parse(data), {
			statusCode: 200,
			headers: headers
		});
	} catch (error) {
		return Response.json({ error: 'Internal Server Error' }, { 
			status: 500,
			headers: headers
		});
	}
};
