import styled from 'styled-components';
import { useParams } from 'react-router-dom';


const Detail = (props) => {

    const { id } = useParams();
    // const { characters } = useContext(CharactersContext);
    const characterId = parseInt(id);
    const character = props.characters.find((character) => character.id === characterId);
  

    
    
    const Title = styled.h1`
        // position: relative;
        // right: 220px;
        text-align: left;
        font-size: 50px;
        color: #0FFF50;
    `;

    const Image = styled.img`
        // display : flex;
        // position: absolute;
        // left: 1000px;
        // bottom: 150px;
        border-radius: 30px;
        border: 3px solid #0FFF50;
        max-width: 300px;
    `;

    const Name = styled.h1`
      font-family: 'Permanent Marker', cursive;
      font-size: 100px;
      color: #0FFF50;
   `;

   const CenterDiv = styled.div`
       display: flex;
       flex-direction: column;
       justify-content: center;
       align-items: center;
   `;

    return (
        <div>
            {/* <Title>Detail</Title> */}
            {character && (
            <CenterDiv>
                <Name>{character.name}</Name>
                <Image src={character.image} alt='hola'/>
                <Title>STATUS | {character.status}</Title>
                <Title>SPECIES | {character.species}</Title>
                <Title>GENDER | {character.gender}</Title>
                <Title>ORIGIN | {character.origin.name}</Title>
                <Title>LOCATION | {character.location.name}</Title>
            </CenterDiv>
            )}
      </div>
      );
};

export default Detail;

