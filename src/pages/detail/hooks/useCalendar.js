import { useEffect, useRef, useState } from "react"

export default function useCalendar() {

    // Переменные состояния для управления функциональностью календаря
    const [isOpen, setIsOpen] = useState(false) // Состояние открытия попапа календаря
    const [calendarList, setCalendarList] = useState([]) // Список дней для отображения в календаре
    const [date, setDate] = useState(() => { 
        const date = new Date()
        const object = {
            month: date.getMonth() + 1, // Текущий месяц (1-based)
            year: date.getFullYear(),  // Текущий год
        }
        return object
    })

    const [currentDate, setCurrentDate] = useState('') // Текущая введённая пользователем дата
    const [parseDate, setParseDate] = useState({
        day: '', // День
        month: '', // Месяц
        year: '' // Год
    })
    const [error, setError] = useState(false) // Состояние ошибки при вводе даты

    // Функция для изменения даты
    const change = (value, type) => {
        setCurrentDate(value);
    
        const regex = /^\d{2}\.\d{2}\.\d{4}$/; // Регулярное выражение для проверки формата ДД.ММ.ГГГГ
        if (regex.test(value)) { // Если формат даты корректен
            let [day, month, year] = value.split('.'); // Разделяем строку на день, месяц и год
    
            setError(false); // Убираем ошибку
            setParseDate({ day, month, year }); // Устанавливаем разобранные значения
            setCurrentDate(`${day}.${month}.${year}`); // Обновляем строку текущей даты
        } else {
            setError(true); // Устанавливаем ошибку
            setParseDate({ day: '', month: '', year: '' }); // Сбрасываем разобранные значения
        }
    };

    // Список дней недели
    const days = [
        {day: 'Понедельник', name: 'Пн'}, 
        {day: 'Вторник', name: 'Вт'}, 
        {day: 'Среда', name: 'Ср'}, 
        {day:  'Четверг', name: 'Чт'}, 
        {day: 'Пятница', name: 'Пт'}, 
        {day: 'Суббота', name: 'Сб', weekend: true}, // Выходной день
        {day: 'Воскресенье', name: 'Вс', weekend: true} // Выходной день
    ]

    // Список месяцев
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

    const titleRef = useRef(null) // Реф для заголовка календаря    

    // Функция открытия попапа календаря
    const openPopUp = (e) => {
        e.stopPropagation() // Останавливаем всплытие события
        if(currentDate !== '' && !error) { // Если пользователь ввёл дату
            const [day, month, year] = currentDate.split('.'); // Разбираем дату
            setDate(prev => ({...prev, month: Number(month), year: year})) // Устанавливаем текущий месяц и год
        }
        setIsOpen(true) // Открываем попап
    }

    // Функция закрытия попапа календаря
    const closePopUp = () => {
        setIsOpen(false) // Закрываем попап
    }

    // Получение количества дней в месяце
    const getDaysInMonth = (year, month) => {
        if (month === 2) { // Для февраля
            return (year % 4 === 0 && year % 100 !== 0) || year % 400 === 0
                ? 29 // Високосный год
                : 28; // Обычный год
        } else if ([4, 6, 9, 11].includes(month)) { // Для месяцев с 30 днями
            return 30;
        } else { // Для остальных месяцев
            return 31;
        }
    }

    // Определение первого дня недели месяца
    const getFirstDayOfWeek = (year, month) => {
        const date = new Date(year, month - 1, 1); // Первый день месяца
        const days = date.getDay(); // День недели (0-6)
        if(days === 0) { // Преобразуем воскресенье (0) в последний день
            return 6;
        }
        return days - 1; // Остальные дни смещаем на 1
    }

    // Переключение на предыдущий месяц
    const prevMonth = () => {
        if(date.month < 2) { // Если текущий месяц — январь
            return setDate(prev => ({...prev, month: 12, year: Number(prev.year) - 1})) // Переход на декабрь предыдущего года
        } else {
            return setDate(prev => ({...prev, month: Number(prev.month) - 1})) // Переход на предыдущий месяц
        }
    }

    // Переключение на следующий месяц
    const nextMonth = () => {
        if(date.month > 11) { // Если текущий месяц — декабрь
            return setDate(prev => ({...prev, month: 1, year: Number(prev.year) + 1})) // Переход на январь следующего года
        } else {
            return setDate(prev => ({...prev, month: Number(prev.month) + 1})) // Переход на следующий месяц
        }
    }

    // Изменение текущей даты
    const changeDate = (d) => {
        let day = d // Получаем выбранный день
        let month = (date.month).toString().length < 2 ? '0' + date.month : date.month // Добавляем ведущий ноль к месяцу, если его длина меньше 2
        let year = date.year // Получаем текущий год
        
        setCurrentDate(`${day}.${month}.${year}`) // Устанавливаем строку текущей даты в формате ДД.ММ.ГГГГ
        setParseDate({ day, month, year }) // Обновляем разобранные значения дня, месяца и года
        setIsOpen(false) // Закрываем календарь
        setError(false) // Сбрасываем ошибку валидации
        
        return
    };

    // Эффект для обновления списка дней календаря при изменении месяца или года
    useEffect(() => {

        let days = getDaysInMonth(date.year, date.month) // Получаем количество дней в месяце
        let start = getFirstDayOfWeek(date.year, date.month) // Первый день недели
        let list = []
    
        for (let i = 0; i < start; i++) { // Добавляем пустые ячейки перед первым днём месяца
            list.push(0)
        }
        for (let i = 1; i <= days; i++) { // Добавляем дни месяца
            i = i.toString()
            if(i.length < 2) {
                list.push(`0${i}`) // Добавляем ведущий ноль
            } else {
                list.push(i)
            }
        }
        for (let i = 1; i <= 42 - days - start; i++) { // Заполняем остаток ячейками
            list.push(0)
        }
    
        setCalendarList(list) // Устанавливаем список дней
    }, [date.month, date.year])

    // Эффект для закрытия попапа при клике вне него
    useEffect(() => {
        window.addEventListener('click', closePopUp)

        return () => {
            window.removeEventListener('click', closePopUp)
        }
    }, [])

    return {
        isOpen, 
        openPopUp, 
        closePopUp,
        days, 
        calendarList, 
        date, 
        months, 
        prevMonth,
        nextMonth, 
        titleRef,
        change,
        changeDate,
        currentDate,
        parseDate,
        error
    }
}
