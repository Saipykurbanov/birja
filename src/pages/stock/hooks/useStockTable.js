import { useEffect, useState } from "react"
import Api from "../../../utils/Api"
import usePagination from "../../../hooks/usePagination"
import Store from "../../../utils/Store"

export default function useStockTable () {

    const [list, setList] = useState(false)
    const [store, setStore] = useState(false)
    const [intermediateStore, setIntermediateStore] = useState(false)
    const [error, setError] = useState(false)
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
        description: '',
        location: '',
        date: '',
        status: '',
    })
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
    const [perPageInput, setPerPageInput] = useState('')

    const pagination = usePagination(intermediateStore, setList)

    Store.useListener('saveShowFilters', (data) => {
        setIsShow(data)
    })

    const closeCellMenus = () => {
        const findActive = document.querySelectorAll('.cell_menu')

        findActive.forEach(el => {
            if(el.classList.contains('active')) {
                el.classList.remove('active')
            } 
        })
    }

    const sortFunction = (sortBy) => {
        const obj = JSON.parse(JSON.stringify(store));

        setSort(prev => {
            const newSort = { ...prev };
    
            for (let key in newSort) {
                if (key !== sortBy) {
                    newSort[key] = ''; 
                }
            }

            if (newSort[sortBy] === '') {
                newSort[sortBy] = 'ASC';
                
                obj.sort((a, b) => {
                    if (a[sortBy] < b[sortBy]) {
                        return -1;
                    }
                    if (a[sortBy] > b[sortBy]) {
                        return 1;
                    }
                    return 0;
                });
            } else if (newSort[sortBy] === 'ASC') {
                newSort[sortBy] = 'DESC'; 
                
                obj.sort((a, b) => {
                    if (a[sortBy] < b[sortBy]) {
                        return 1;
                    }
                    if (a[sortBy] > b[sortBy]) {
                        return -1;
                    }
                    return 0;
                });
            } else if (newSort[sortBy] === 'DESC') {
                newSort[sortBy] = ''
            }
    
            const lastIndex = pagination.currentPage * pagination.perPage
            const firstIndex = lastIndex - pagination.perPage
    
            setIntermediateStore(obj)
            const newObj = obj.slice(firstIndex, lastIndex)
            setList(newObj);

            return newSort;
        });

    };

    useEffect(() => {
        (async () => {
            let init = await Api.asyncGet('api/coins/')

            if(init === 'error') {
                return setError(true)
            }

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
                    description: el.description,
                    location: el.location,
                    date: el.createdAt,
                    status: el.statusId,
                }
            })

            setStore(obj)
            setIntermediateStore(obj)
            setList(obj.slice(0, 50))
        })()

        window.addEventListener('click', closeCellMenus)
    }, [])

    return {
        list,
        sort,
        isShow,
        sortFunction,
        pagination,
        perPageInput, setPerPageInput,
    }
}