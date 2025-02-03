import { useEffect, useRef, useState } from "react"
import Api from "../../../utils/Api";


export default function useFilter() {

    const [focus, setFocus] = useState(false)
    const [listOpen, setListOpen] = useState(false)
    const lastInputRef = useRef(null);

    const [filters, setFilters] = useState([])

    const inputList = ['Name', 'Parametr1']
    const rangeList = ['Parametr2', 'Lots']


    const handleFocus = (e) => {
        e.stopPropagation()
        if(!focus) {
            setFocus(true)
            setListOpen(true)
        }
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
                let field = Object.keys(el)[1]

                if(field === 'Date' || rangeList.includes(field)) {
                    setListOpen(false)
                    setFocus(false)
                    if(value === 'By default') {
                        el[field] = ''
                    }
                    if(value === 'Range') {
                        el[field] = {min: '', max: ''}
                    }
                    el.type = value
                    list[list.length - 1] = el
                    return list
                }

                el[field] = value
                list[list.length - 1] = el
                return list
            })
        }
    }

    const change = (index, field, value) => {
        setFilters(prev => {
            let list = [...prev]
            let el = { ...list[index] }
            el[field] = value
            list[index] = el
            return list
        })
    }

    const changeRange = (index, field, value, range) => {
        setFilters(prev => {
            let list = [...prev]
            let el = { ...list[index] }
            el[field][range] = value
            list[index] = el
            return list
        })
    }

    const formatDate = (value) => {
    
        value = value.replace(/[^0-9.]/g, '');
        const parts = value.split('.');

        if (parts.length > 3) {
            parts.splice(3);
            value = parts.join('.');
        }

        let formattedValue = '';
        let day = '';
        let month = '';
        let year = '';

        if (value.length > 0) {
            const digitsOnly = value.replace(/\./g, ''); 
            if (digitsOnly.length <= 2) {
                day = digitsOnly;
            } else if (digitsOnly.length <= 4) {
                day = digitsOnly.slice(0, 2);
                month = digitsOnly.slice(2);
            } else {
                day = digitsOnly.slice(0, 2);
                month = digitsOnly.slice(2, 4);
                year = digitsOnly.slice(4, 8);
            }

            formattedValue = [day, month, year].filter(Boolean).join('.');
        }

        return formattedValue
    }

    const convertToISO = (dateStr) => {
        const [day, month, year] = dateStr.split('.').map(Number);
        const date = new Date(Date.UTC(year, month - 1, day));
        return date.toISOString();
    }

    const changeDate = (index, event) => {
        change(index, 'Date', formatDate(event.target.value))
    };

    const changeDateRange = (index, event, range) => {
        changeRange(index, 'Date', formatDate(event.target.value), range)
    };    

    useEffect(() => {
        const handleBlur = () => {
            setFocus(false)
            setListOpen(false)
        }

        window.addEventListener('click', handleBlur)

        return () => window.removeEventListener('click', handleBlur)
    }, [])

    useEffect(() => {
        let param = getParam()

        if (lastInputRef.current && param === 3) {
            lastInputRef.current.focus();
        }

    }, [filters])

    const convertData = () => {
        return filters.map((item, index) => {
            if ("Date" in item) {
                let newDate = item.Date;
    
                if (item.type === 'By default') {
                    newDate = convertToISO(newDate) || "Invalid Date";
                }
                else if (item.type === 'Range') {
                    newDate = {
                        min: convertToISO(newDate.min) || "Invalid Date",
                        max: convertToISO(newDate.max) || "Invalid Date"
                    };
                }
    
                if(index === 0) {
                    const { type, logic, ...rest } = item;
                    return { ...rest, Date: newDate };
                } else {
                    const { type, ...rest } = item;
                    return { ...rest, Date: newDate };
                }
            }
            
            if (index === 0) {
                const { logic, ...rest } = item;
                return rest;
            }
    
    
            const { type, ...rest } = item;
            return rest;
        });
    }
    
    
    
    
    const getList = async () => {

        console.log(convertData())
        
        let req = await Api.asyncPost('', convertData())

    }

    return {
        changeDate,
        focus,
        setFocus,
        change,
        handleFocus,
        inputList,
        getParam,
        addNewItem,
        listOpen,
        setFilters,
        filters,
        setListOpen,
        lastInputRef,
        changeDateRange,
        rangeList,
        getList,
        changeRange
    }
}