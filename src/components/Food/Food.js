import React from 'react';

function Food({foodItem}) {
    console.log('FoodItem Rendered',foodItem.defaultOrder )
    // debugger;
   const {name,id,price,shortDescription} = foodItem
    return (
        <div>
            <ul className='FoodItem'>
            <li>{id}</li>
            <li>{name}</li>
            <li>${price.toFixed(2)}</li>
            <li>{shortDescription}</li>
            </ul>

        </div>
    );
}

export default Food;