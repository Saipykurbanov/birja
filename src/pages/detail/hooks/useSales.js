import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import Api from "../../../utils/Api"
import utils from "../../../utils/utils"
import Store from "../../../utils/Store"


export default function useSales() {

    const {id} = useParams()
    const [info, setInfo] = useState({
        stockNumber: undefined,
        entryDate: '',
        outDate: '',
        vendorId: undefined, 
        consigment: undefined,
        commission: undefined,
        estimate: undefined,
        reserve: undefined,
        hammer: undefined,
        payment: undefined,
        buyerId: undefined,   
        commission: undefined,
        shipping: undefined,
        insurane: undefined,
        extras: undefined,
        payment: undefined,
        asquired: undefined,
        availaibleOrSold: undefined,
        status: undefined,
        freeText: undefined
    })
    const [originalInfo, setOriginalInfo] = useState({
        stockNumber: undefined,
        entryDate: '',
        outDate: '',
        vendorId: undefined, 
        consigment: undefined,
        commission: undefined,
        estimate: undefined,
        reserve: undefined,
        hammer: undefined,
        payment: undefined,
        buyerId: undefined,   
        commission: undefined,
        shipping: undefined,
        insurane: undefined,
        extras: undefined,
        payment: undefined,
        asquired: undefined,
        availaibleOrSold: undefined,
        status: undefined,
        freeText: undefined
    })

    useEffect(() => {

        (async () => {

            let res = await Api.asyncGet(`api/coinsales/${id}`)

            if(res !== 'error' && Object.keys(res).length > 0) {
                setInfo(res)
            }

        })()

    }, [])

    const change = (value, field) => {

        setInfo((prev) => {
            let update = {...prev, [field]: value}
            if(utils.deepEqual(update, originalInfo)) {
                Store.setListener('stopAutosave', true)
            } else {
                Store.setListener('autosave', (update, `api/coinsales/${id}`))
            }
            return update
        })

    }

    

    return {
        info,
        change,
        setInfo
    }
}