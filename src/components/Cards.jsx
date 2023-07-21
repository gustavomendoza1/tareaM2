import Card from './Card';
import styled from 'styled-components';

export default function Cards(props) {

   //! STYLES
   const CardsDiv = styled.div`
      display: flex;
      flex-direction: row;
      flex-wrap: wrap;
      justify-content: center;
      align-items: center;
      padding: 80px;
      gap: 20px;
   `;

   //! RENDER
   return <CardsDiv>
      {props.characters.map((character) => (
         <Card
            key={character.id}
            id={character.id}
            name={character.name}
            status={character.status}
            species={character.species}
            gender={character.gender}
            origin={character.origin.name}
            image={character.image}
            onClose={props.onClose}
         />
      ))}
   </CardsDiv>;
}
