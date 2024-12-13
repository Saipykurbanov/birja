import React from 'react';

const CellMenu = () => {

    const openMenu = (e) => {
        e.stopPropagation()

        if(e.currentTarget.classList.contains('active')) {
            return e.currentTarget.classList.remove('active')
        }

        const findActive = document.querySelectorAll('.cell_menu')

        findActive.forEach(el => {
            if(el.classList.contains('active') && el !== e.currentTarget) {
                el.classList.remove('active')
            } else if (el === e.currentTarget) {
                el.classList.add('active')
            }
        })
    }

    return (
        <div className='cell_menu' onClick={openMenu}>
            <span></span>
            <span></span>
            <span></span>

            <div className={`cell_menu_list`}>
                <p className='active'>Cart lot</p>
                <p>Duplicate</p>
                <p>Delete</p>
                <p>Print</p>
            </div>
        </div>
    );
};

export default CellMenu;