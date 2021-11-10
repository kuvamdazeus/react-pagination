import React, { useEffect, useState } from "react"

interface PaginationProps {
    fetchUrl: (page: number) => string
    renderElement: (data: any) => React.ReactElement
    dataListKey: string
    dataTotalKey: string
    footerNav: (pageNums: Array<number>, page: number, setPage: React.Dispatch<React.SetStateAction<number>>) => React.ReactElement
    
    className?: string
    placeholder?: React.ReactElement
}

export default function Pagination({
    className='', fetchUrl, renderElement, placeholder, dataListKey, dataTotalKey, footerNav
}: PaginationProps) {

    const [paginatedData, setData] = useState(null)
    const [page, setPage] = useState(1)
    const [pages, setPages] = useState<number[]>([])

    useEffect(() => {
        fetch(fetchUrl(page)).then(res => res.json())
        .then(data => {
            setData(data[dataListKey])
            // dataListKey is the variable to reference the actual list of items which is to be rendered.
            // Here, the data is given back as:
            //     { currentPage: number, total: number, items: [{ name, agem gender }...] }

            // Similarly, dataTotalKey is the key of the object (sent as response from endpoint)
            // representing the total pages available at the backend
            
            let pagesList = []
            for (let i = 1; i <= data[dataTotalKey]; i++) {
                pagesList.push(i)
            }
            setPages(pagesList)
        })

    }, [page])
    
    if (paginatedData) return (<>
        <section className={className}>
            {(paginatedData as Array<object>).map((element: any) => renderElement(element))}
        </section>

        {footerNav(pages, page, setPage)}
    </>)

    return (<>
        {placeholder || <p>Loading...</p>}
    </>)

}