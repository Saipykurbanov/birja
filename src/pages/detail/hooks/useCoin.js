import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import Api from "../../../utils/Api"
import Store from "../../../utils/Store"
import utils from "../../../utils/utils"


export default function useCoin() {

    const {id} = useParams()
    const [region, setRegion] = useState([])
    const [citymint, setCityMint] = useState([])
    const [dynastyandco, setDynastyandco] = useState([])
    const [authorities, setAuthorities] = useState([])
    const [years, setYears] = useState([])
    const [load, setLoad] = useState(true)

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
            Store.setListener('stopAutosave', true)
            setLoad(true)

            let res = await Api.asyncGet(`api/coins/${id}`)

            let region = await Api.asyncGet(`api/regions`)
            let citymint = await Api.asyncGet(`api/citymints`)
            let dynastyandco = await Api.asyncGet('api/dynastyandco')
            let authorities = await Api.asyncGet('api/authorities')
            let years = await Api.asyncGet('api/years')
            let coins = await Api.asyncGet('api/coins')

            if(res !== 'error' && Object.keys(res).length > 0) {
                setInfo(res)
                setOriginalInfo(res)
                Store.setListener('previewPhotos', res.photos)
            }

            if(res !== 'error' && Object.keys(res).length > 0 && coins !== 'error') {
                let index = coins.findIndex(item => item.stockNumber === res.stockNumber);
                Store.setListener('verticalGetSN', res.stockNumber)
                getCoins(index,coins)
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

            setLoad(false)

        })()

    }, [id])

    const change = (value, field) => {
        if(role === 'admin') {
            setInfo((prev) => {
                let update = {...prev, [field]: value}
                if(utils.deepEqual(update, originalInfo)) {
                    Store.setListener('stopAutosave', true)
                } else {
                    Store.setListener('autosave', {data: update, path: `api/coins/${id}`})
                }
                return update
            })
        }

        return
    }

    const changeStatus = () => {
        if(role === 'admin') {
            
            setInfo((prev) => {
                let value;
                if(info.statusId === 6) {
                    value = 1
                } else {
                    value = 6
                }
                let update = {...prev, statusId: value}
                if(utils.deepEqual(update, originalInfo)) {
                    Store.setListener('stopAutosave', true)
                } else {
                    Store.setListener('autosave', {data: update, path: `api/coins/${id}`})
                }
                return update
            })
        }
    }

    const getCoins = (index, res) => {

        if (index !== -1) {
            let start, end;

            if (index - 3 < 0) {
                const overflow = 3 - index; 
                start = res.length - overflow;
                end = Math.min(res.length, index + 4);
                Store.setListener('getCoins', [...res.slice(start, res.length), ...res.slice(0, end)]);
            } else if (index + 4 > res.length) {
                const overflow = (index + 4) - res.length; 
                start = Math.max(0, index - 3);
                end = res.length;
                Store.setListener('getCoins', [...res.slice(start, end), ...res.slice(0, overflow)]);
            } else {
                start = Math.max(0, index - 3);
                end = Math.min(res.length, index + 4);
                Store.setListener('getCoins', res.slice(start, end));
            }
        } 
    }

    return {
        info,
        change,
        role,
        years,
        authorities,
        dynastyandco,
        citymint,
        region,
        changeStatus,
        load
    }
}