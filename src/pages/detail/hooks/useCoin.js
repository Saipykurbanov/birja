import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import Api from "../../../utils/Api"
import Store from "../../../utils/Store"


export default function useCoin() {

    const {id} = useParams()
    const [region, setRegion] = useState([])
    const [citymint, setCityMint] = useState([])
    const [dynastyandco, setDynastyandco] = useState([])
    const [authorities, setAuthorities] = useState([])
    const [years, setYears] = useState([])

    const [role, setRole] = useState(() => {
        let localRole = localStorage.getItem('role') || 'guest'
        // return localRole
        return 'admin'
    })
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
    const [originalInfo, setOriginalInfo] = useState({
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

            let region = await Api.asyncGet(`api/regions`)
            let citymint = await Api.asyncGet(`api/citymints`)
            let dynastyandco = await Api.asyncGet('api/dynastyandco')
            let authorities = await Api.asyncGet('api/authorities')
            let years = await Api.asyncGet('api/years')

            if(res !== 'error' && Object.keys(res).length > 0) {
                setInfo(res)
                setOriginalInfo(res)
            }

            if(region !== 'error') {
                setRegion(region)
            }

            if(citymint !== 'error') {
                setCityMint(citymint)
            }

            if(dynastyandco !== 'error') {
                setDynastyandco(dynastyandco)
            }

            if(authorities !== 'error') {
                setAuthorities(authorities)
            }

            if(years !== 'error') {
                setYears(years)
            }

        })()

    }, [])

    const change = (value, field) => {
        if(role === 'admin') {
            setInfo((prev) => {
                let update = {...prev, [field]: value}
                if(value == originalInfo[field]) {
                    Store.setListener('stopAutosave', true)
                } else {
                    Store.setListener('autosave', (update, `api/coins/${id}`))
                }
                return update
            })
        }

        return
    }

    return {
        info,
        change,
        role,
        years,
        authorities,
        dynastyandco,
        citymint,
        region
    }
}