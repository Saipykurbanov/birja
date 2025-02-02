import { useEffect, useRef, useState } from "react"
import Api from "../../../utils/Api";


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
                if(field === 'Date') {
                    setListOpen(false)
                    setFocus(false)
                    el['Date'] = ''
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

    const formatDate = (value) => {
    
        // Убираем все символы, кроме цифр и точек
        value = value.replace(/[^0-9.]/g, '');
        // Удаляем лишние точки, оставляем только 2
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
            const digitsOnly = value.replace(/\./g, ''); // Убираем точки для разделения
            // Разделяем на день, месяц и год
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

            // Собираем строку
            formattedValue = [day, month, year].filter(Boolean).join('.');
        }

        return formattedValue
    }

    const changeDate = (index, event) => {
        change(index, 'Date', formatDate(event.target.value))
    };

    const changeRange = (index, event) => {
        let value = event.target.value;
      
         // Убираем все символы, кроме цифр, точек и дефиса
        value = value.replace(/[^0-9.\-]/g, '');
      
          // Если в конце ввода нет дефиса, а длина строки соответствует формату первой даты, добавляем дефис
        const parts = value.split('-');
        if (parts.length === 1 && value.replace(/\D/g, '').length === 8 && !value.endsWith(' - ')) {
             value += ' - ';
        }
      
        let [startDate, endDate] = value.split('-');
      
        let formattedStartDate = formatDate(startDate);
        let formattedEndDate = endDate ? formatDate(endDate) : '';
      
      
          let formattedValue = '';
           if(formattedStartDate){
               formattedValue += formattedStartDate;
           }
          if(formattedEndDate){
            formattedValue += ' - ' + formattedEndDate
           }
      
      
          if(value.endsWith(' - ')){ // Проверка в оригинальном value
            formattedValue += ' - ';
          }
      
      
        change(index, 'Date', formattedValue)
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

    const getList = async () => {
        let req = await Api.asyncPost('')
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
        changeRange
    }
}