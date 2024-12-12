import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import Api from "../../../utils/Api"


export default function useCoin({role}) {

    const {id} = useParams()
    const [info, setInfo] = useState({
        stockNumber: undefined,
        saleChannel: undefined,
        lotNumber: undefined,
        code: undefined,
        category: undefined,
        region: undefined,
        cityMint: undefined,
        mintCoin: undefined,
        dynastyAndCo: undefined,
        authority: undefined,
        nominal: undefined,
        metal: undefined,
        diameterMM: undefined,
        weightGr: undefined,
        height: undefined,
        origin: undefined,
        hsCode: undefined,
        reference1: undefined,
        reference2: undefined,
        reference3: undefined,
        reference4: undefined,
        reference5: undefined,
        condition: undefined,
        rarity: undefined,
        provenance: undefined,
        title: undefined,
        shortDescription: undefined,
        description: undefined,
        info: undefined,
        craw: undefined,
        salesAccount: undefined,
        idPhoto: undefined,
        photos: undefined,
        video: undefined,
        sold: undefined,
        salePrice: undefined,
        price: undefined,
        location: undefined,
        inWork: undefined,
        statusId: undefined,
        userChanged: undefined,
        roles: undefined,
        createdAt: undefined,
        updatedAt: undefined
    })

    useEffect(() => {

        (async () => {

            let res = await Api.asyncGet(`api/coins/${id}`)

            if(res !== 'error' && Object.keys(res).length > 0) {
                setInfo(res)
            }

        })()

    }, [])

    const change = (value, field) => {
        if(role === 'ADMIN') {
            setInfo(prev => ({...prev, [field]: value}))
        }

        return
    }

    return {
        info,
        change
    }
}