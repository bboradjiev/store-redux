import React from 'react';

function Filter({count, sort, size, sortProducts, filterProducts}) {
    return (
        <div className='filter'>
            <div className='filter-result'>{count} Products</div>
            <div className='filter-sort'>Order
                <select value={sort} onChange={sortProducts}>
                    <option></option>
                    <option value='Latest' >Latest</option>
                    <option value='Lowest'>Lowest</option>
                    <option value='Highest'>Highest</option>
                </select>
            </div>
            <div className='filter-size'>
                Filter 
                <select value={size} onChange={filterProducts}>
                <option value=''>ALL</option>
                <option value='XS'>XS</option>
                <option value='S'>S</option>
                <option value='M'>M</option>
                <option value='L'>L</option>
                <option value='XL'>XL</option>
                <option value='XXL'>XXL</option>
                </select>
            </div>
        </div>
    );
};

export default Filter;
