const fs = require('fs');
const path = require('path');

export default async (request, context) => {
	try {
		const userInput = await request.text();
		const filePath = path.join(__dirname, 'data', `${userInput}-markdown.json`);
		const data = fs.readFileSync(filePath, 'utf-8');
		return Response.json(JSON.parse(data));
	} catch (error) {
		return Response.json({ error }, { status: 500 });
	}
};
