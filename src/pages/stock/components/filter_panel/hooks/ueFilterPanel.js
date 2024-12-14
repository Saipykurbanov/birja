import { useEffect, useState } from "react";
import Store from "../../../../../utils/Store";

/**
 * Хук `useFilterPanel` отвечает за управление состоянием и логикой работы панели фильтров.
 * Он обрабатывает открытие/закрытие панели, переключение вкладок и сохранение настроек видимости фильтров.
 */
export default function useFilterPanel() {
    // Состояние для открытия панели фильтров (открыта/закрыта).
    const [isOpen, setIsOpen] = useState(false);

    // Состояние для текущей активной вкладки в панели фильтров.
    const [tab, setTab] = useState('data');

    // Состояние для управления видимостью различных фильтров в панели.
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
    });

    // Подписка на событие "open_filter_panel" из Store для управления видимостью панели.
    Store.useListener('open_filter_panel', setIsOpen);

    /**
     * Закрытие панели фильтров. Сбрасывает состояние видимости панели и очищает класс у body.
     */
    const closePanel = (e) => {
        e.stopPropagation(); // Предотвращает всплытие события клика.
        document.body.className = ''; // Убирает классы с body, если они были добавлены при открытии панели.
        setIsOpen(prev => prev = false); // Закрывает панель.
    };

    /**
     * Сохраняет текущие настройки видимости фильтров в Store для последующего использования.
     */
    const saveShowFilters = () => {
        Store.setListener('saveShowFilters', isShow);
    };

    /**
     * Эффект для добавления обработчика события клика на окно браузера,
     * чтобы закрывать панель фильтров при клике вне её области.
     * Возвращает функцию очистки для удаления обработчика при размонтировании компонента.
     */
    useEffect(() => {
        window.addEventListener('click', (e) => closePanel(e));

        // Очистка обработчика события при размонтировании.
        return () => window.removeEventListener('click', (e) => closePanel(e));
    }, []);

    // Возвращает все состояния и функции для управления панелью фильтров.
    return {
        tab, // Текущая активная вкладка.
        isOpen, // Состояние видимости панели фильтров.
        isShow, // Настройки видимости отдельных фильтров.
        setTab, // Функция для переключения вкладки.
        setIsShow, // Функция для изменения настроек видимости фильтров.
        saveShowFilters, // Функция для сохранения настроек видимости фильтров.
    };
}
