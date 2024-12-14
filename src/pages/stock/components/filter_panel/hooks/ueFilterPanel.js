import { useEffect, useState } from "react"
import Store from "../../../../../utils/Store"

export default function useFilterPanel () {
    const [isOpen, setIsOpen] = useState(false)
    const [tab, setTab] = useState('data')
    const [isShow, setIsShow] = useState({
        stock: true,
        media: true,
        salesChanel: true,
        lot: true,
        category: true,
        region: true,
        cityMint: true,
        authority: true,
        metal: true,
        description: true,
        location: true,
        date: true,
        status: true,
    })

    Store.useListener('open_filter_panel', setIsOpen)

    const closePanel = (e) => {
        e.stopPropagation()
        document.body.className = ''
        setIsOpen(prev => prev = false)
        console.log('no')
    }

    const saveShowFilters = () => {
        Store.setListener('saveShowFilters', isShow)
    }

    useEffect(() => {
        window.addEventListener('click', (e) => closePanel(e))
        
        return window.removeEventListener('click', (e) => closePanel(e))
    }, [])

    return {
        tab,
        isOpen,
        isShow,
        setTab,
        setIsShow,
        saveShowFilters,
    }
}