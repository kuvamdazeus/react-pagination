import React from "react"
import Pagination from "../components/Pagination"

/* These types to be declared in separate files (if types are being used for API responses) */
// @api url: /api/hello
interface APIDataProps {
	name: string
	age: number
	gender: string
}
/* These types to be declared in separate files (if types are being used for API responses) */

export default function Home() {
	return (<>

		<Pagination
			className='bg-gray-300' // className of the container that will be containing all the paginated elements
			
			// Url of the api endpoint from which data will be fetched
			fetchUrl={(page: number) => `http://localhost:3000/api/hello?page=${page}`}
			dataListKey='items' dataTotalKey='total'
			
			renderElement={(data: APIDataProps) => { // How the elements will look when they will be rendered
				return (
					<p key={data.name}>
						{data.name}
					</p>
				)
			}}

			footerNav={(pageNums: Array<number>, page: number, setPage: React.Dispatch<React.SetStateAction<number>>) => 
				<section className='bg-gray-100'>
					<div className='flex items-center mx-auto w-max'>
						{pageNums.map(pageNum =>
							<p
								className={`${pageNum === page && 'text-blue-500'} mx-2 cursor-pointer`}
								onClick={() => setPage(pageNum)}
							>
								{pageNum}
							</p>
						)}
					</div>
				</section>
			}
		/>

	</>)
}