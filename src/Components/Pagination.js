

import { LIMIT } from '../utils';
import Pagination from 'react-js-pagination';
import { useState } from 'react';


const Paginaton = ({ count, onPageChanged }) => {
  
    const [activePage, setActivePage] = useState(1)

    const handlePagechange = (value) => {
        setActivePage(value);
        onPageChanged(value);
    }

    return (
        <div>
            <Pagination
                activePage={activePage}
                itemsCountPerPage={LIMIT}
                totalItemsCount={count}
                pageRangeDisplayed={10}
                onChange={(e) => handlePagechange(e)}
                className="pagination"
            />
        </div>
    );
}


export default Paginaton;
