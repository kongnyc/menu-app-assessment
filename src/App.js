import './App.css';
import { useEffect, useState } from 'react';
import MenuList from './components/MenuList/MenuList';

function App() {
  const [menuData, setMenuData]= useState([]);

  useEffect(()=>{
    console.log('/App UseEffect Fire')
    async function fetchAPI() {
      const response = await fetch('https://px32id5fdg.execute-api.us-east-1.amazonaws.com/data');
      const json = await response.json()
      console.log('<App /> useEffect() fetched data', json.length);
      let data = [];
      json.forEach((el)=>{data.push(el)});
      setMenuData(data)
    }
    fetchAPI();
    
  },[])
  console.log('/App Rendred')
  return <div className="App">
    <MenuList MenuData={menuData}/>
  </div>;
}

export default App;
