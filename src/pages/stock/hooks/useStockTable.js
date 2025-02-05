import { useEffect, useRef, useState } from "react"
import Api from "../../../utils/Api"
import usePagination from "../../../hooks/usePagination"
import Store from "../../../utils/Store"

// Хук для управления таблицей запасов
export default function useStockTable () {

    // Полный исходный список (не отфильтрованный, не отсортированный)
    const store = useRef()
    // Список элементов таблицы для отображения
    const [list, setList] = useState(false)
    // исходный список (отфильтрованный, не отсортированый)
    const [changedStore, setChangedStore] = useState(false)
    // Промежуточный список для фильтрации и сортировки(и отфильтрованый и отсортированый)
    const [intermediateStore, setIntermediateStore] = useState(false)
    // Состояние ошибки (true, если загрузка данных не удалась)
    const [error, setError] = useState(false)

    const [loading, setloading] = useState(false)

    // Состояние для сортировки (по каким полям и в каком порядке)
    const [sort, setSort] = useState({
        id: '',
        stock: '',
        media: '',
        salesChanel: '',
        lot: '',
        category: '',
        region: '',
        cityMint: '',
        authority: '',
        metal: '',
        nominal: '',
        description: '',
        location: '',
        date: '',
        status: '',
    })

    // Состояние для управления видимостью колонок таблицы
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
        nominal: true,
        description: true,
        location: true,
        date: true,
        status: true,
    })

    // Значение ввода для количества элементов на страницу
    const [perPageInput, setPerPageInput] = useState('')

    // Хук для управления пагинацией
    const pagination = usePagination(intermediateStore, setList)

    // Подписка на событие изменения видимых фильтров через Store
    Store.useListener('saveShowFilters', (data) => {
        setIsShow(data)
    })

    Store.useListener('filtered_table', (data) => {
        
        const obj = data.map((el) => {
            return {
                id: el.stockNumber,
                stock: el.stockNumber,
                qr: el.idPhoto,
                media: el.photos,
                salesChanel: el.saleChannel,
                lot: el.lotNumber,
                category: el.category,
                region: el.region,
                cityMint: el.cityMint,
                authority: el.authority,
                metal: el.metal,
                nominal: el.nominal,
                description: el.description,
                location: el.location,
                date: el.createdAt,
                status: el.statusId,
            }
        })

        setChangedStore(obj)

        const newObj = filteredSort(obj)
        
        setIntermediateStore(newObj)
        setList(newObj.slice(0, pagination.perPage))

        pagination.setCurrentPage(1)
    })

    Store.useListener('clear_all_filters', () => {
        setChangedStore(store.current)
        const newObj = filteredSort(store.current)

        setIntermediateStore(newObj)
        setList(newObj.slice(0, pagination.perPage))
        pagination.setCurrentPage(1)
    })

    // Закрытие активных меню в ячейках таблицы при клике вне их
    const closeCellMenus = () => {
        const findActive = document.querySelectorAll('.cell_menu')

        findActive.forEach(el => {
            if(el.classList.contains('active')) {
                el.classList.remove('active')
            } 
        })
    }

    // Функция для сортировки по указанному полю
    const sortFunction = (sortBy) => {
        // Клонируем исходное состояние
        const obj = JSON.parse(JSON.stringify(changedStore));

        setSort(prev => {
            // Создаем копию состояния сортировки
            const newSort = { ...prev };
    
            // Сбрасываем сортировку всех других полей
            for (let key in newSort) {
                if (key !== sortBy) {
                    newSort[key] = ''; 
                }
            }

            // Применяем сортировку: если сортировка выключена, включаем по возрастанию
            if (newSort[sortBy] === '') {
                newSort[sortBy] = 'ASC';
                obj.sort((a, b) => {
                    if (a[sortBy] < b[sortBy]) return -1;
                    if (a[sortBy] > b[sortBy]) return 1;
                    return 0;
                });
            } 
            // Если включена сортировка по возрастанию, переключаем на убывание
            else if (newSort[sortBy] === 'ASC') {
                newSort[sortBy] = 'DESC'; 
                obj.sort((a, b) => {
                    if (a[sortBy] < b[sortBy]) return 1;
                    if (a[sortBy] > b[sortBy]) return -1;
                    return 0;
                });
            } 
            // Если уже была сортировка по убыванию, выключаем сортировку
            else if (newSort[sortBy] === 'DESC') {
                newSort[sortBy] = ''
            }
    
            // Применяем пагинацию к отсортированным данным
            const lastIndex = pagination.currentPage * pagination.perPage
            const firstIndex = lastIndex - pagination.perPage
    
            // Обновляем промежуточный и отображаемый списки
            setIntermediateStore(obj)
            const newObj = obj.slice(firstIndex, lastIndex)
            setList(newObj);

            return newSort;
        });
    };

    // Эффект для первоначальной загрузки данных и установки обработчика клика
    useEffect(() => {
        (async () => {
            // Получаем данные из API
            let init = await Api.asyncPost('api/coins/', {})

            if(init === 'error') {
                return setError(true) // Устанавливаем ошибку, если данные не загрузились
            }

            // Мапируем данные API в нужный формат
            const obj = init.map((el) => {
                return {
                    id: el.stockNumber,
                    stock: el.stockNumber,
                    qr: el.idPhoto,
                    media: el.photos,
                    salesChanel: el.saleChannel,
                    lot: el.lotNumber,
                    category: el.category,
                    region: el.region,
                    cityMint: el.cityMint,
                    authority: el.authority,
                    metal: el.metal,
                    nominal: el.nominal,
                    description: el.description,
                    location: el.location,
                    date: el.createdAt,
                    status: el.statusId,
                }
            })

            // Устанавливаем состояние для данных
            store.current = obj
            setChangedStore(obj)
            setIntermediateStore(obj)
            setList(obj.slice(0, 50)) // Отображаем первые 50 элементов
            setloading(prev => prev = true)
        })()

        // Добавляем обработчик клика для закрытия меню
        window.addEventListener('click', closeCellMenus)
    }, [])

    const filteredSort = (obj) => {
        const filledFieldsObj = (() => {
            const filtered = Object.fromEntries(
                Object.entries(sort).filter(([key, value]) => value !== '')
            );
            return Object.keys(filtered).length > 0 ? filtered : false;
        })();
        
        let newObj = structuredClone(obj)
        
        if(filledFieldsObj) {
            const sortBy = Object.keys(filledFieldsObj)[0]
            
            if (sort[sortBy] === 'ASC') {
                newObj.sort((a, b) => {
                    if (a[sortBy] < b[sortBy]) return -1;
                    if (a[sortBy] > b[sortBy]) return 1;
                    return 0;
                });
            } 

            else if (sort[sortBy] === 'DESC') {
                newObj.sort((a, b) => {
                    if (a[sortBy] < b[sortBy]) return 1;
                    if (a[sortBy] > b[sortBy]) return -1;
                    return 0;
                });
            } 
        }

        return newObj
    }

    // Возвращаем публичные методы и состояния
    return {
        loading,
        list,                   // Список данных для отображения
        sort,                   // Состояние сортировки
        isShow,                 // Видимость колонок
        sortFunction,           // Функция сортировки
        pagination,             // Управление пагинацией
        perPageInput, setPerPageInput, // Ввод количества элементов на страницу
    }
}
