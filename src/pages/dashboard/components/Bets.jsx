import React from 'react';
import Input from '../../../components/input/Input';
import Title from '../../../components/title/Title';

const Bets = () => {
    return (
        <div className='bets'>
            <Input 
                type={'text'}
                label={'Start'}
                mode={''} 
                placeholder={''} 
                value={'15 008 ₽'} 
                callback={''} 
                maxWidth={''} 
            />

            <div className="turnover_input">
                <Title>Turnover</Title>

                <div className="turnover_input_wrapper">
                    <input type="text" value={'6 046 ₽'}/>

                    <img src="./icons/long_arrow_down.svg" alt="" />
                </div>
            </div>
        </div>
    );
};

export default Bets;