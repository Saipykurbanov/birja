import { useEffect, useState } from "react"
import Api from "../../../utils/Api"

export default function useStockTable () {

    const [list, setList] = useState(false)
    const [error, setError] = useState(false)

    const closeCellMenus = () => {
        const findActive = document.querySelectorAll('.cell_menu')

        findActive.forEach(el => {
            if(el.classList.contains('active')) {
                el.classList.remove('active')
            } 
        })
    }

    useEffect(() => {
        (async () => {
            let init = await Api.asyncGet('api/coins/')

            if(init === 'error') {
                return setError(true)
            }

            setList(init.map((el) => {
                return {
                    id: el.stockNumber,
                    stock: el.stockNumber,
                    media: el.photos,
                    salesChanel: el.saleChannel,
                    lot: el.lotNumber,
                    category: el.category,
                    region: el.region,
                    cityMint: el.cityMint,
                    authority: el.authority,
                    metal: el.metal,
                    description: el.description,
                    location: el.location,
                    date: el.createdAt,
                    status: el.statusId,
                }
            }))
        })()

        window.addEventListener('click', closeCellMenus)
    }, [])

    return {
        list
    }
}