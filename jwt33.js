const CUBE_API_SECRET = process.env.NEXT_PUBLIC_CUBEJS_TOKEN;
const jwt = require('jsonwebtoken');
export const cubejsToken = jwt.sign(
	{}, CUBE_API_SECRET, { expiresIn: '30d' }
);

// console.log(cubejsToken);