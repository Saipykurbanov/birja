import { useState } from "react";

/**
 * Хук `usePagination` управляет логикой пагинации.
 * Обеспечивает переключение страниц, изменение количества элементов на странице и разбиение данных на страницы.
 */
export default function usePagination(store, callback) {
    // Состояние для текущей страницы.
    const [currentPage, setCurrentPage] = useState(1);

    // Состояние для количества элементов на одной странице.
    const [perPage, setPerPage] = useState(50);

    // Максимальное количество страниц, основанное на длине массива store.
    const maxPage = Math.ceil(store.length / perPage);

    /**
     * Переключение на следующую страницу.
     * Если текущая страница является последней, остаётся на ней.
     */
    const changePageNext = () => {
        setCurrentPage(prev => {
            if (prev >= maxPage) {
                return maxPage;
            } else {
                sliceList(prev + 1);
                return prev + 1;
            }
        });
    };

    /**
     * Переключение на предыдущую страницу.
     * Если текущая страница является первой, остаётся на ней.
     */
    const changePagePrev = () => {
        setCurrentPage(prev => {
            if (prev <= 1) {
                return prev;
            } else {
                sliceList(prev - 1);
                return prev - 1;
            }
        });
    };

    /**
     * Переключение на первую страницу.
     */
    const changePageStart = () => {
        setCurrentPage(() => {
            sliceList(1);
            return 1;
        });
    };

    /**
     * Переключение на последнюю страницу.
     */
    const changePageEnd = () => {
        setCurrentPage(() => {
            sliceList(maxPage);
            return maxPage;
        });
    };

    /**
     * Срез данных для текущей страницы.
     * @param {number} page - Номер страницы, для которой нужно выполнить срез данных
     */
    const sliceList = (page) => {
        const obj = structuredClone(store); // Создаёт глубокую копию массива.

        const lastIndex = page * perPage; // Последний индекс для текущей страницы.
        const firstIndex = lastIndex - perPage; // Первый индекс для текущей страницы.

        callback(obj.slice(firstIndex, lastIndex)); // Возвращает срез данных через callback.
    };

    /**
     * Изменяет количество элементов на одной странице.
     * @param {number} value - Новое количество элементов на странице.
     */
    const changePerPage = (value) => {
        const obj = structuredClone(store); // Создаёт глубокую копию массива.
        const newMaxPage = Math.ceil(store.length / value); // Пересчитывает максимальное количество страниц.

        // Ограничиваем текущую страницу максимально возможной, если она выходит за пределы.
        const newCurrentPage = Math.min(currentPage, newMaxPage);

        // Вычисляем индексы для новой страницы.
        const lastIndex = newCurrentPage * value;
        const firstIndex = lastIndex - value;

        // Обновляем срез данных и состояние.
        callback(obj.slice(firstIndex, lastIndex));
        setCurrentPage(newCurrentPage);
        setPerPage(value);
    };


    // Возвращает состояния и функции для управления пагинацией.
    return {
        currentPage, // Текущая страница.
        perPage, // Количество элементов на странице.
        maxPage, // Максимальное количество страниц.
        setPerPage, // Функция для изменения количества элементов на странице.
        changePageNext, // Переключение на следующую страницу.
        changePagePrev, // Переключение на предыдущую страницу.
        changePageStart, // Переключение на первую страницу.
        changePageEnd, // Переключение на последнюю страницу.
        changePerPage, // Функция для изменения количества элементов на странице.
    };
}
