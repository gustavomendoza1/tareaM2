import React, { useState } from 'react';
import style from './SearchBar.module.css';

export default function SearchBar(props) {

   //! STATES
   const [id, setId] = useState('');
   

   //!FUNCTIONS
   const handleChange = (event) => {
      setId(event.target.value);
    };
  
    const handleSearch = () => {
      props.onSearch(id);
    };


   //! RENDER
   return (
      <div>
         <input 
         className={style.searchbar_input}
         id='inputSearch' 
         type='text' 
         placeholder='Search...' 
         value={id}
         onChange={handleChange}
         />
         <button className={style.btn_button} onClick={handleSearch}>Add</button>
      </div>
   );
}
