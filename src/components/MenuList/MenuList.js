import React from 'react';
import Food from '../Food/Food.js';

function MenuList({MenuData}) {
    console.log('MenuList Rendered',)
    
    return (
        <div className='MenuList'>
            {MenuData.map((item) => {
            return <Food key={item.id} foodItem={item}/>
            })}
        </div>
    );
}

export default MenuList;