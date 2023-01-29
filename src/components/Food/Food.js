import React from 'react';
import './Food.css'

function Food({foodItem}) {
    console.log('FoodItem Rendered',foodItem.defaultOrder )
    // debugger;
   const {name,id,price,shortDescription} = foodItem
    return (
        <div>
            <ul className='FoodItem'>
            <li>id: {id}</li>
            <li>name: {name}</li>
            <li>price: ${price.toFixed(2)}</li>
            <li>{shortDescription}</li>
            </ul>

        </div>
    );
}

export default Food;