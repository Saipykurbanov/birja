import { useEffect, useState } from "react"

export default function usePagination (store, callback) {
    const [currentPage, setCurrentPage] = useState(1)
    const [perPage, setPerPage] = useState(50)

    // const lastIndex = currentPage * perPage
    // const firstIndex = lastIndex - perPage
    // const currentList = store.slice(firstIndex, lastIndex) 

    const maxPage = Math.ceil(store.length / perPage)

    const changePageNext = () => {
        setCurrentPage(prev => {
            if(prev >= maxPage) {
                return maxPage
            } else {
                sliceList(prev + 1)
                return prev = prev + 1
            }
        })
    }

    const changePagePrev = () => {
        setCurrentPage(prev => {
            if (prev <= 1) {
                return prev
            } else {
                sliceList(prev - 1)
                return prev = prev - 1
            }
        })
    }

    const changePageStart = () => {
        setCurrentPage(prev => {
            sliceList(1)
            return prev = 1
        })
    }

    const changePageEnd = () => {
        setCurrentPage(prev => {
            sliceList(maxPage)
            return prev = maxPage
        })
    }

    const sliceList = (page) => {
        const obj = structuredClone(store)

        const lastIndex = page * perPage
        const firstIndex = lastIndex - perPage

        callback(obj.slice(firstIndex, lastIndex) )
    }

    const changePerPage = (value) => {
        const obj = structuredClone(store)

        const maxPage = Math.ceil(store.length / value) 

        let lastIndex

        if(currentPage >= maxPage) {
            setCurrentPage(maxPage)
            lastIndex = maxPage * value
        } else {
            lastIndex = currentPage * value
        }

        const firstIndex = lastIndex - value

        callback(obj.slice(firstIndex, lastIndex))

        setPerPage(value)
    }

    return {
        currentPage,
        perPage, 
        maxPage,
        setPerPage,
        changePageNext,
        changePagePrev,
        changePageStart,
        changePageEnd,
        changePerPage,
    }
}