import { useEffect, useRef, useState } from "react"


export default function useFilter() {

    const [focus, setFocus] = useState(false)
    const [listOpen, setListOpen] = useState(false)
    const lastInputRef = useRef(null);

    const [filters, setFilters] = useState([])

    const inputList = ['Name', 'Parametr1']


    const handleFocus = (e) => {
        e.stopPropagation()
        if(!focus) {
            setFocus(true)
            setListOpen(true)
        }
    }

    const handleBlur = () => {
        setFocus(false)
        setListOpen(false)
    }

    const getParam = () => {
        let param = 1;
        let el = filters.at(-1)

        if(filters.length === 0) {
            return param = 2
        }

        if(el) {
            if(!Object.keys(el)[1]) {
                param = 2
            }
            if(el[Object.keys(el)[1]] === '') {
                param = 3
            }
        }

        return param
    }

    const addNewItem = (param, value) => {

        if(param == 1) {
            return setFilters(prev => ([...prev, {logic: value}]))
        }
        
        if(param == 2) {
            setFilters(prev => {
                let list = [...prev]
                if(list.length === 0) {
                    let el = {logic: '', [value]: ''}
                    list.push(el)
                    return list
                }
                let el = { ...list.at(-1) }
                el[value] = ''
                list[list.length - 1] = el
                return list
            })
            return
        }

        if(param == 3) {
            setFilters(prev => {
                let list = [...prev]
                let el = { ...list.at(-1) }
                el[Object.keys(el)[1]] = value
                list[list.length - 1] = el
                return list
            })
        }
    }

    const change = (index, field, value) => {
        setFilters(prev => {
            let list = [...prev]
            let el = list[index]
            el[field] = value
            list[index] = el
            return list
        })
    }

    useEffect(() => {
        window.addEventListener('click', handleBlur)

        return () => window.removeEventListener('click', handleBlur)
    }, [])

    useEffect(() => {
        let param = getParam()

        if (lastInputRef.current && param === 3) {
            lastInputRef.current.focus();
        }

    }, [filters])

    return {
        focus,
        setFocus,
        change,
        handleBlur,
        handleFocus,
        inputList,
        getParam,
        addNewItem,
        listOpen,
        setFilters,
        filters,
        setListOpen,
        lastInputRef
    }
}