import React, { useState } from 'react';
import { connect } from 'react-redux';
import Card from '../Card';
import styled from 'styled-components';
import { removeFav, filterCards, orderCards } from '../../redux/actions';
import { useDispatch } from 'react-redux';
import style from './Favorites.module.css';

const Favorites = (props) => {
  const { myFavorites } = props;
  const dispatch = useDispatch();
  const [aux, setAux] = useState(false); // Estado local para "aux"

  const CardsDiv = styled.div`
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    padding: 100px;
    gap: 20px;
  `;

  const NewLabel = styled.label`
   background-color: purple;
   border-radius: 10px;
   color: #0FFF50;      
   min-width: 15%;
   height: 33px;
   font-size: 24px;
  `;

  const SortDiv = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    gap: 20px;
    padding: 20px;
    border: 2px solid #0FFF50;
    border-radius: 10px;
    background-color: purple;
    color: #0FFF50;
    min-width: 15%;
    height: 33px;
    font-size: 24px;
    
  `;

  const handleClose = (id) => {
    dispatch(removeFav(id));
  };

  const handleOrder = (e) => {
    dispatch(orderCards(e.target.value));
    setAux(!aux); // Cambiar el estado local "aux" a su valor opuesto
  };

  const handleFilter = (e) => {
    const selectedValue = e.target.value;
    if (selectedValue === 'All') {
      // Mostrar todos los personajes sin filtro
      return;
    }
    dispatch(filterCards(selectedValue));
  };

  return (
    <>
      <div className={style.sort_div}>
        {/* Select para el ordenamiento */}
        <label htmlFor="order">Ordenar:</label>
        <select id="order" onChange={handleOrder}>
          <option value="A">Ascendente</option>
          <option value="D">Descendente</option>
        </select>
      </div>
      <div className={style.sort_div2}>
        {/* Select para el filtrado */}
        <label htmlFor="filter">Filtrar por género:</label>
        <select id="filter" onChange={handleFilter}>
          <option value="All">Todos</option>
          <option value="Male">Male</option>
          <option value="Female">Female</option>
          <option value="Genderless">Genderless</option>
          <option value="unknown">Unknown</option>
        </select>
      </div>
      <div className={style.cards_div}>
        {myFavorites.map((character) => (
          <Card key={character.id} {...character} onClose={handleClose} />
        ))}
      </div>
    </>
  );
};

const mapStateToProps = (state) => ({
  myFavorites: state.myFavorites,
});

export default connect(mapStateToProps)(Favorites);
