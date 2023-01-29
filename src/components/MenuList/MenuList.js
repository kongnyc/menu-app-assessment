import React,{useState} from 'react';
import Food from '../Food/Food.js';
import SearchBar from '../SearchBar/SearchBar.js';

function MenuList({MenuData}) {
    console.log('MenuList Rendered',)
    const [searchTerm, setSearchTerm] = useState("");

    let filteredData = MenuData;
    if(searchTerm){
        filteredData = MenuData.filter((item) => {
            const foodLowerName = item.name.toLowerCase() + ' '  + item.shortDescription.toLowerCase();
            const searchTermLowerName = searchTerm.toLowerCase();
            return foodLowerName.includes(searchTermLowerName)
        })
    }

    console.log(filteredData)
    
    return (
        <div className='MenuList'>
            <SearchBar searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
            {filteredData.map((item) => {
            return <Food key={item.id} foodItem={item}/>
            })}
            {filteredData.length === 0 && (
            <div className="FoodItem__noResults">No result found for: {searchTerm}</div>
      )}
        </div>
    );
}

export default MenuList;