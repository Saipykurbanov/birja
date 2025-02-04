import { useEffect, useState } from "react"
import Api from "../../../utils/Api";
import { dateList, inputList, operators, parametrs, rangeList } from "../allLists";


export default function useFilter() {

    const [focus, setFocus] = useState(false)
    const [listOpen, setListOpen] = useState(false)

    const [filters, setFilters] = useState([])

    const values = {
        'saleChannel': ['1', '2', '3', '4', '5'],
        'category': [],
        'region': [],
        'cityMint': [],
        'authority': [],
        'metal': [],
        'nominal': [],
        'condition': [],
        'rarity': [],
        'provenance': [],
        'sold': [],
        'location': [],
        'inWork': [],
        'statusLd': [],
        'userChanged': [],
        'consigner': [],
        'dynastyAndSo': []
    }

    const [list, setList] = useState({
        1: operators,
        2: parametrs,
        3: values
    })

    const handleFocus = (e) => {
        e.stopPropagation()
        if(!focus) {
            setFocus(true)
            setListOpen(true)
        }
    }

    const getParam = () => {
        let param = 1;
        const lastFilter = filters.at(-1);

        if (!lastFilter) {
            return param = 2;
        }

        const key = Object.keys(lastFilter)[1];

        if (!key) {
            param = 2;
        } else if (inputList.includes(key)) {
            param = 1
        } else if(lastFilter.type) {
            param = 1
        } else if (lastFilter[key] === '') {
            param = 3;
        }

        return param;
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
                
                if(dateList.includes(field) || rangeList.includes(field)) {
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

    const changeDate = (index, event, field) => {
        change(index, field, formatDate(event.target.value))
    };

    const changeDateRange = (index, event, range, field) => {
        changeRange(index, field, formatDate(event.target.value), range)
    };    

    useEffect(() => {
        const handleBlur = () => {
            setFocus(false)
            setListOpen(false)
        }

        window.addEventListener('click', handleBlur)

        return () => window.removeEventListener('click', handleBlur)
    }, [])

    const convertData = () => {
        return filters.map((item, index) => {
            let field = Object.keys(item)[1]
            if (dateList.includes(field)) {
                let newDate = item[field];
    
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
                    return { ...rest, [field]: newDate };
                } else {
                    const { type, ...rest } = item;
                    return { ...rest, [field]: newDate };
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

        setListOpen(false)
        setFocus(false)
        
        let req = await Api.asyncPost('', convertData())

    }

    const delFilter = (e) => {
        e.stopPropagation()
        setFilters(prev => {
            let list = [...prev]
            list.pop()
            return list
        })
    }

    const clearAllFilter = () => {
        setFilters([])
    }

    return {
        focus,
        listOpen,
        filters,
        list,
        changeDate,
        setFocus,
        change,
        handleFocus,
        getParam,
        addNewItem,
        setFilters,
        setListOpen,
        changeDateRange,
        getList,
        changeRange,
        delFilter,
        clearAllFilter
    }
}