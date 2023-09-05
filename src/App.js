import './App.css';
import  CardList  from './components/card-list/card-list.component';
import SearchBox from './components/search-box/search-box.component';
import { useState, useEffect } from 'react';


const App = () => { 

  const [searchString, setSearchString] = useState('');
  const [monsters, setMonsters] = useState([]);
  const [filteredMonsters, setFilterMonsters] = useState(monsters);

  useEffect(()=>{
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    .then((users) =>  setMonsters(users));
  },[]);

  useEffect(()=>{
    setFilterMonsters(monsters.filter(monster => monster.name.toLowerCase().includes(searchString)))
  },[monsters, searchString]);

  const onSearchChange = (event) => {
      setSearchString(event.target.value.toLowerCase());
  }


  return (
    <div className="App">
      <h1 className="app-title">Monsters Roloedex</h1>
        <SearchBox onChangeHandler={onSearchChange} placeholder='search monsters' className='monsters-search-box'/>
        <CardList monsters={filteredMonsters} /> 
    </div>
  );
}


export default App;
