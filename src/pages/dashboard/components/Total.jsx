import React from 'react';
import Input from '../../../components/input/Input';
import Button from '../../../components/button/Button';
import Title from '../../../components/title/Title';

const Total = () => {
    return (
        <div className='total'>

            <div className="input_block">
                <Input 
                    type={'text'}
                    label={'TOTAL ESTIMATE'}
                    mode={''} 
                    placeholder={''} 
                    value={'15 008 ₽'} 
                    callback={''} 
                    maxWidth={''} 
                />

                <div className="total_input">
                    <Title>Total sold</Title>

                    <div className="total_input_wrapper">
                        <input type="text" value={'15 008 ₽'}/>

                        <img src="./icons/long_arrow_up.svg" alt="" />
                    </div>
                </div>
            </div>

            <div className="button_block">
                <Button mode={'full uppercase white bold blue'}>New orders 310</Button>
                <Button mode={'full uppercase white bold green2'}>in shop 310</Button>
                <Button mode={'full uppercase white bold violet'}>sold 310</Button>
            </div>
        </div>
    );
};

export default Total;