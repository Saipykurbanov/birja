import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import Api from "../../../utils/Api"


export default function useSales() {

    const {id} = useParams()
    const [info, setInfo] = useState({})

    useEffect(() => {

        (async () => {

            let res = await Api.asyncGet(`api/coinsales/${id}`)

            if(res !== 'error' && Object.keys(res).length > 0) {
                setInfo(res)
            }

        })()

    }, [])

    const change = (e, field) => {
        setInfo(prev => ({...prev, [field]: e.target.value}))
    }

    

    return {
        info,
        change
    }
}