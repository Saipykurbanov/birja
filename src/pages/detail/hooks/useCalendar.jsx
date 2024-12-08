import { useEffect, useRef, useState } from "react"
import Store from "../../../utils/Store"


export default function useCalendar() {

    const [isOpen, setIsOpen] = useState(false)
    const [calendarList, setCalendarList] = useState([])
    const [date, setDate] = useState(() => {
        const date = new Date()
        const object = {
            month: date.getMonth() + 1,
            year: date.getFullYear(),
            currentDay: date.getDate(),
            currentMonth: date.getMonth() + 1,
            currentYear: date.getFullYear(),
        }
        return object
    })

    const days = [
        {day: 'Понедельник', name: 'Пн'}, 
        {day: 'Вторник', name: 'Вт'}, 
        {day: 'Среда', name: 'Ср'}, 
        {day:  'Четверг', name: 'Чт'}, 
        {day: 'Пятница', name: 'Пт'}, 
        {day: 'Суббота', name: 'Сб', weekend: true}, 
        {day: 'Воскресенье', name: 'Вс', weekend: true}]

    const months = {
        1: 'Январь',
        2: 'Февраль',
        3: 'Март',
        4: 'Апрель',
        5: 'Май',
        6: 'Июнь',
        7: 'Июль',
        8: 'Август',
        9: 'Сентябрь',
        10: 'Октябрь',
        11: 'Ноябрь',
        12: 'Декабрь'
    }

    const timeout = useRef(null)
    const calendarRef = useRef(null)
    const titleRef = useRef(null)

    Store.useListener('calendar', setIsOpen)

    const closePopUp = () => {
        document.body.style.overflow = 'visible'
        setIsOpen('close')
    }

    const getDaysInMonth = (year, month) => {

        if (month === 2) {
            return (year % 4 === 0 && year % 100 !== 0) || year % 400 === 0
                ? 29
                : 28;
        } else if ([4, 6, 9, 11].includes(month)) {
            return 30;
        } else {
            return 31;
        }

    }

    const getFirstDayOfWeek = (year, month) => {
        const date = new Date(year, month - 1, 1);
        const days = date.getDay()
        if(days === 0) {
            return 6
        }
        return days - 1;
    }

    const prevMonth = () => {
        if(date.month < 2) {
            return setDate(prev => ({...prev, month: 12, year: prev.year - 1})) 
        } else {
            return setDate(prev => ({...prev, month: prev.month - 1}))
        }
    }

    const nextMonth = () => {
        if(date.month > 11) {
            return setDate(prev => ({...prev, month: 1, year: prev.year + 1}))
        } else {
            return setDate(prev => ({...prev, month: prev.month + 1}))
        }
    }

    useEffect(() => {

        clearTimeout(timeout.current)
        
        if(calendarRef.current) {
            calendarRef.current.style.opacity = '0'

            timeout.current = setTimeout(() => {
                let days = getDaysInMonth(date.year, date.month)
                let start = getFirstDayOfWeek(date.year, date.month)
                let list = []
        
                for (let i = 0; i < start; i++) {
                    list.push(0)
                }
                for (let i = 1; i <= days; i++) {
                    list.push(i)
                }
                for (let i = 1; i <= 42 - days - start; i++) {
                    list.push(0)
                }
        
                setCalendarList(list)
                timeout.current = setTimeout(() => {
                    calendarRef.current.style.opacity = '1'
                }, 300)
            }, 300)
        }

    }, [date.month, date.year, calendarRef])

    return {
        isOpen, 
        closePopUp, 
        days, 
        calendarList, 
        date, 
        months, 
        prevMonth,
        nextMonth, 
        calendarRef, 
        titleRef
    }

}