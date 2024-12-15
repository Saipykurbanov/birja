import React from 'react';
import Button from '../../../../components/button/Button';
import ArrowLeftBig from './ArrowLeftBig';
import ArrowLeft from './ArrowLeft';
import ArrowRight from './ArrowRight';
import ArrowRightBig from './ArrowRightBig';

const CustomTablePagination = ({props}) => {

    return (
        <div className='custom_table_pagination'>
            <div className="page">{props.currentPage} of {props.maxPage}</div>

            <Button callback={() => props.changePageStart()} mode={'small'}>
                <ArrowLeftBig />
            </Button>

            <Button callback={() => props.changePagePrev()} mode={'small'}>
                <ArrowLeft />
            </Button>

            <Button callback={() => props.changePageNext()} mode={'small'}>
                <ArrowRight />
            </Button>

            <Button callback={() => props.changePageEnd()} mode={'small'}>
                <ArrowRightBig />
            </Button>
        </div>
    );
};

export default CustomTablePagination;