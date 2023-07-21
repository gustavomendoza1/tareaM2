import './App.css';
import Cards from './components/Cards.jsx';
import background from '../src/images/background.jpg';
import styled from 'styled-components';
import Nav from './components/Nav';
import { useState, useEffect } from 'react';
import axios from 'axios';
import { Routes, Route, useLocation, useNavigate } from 'react-router-dom';
import About from './components/About';
import Detail from './components/Detail';
import { CharactersProvider } from './CharactersContext';
import Form from './components/Form/Form';
import Favorites from './components/Favorites/Favorites';


function App() {

   //! STATES
   const [characters, setCharacters] = useState([]);
   const [access, setAccess] = useState(false);
   const [userData, setUserData] = useState(null);

   //! VARIABLES
   const navigate = useNavigate();
   const email = 'gustavofinderglobal1@gmail.com';
   const password = 'gustavo1';

   //! FUNCTIONS

   useEffect(() => {
      const storedUserData = localStorage.getItem('userData');
  
      if (storedUserData) {
        const userData = JSON.parse(storedUserData);
        setUserData(userData);
  
        if (userData.password === password && userData.email === email) {
          setAccess(true);
          navigate('/home');
        } else {
          setAccess(false);
        }
      } else {
        setAccess(false);
      }
    }, []);
  
    function login(userData) {
      if (userData.password === password && userData.email === email) {
        setAccess(true);
        setUserData(userData);
        navigate('/home');
        localStorage.setItem('userData', JSON.stringify(userData));
      } else {
        setAccess(false);
        setUserData(null);
        localStorage.removeItem('userData');
      }
    }

   const onSearch = (id) => {
      axios(`https://rickandmortyapi.com/api/character/${id}`)
         .then(({ data }) => {
            if(!characters.find((character) => character.id === data.id)){
               if(data.name){
                  setCharacters((OldCharacters) => [...OldCharacters, data]);
               }
            } else {
               window.alert('Este personaje ya existe')
            }
         })
         .catch(
            err => window.alert(err)
         );     
   }

   const onClose = (id) => {
      const filteredCharacters = characters.filter((character) => character.id !== parseInt(id));
      setCharacters(filteredCharacters);
    };

    function handleLogout() {
      setAccess(false);
      setUserData(null);
      localStorage.removeItem('userData');
    }

   //! STYLES
   const AppDiv = styled.div`
   display: flex;
   flex-direction: row;
   justify-content: center;
   align-items: center;
   padding: 20px;
   gap: 20px;
   min-height: 100vh;
   background-image: url(${background});
   background-size: cover;
 `;

 const location = useLocation();

   //! RENDER
   return (
      <CharactersProvider>
         <AppDiv className='App'> 
               {location.pathname !== '/' && <Nav onSearch={onSearch} onLogout={handleLogout} />}
               <Routes>
                  <Route path='/favorites' element={<Favorites />} />
                  <Route path='/home' element={<Cards characters={characters} onClose={onClose} />} />
                  <Route path = '/' element={<Form login={login}/>} />
                  <Route path='/about' element={<About/>} />
                  <Route path='/detail/:id' element={<Detail characters={characters} />} />
               </Routes>

             {/* <Nav onSearch={onSearch}/> */}
            {/* <Cards characters={characters} onClose={onClose} /> */}
            <style>
               @import url('https://fonts.googleapis.com/css2?family=Permanent+Marker&display=swap');
            </style>
         </AppDiv>
      </CharactersProvider>
   );
}

export default App;
