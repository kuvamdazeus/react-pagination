// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'

// type Data = {
//   name: string
// }

// export default function handler(
//   req: NextApiRequest,
//   res: NextApiResponse<Data>
// ) {
//   res.status(200).json({ name: 'John Doe' })
// }

export default (req: NextApiRequest, res: NextApiResponse) => {
	const pageLength = 5
	const sampleData = [
		{ name: 'Sabrina', age: 21, gender: 'female' },
		{ name: 'Eric', age: 21, gender: 'male' },
		{ name: 'Lena', age: 21, gender: 'female' },
		{ name: 'Lusha', age: 21, gender: 'female' },
		{ name: 'Leon', age: 21, gender: 'male' },
		{ name: 'Angela', age: 21, gender: 'female' },
		{ name: 'Mia', age: 21, gender: 'female' },
		{ name: 'Jenny', age: 21, gender: 'female' },
		{ name: 'Debbie', age: 21, gender: 'female' },
		{ name: 'Karen', age: 21, gender: 'female' },
		{ name: 'Mileva', age: 21, gender: 'female' },
		{ name: 'Anne', age: 21, gender: 'female' },
		{ name: 'Dan', age: 21, gender: 'male' },
		{ name: 'John', age: 21, gender: 'male' },
	]

	const { page } = req.query
	const pageNum = parseInt(page as string)

	let responseData
	if (page) {
		responseData = sampleData.slice((pageNum-1) * pageLength, pageNum * pageLength)
	}

	res.status(200).json({
		page: pageNum, total: Math.ceil(sampleData.length / pageLength),
		items: responseData
	})
}
