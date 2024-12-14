import React from 'react';
import Button from '../../../components/button/Button';
import Input from '../../../components/input/Input';

const TabelFilters = ({ perPageInput, setPerPageInput, perPage, changePerPage }) => {

    const show = () => {
        if(perPageInput === '' || perPageInput <= 0) {
            return
        }
        changePerPage(perPageInput)
        setPerPageInput('')
    }

    const inputPerPage = (value) => {
        value = value.replace(/[^0-9]/g, '')

        setPerPageInput(value)
    }

    return (
        <div className='table_filters'>

            <div className="button_flex">
                <Button mode={`small ${perPage === 50 ? 'active' : ''}`} callback={() => changePerPage(50)}>50</Button>
                <Button mode={`small ${perPage === 100 ? 'active' : ''}`} callback={() => changePerPage(100)}>100</Button>
                <Button mode={`small ${perPage === 150 ? 'active' : ''}`} callback={() => changePerPage(150)}>150</Button>
            </div>

            <Input 
                type={'text'}
                mode={'grey'}
                placeholder={'Your number'}
                maxWidth={'202'}
                value={perPageInput}
                callback={(e) => inputPerPage(e.target.value)}
            />

            <Button mode={'blue_lite uppercase full bold'} callback={show}>Show</Button>
        </div>
    );
};

export default TabelFilters;