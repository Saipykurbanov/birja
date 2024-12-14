import { useEffect, useRef, useState } from "react"
import { useParams } from "react-router-dom"
import Api from "../../../utils/Api"
import Store from "../../../utils/Store"
import utils from "../../../utils/utils"
import Notice from "../../../components/notice/Notice"


export default function useCoin() {

    const {id} = useParams()
    const [region, setRegion] = useState([])
    const [citymint, setCityMint] = useState([])
    const [categories, setCategories] = useState([])
    const [dynastyandco, setDynastyandco] = useState([])
    const [authorities, setAuthorities] = useState([])
    const [years, setYears] = useState([])
    const [load, setLoad] = useState(true)
    const [tab, setTab] = useState(1)
    const [time, setTime] = useState('30')
    const [obj, setObj] = useState({})
    const [disabled, setDisabled] = useState(false)
    const [user, setUser] = useState(() => {
        let user = localStorage.getItem('user') || {}
        return JSON.parse(user)
    })
    const [role, setRole] = useState(() => {
        let localRole = localStorage.getItem('role') || 'guest'
        return localRole
        // return 'admin'
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
    const [infoSales, setInfoSales] = useState({
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
    const [originalInfoSales, setOriginalInfoSales] = useState({
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
    const timer = useRef(null)


    useEffect(() => {

        (async () => {
            try {
                stopAutoSave()
                setLoad(true)
    
                let res = await Api.asyncGet(`api/coins/${id}`)
                let sales = await Api.asyncGet(`api/coinsales/${id}`)
                
                let categories = await Api.asyncGet(`api/categories`)
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

                    if(res.statusId != 2) {
                        setDisabled(true)
                    } else if(role === 'admin') {
                        setDisabled(false)
                    } else if(res.userChanged === '') {
                        setDisabled(true)
                    } else if(res.userChanged !== user.login) {
                        setDisabled(true)
                    } else {
                        setDisabled(false)
                    }

                    if(coins !== 'error') {
                        let index = coins.findIndex(item => item.stockNumber === res.stockNumber);
                        Store.setListener('verticalGetSN', res.stockNumber)
                        getCoins(index,coins)
                    }
                }

                if(sales !== 'error' && Object.keys(res).length > 0) {
                    setInfoSales(sales)
                }
                
                if(categories !== 'error') setCategories(categories)
                if(region !== 'error') setRegion(region)
                if(citymint !== 'error') setCityMint(citymint)
                if(dynastyandco !== 'error') setDynastyandco(dynastyandco)
                if(authorities !== 'error') setAuthorities(authorities)
                if(years !== 'error') setYears(years)

            } catch(e) {
                return
            } finally {
                setLoad(false)
            }

        })()

        return () => {
            if(timer.current) {
                cancelAnimationFrame(timer.current)
            }
        }

    }, [id])

    const autosave = (obj) => {
        if(timer.current) {
            cancelAnimationFrame(timer.current)
        }
        setObj(obj)
        timerNewFunc(obj.data, obj.path)
    }

    Store.useListener('autosave', (obj) => {
        autosave(obj)
    })

    const stopAutoSave = () => {
        if(timer.current) {
            cancelAnimationFrame(timer.current)
            setTime('30')
        }
    }

    Store.useListener('stopAutosave', stopAutoSave)

    const saveNow = async () => {
        if(timer.current) {
            cancelAnimationFrame(timer.current)
            setTime('30')
            let res = await Api.asyncPut(obj.path, obj.data)

            if(res !== 'error') {
                setOriginalInfo(obj.data)
                setObj({})
                return
            }
        }
    }

    const timerNewFunc = async (body, path) => {
        let date = new Date().getTime();
        const finish = date + 30000;

        let timerAnimation = async () => {
            let currentTime = new Date().getTime();
            if (currentTime > finish) {
                setTime('30')
                cancelAnimationFrame(timer.current)

                let res = await Api.asyncPut(path, body)

                if(res !== 'error') {
                    setOriginalInfo(body)
                    return
                }

            } else {
                setTime(((finish - currentTime) / 1000).toFixed(0));
                timer.current = requestAnimationFrame(timerAnimation)
            }
        }

        timer.current = requestAnimationFrame(timerAnimation)
    }

    const getCoins = (index, res) => {

        if (index !== -1) {
            let start, end, data;

            if (index - 3 < 0) {
                const overflow = 3 - index; 
                start = res.length - overflow;
                end = Math.min(res.length, index + 4);
                data = [...res.slice(start, res.length), ...res.slice(0, end)]
                Store.setListener('getCoins', data);
                Store.setListener('pages', data)
            } else if (index + 4 > res.length) {
                const overflow = (index + 4) - res.length; 
                start = Math.max(0, index - 3);
                end = res.length;
                data = [...res.slice(start, end), ...res.slice(0, overflow)]
                Store.setListener('getCoins', data);
                Store.setListener('pages', data)
            } else {
                start = Math.max(0, index - 3);
                end = Math.min(res.length, index + 4);
                data = res.slice(start, end)
                Store.setListener('getCoins', data);
                Store.setListener('pages', data)
            }
        } 
    }

    const change = (value, field) => {
        if(info.userChanged === user?.login || role === 'admin') {
            setInfo((prev) => {
                let update = {...prev, [field]: value}
                if(utils.deepEqual(update, originalInfo)) {
                    stopAutoSave()
                } else {
                    autosave({data: update, path: `api/coins/${id}`})
                }
                return update
            })
        }

        return
    }

    const changeSales = (value, field) => {

        setInfoSales((prev) => {
            let update = {...prev, [field]: value}
            if(utils.deepEqual(update, originalInfoSales)) {
                stopAutoSave()
            } else {
                autosave({data: update, path: `api/coinsales/${id}`})
            }
            return update
        })

    }

    //Кнопка WITHDROW
    const changeStatus = async () => {
        if(role === 'admin') { 
            let update;
            if(info.statusId == 6) {
                update = { ...info, statusId: 1, userChanged: '' };
            } else {
                update = { ...info, statusId: 6};
            }

            let res = await Api.asyncPut(`api/coins/${id}`, update);
            
            if (res !== 'error') {
                setInfo(update)
                setDisabled(true)
            } else {
                Notice.Send({type: 'error', text: 'Access is denied'})
            }

        } else {
            Notice.Send({type: 'error', text: 'Access is denied'})
        }
    }
    
    const setInWork = async () => {
        if(info.statusId === 2) {
            return
        }
        if(!info.userChanged) {
            let update = {...info, statusId: 2, userChanged: user?.login}
            let res = await Api.asyncPut(`api/coins/${id}`, update)

            if (res !== 'error') {
                setInfo(update)
                setDisabled(false)
            } else {
                Notice.Send({type: 'error', text: 'Access is denied'})
            }
        } else {
            Notice.Send({type: 'error', text: 'Access is denied'})
        }   
    }

    const setInCheck = async () => {
        if(info.statusId === 3) {
            return
        }
        if(info.userChanged === user?.login && role !== 'admin') {
            let update = {...info, statusId: 3}
            let res = await Api.asyncPut(`api/coins/${id}`, update)

            if (res !== 'error') {
                setInfo(update)
                setDisabled(true)
            } else {
                Notice.Send({type: 'error', text: 'Access is denied'})
            }
        } else {
            Notice.Send({type: 'error', text: 'Access is denied'})
        }   
    }

    const nullStatus = async () => {
        if(info.statusId === 1) {
            return
        }
        if(role === 'admin') {
            let update = { ...info, statusId: 1, userChanged: '' };
            let res = await Api.asyncPut(`api/coins/${id}`, update);
    
            if (res !== 'error') {
                setInfo(update)
                setDisabled(true)
            } else {
                Notice.Send({type: 'error', text: 'Access is denied'})
            }
        } else {
            Notice.Send({type: 'error', text: 'Access is denied'})
        } 
    }

    const setInReady = async () => {
        if(info.statusId === 4) {
            return
        }
        if(role === 'admin') {
            let update = { ...info, statusId: 4};
            let res = await Api.asyncPut(`api/coins/${id}`, update);
    
            if (res !== 'error') {
                setInfo(update)
                setDisabled(true)
            } else {
                Notice.Send({type: 'error', text: 'Access is denied'})
            }
        } else {
            Notice.Send({type: 'error', text: 'Access is denied'})
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
        categories,
        changeStatus,
        load,
        tab,
        setTab,
        time,
        saveNow,
        infoSales,
        changeSales,
        setInWork,
        setInCheck,
        nullStatus,
        setInReady,
        disabled
    }
}