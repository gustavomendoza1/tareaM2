import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { useDispatch, connect } from 'react-redux';
import { addFav, removeFav } from '../redux/actions';
import { useState, useEffect } from 'react';


const Card = (props) => {
   const dispatch = useDispatch();
   const [isFav, setIsFav] = useState(false);

   //! STYLES
   const Image = styled.img`
   border-radius: 30px;
   border: 3px solid #0FFF50;
   `;


   const CardDiv = styled.div`
      background-color: purple;
      text-align: center;
      padding: 10px;
      margin: 10px;
      border-radius: 30px;
      color: #0FFF50;      
      border: 6px solid #0FFF50;
   `;

   const Name = styled.h1`
      font-family: 'Permanent Marker', cursive;
      font-size: 40px;
      color: #0FFF50;  
   `;

   const Btn = styled.button`
   background: #881400;
   border-bottom: 2px inset rgba(0,0,0,.5);
   border-left: 2px inset rgba(0,0,0,.5);
   border-right: 2px inset rgba(255,255,255,.5);
   border-top: 2px inset rgba(255,255,255,.5);
   box-sizing: border-box;
   color: white;
   cursor: pointer;
   display: inline-block;
   font-size: 12px;
   margin: 0px;
   min-width: 20px;
   padding: 3px;
   text-transform: uppercase;
   width: ;
   position: relative;
   left: 130px;

   &:focus,
   &:hover {
      background: #BCBCBC;
   }
   `;

   const FavBtn = styled.button`
   background: #881400;
   border-bottom: 2px inset rgba(0,0,0,.5);
   border-left: 2px inset rgba(0,0,0,.5);
   border-right: 2px inset rgba(255,255,255,.5);
   border-top: 2px inset rgba(255,255,255,.5);
   // box-sizing: border-box;
   // color: white;
   cursor: pointer;
   // display: inline-block;
   font-size: 40px;
   // margin: 0px;
   // min-width: 20px;
   // padding: 0px;
   // text-transform: uppercase;
   // position: relative;
   // bottom: 700px;

   // &:focus,
   // &:hover {
   //    background: #BCBCBC;
   // }
   `;

   //! FUNCTIONS
   const handleClose = () => {
      props.onClose(props.id.toString());
    };

  

   const handleFavorite = () => {
      if (isFav) {
         dispatch(removeFav(props.id));
      } else {
         dispatch(addFav(props));
      }
      setIsFav(!isFav);
   };

   useEffect(() => {
      props.myFavorites.forEach((fav) => {
        if (fav.id === props.id) {
          setIsFav(true);
        }
      });
    }, [props.myFavorites, props.id]);
   
   //! RENDER
   return (
      <CardDiv>
         <Btn onClick={handleClose}>X</Btn>
         <Link to={`/detail/${props.id}`}>
            <Name>{props.name}</Name>
         </Link>
         <div>
            {isFav ? (
               <FavBtn onClick={handleFavorite}>❤️</FavBtn>
            ) : (
               <FavBtn onClick={handleFavorite}>🤍</FavBtn>
            )}
         </div>
         <Image src={props.image} alt='' />
      </CardDiv>
   );
};

const mapStateToProps = (state) => ({
   myFavorites: state.myFavorites,
});

export default connect(mapStateToProps)(Card);
