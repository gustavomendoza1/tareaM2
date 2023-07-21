import React, { useState } from "react";
import SearchBar from "./SearchBar/SearchBar";
import styled from "styled-components";
import { Link } from "react-router-dom";


function Nav(props) {

    //! STATES
    const [randomCharacter, setRandomCharacter] = useState(null);

    //! STYLES
    const NavBar = styled.div`
        position: fixed;
        top: 1px;
        right: 1px;
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: center;
        padding: 20px;
        gap: 25px;
        border: 5px solid #0FFF50;
        border-radius: 10px;
        z-index: 1;
        opacity: 0.9;
        background-color: gray;
    `;

    const Btn = styled.button`
   background: #0FFF50;
	border-bottom: 6px inset rgba(0,0,0,.5);
	border-left: 6px inset rgba(0,0,0,.5);
	border-right: 6px inset rgba(255,255,255,.5);
	border-top: 6px inset rgba(255,255,255,.5);
	box-sizing: border-box;
	color: purple;
	cursor: pointer;
	display: inline-block;
	font-size: 18px;
	margin: 5px;
	min-width: ;
	padding: 3px;
	text-transform: uppercase;
	width: ;
	
	&:focus,
	&:hover {
		background: #BCBCBC;
   `;


    //! FUNCTIONS
    const handleRandomCharacter = () => {
        const randomId = Math.floor(Math.random() * 834) + 1;
        props.onSearch(randomId);
        setRandomCharacter(randomId);
      };

    //! RENDER
    return (
    <NavBar>
        <Link to="/home"><Btn>Home</Btn></Link>
        <Link to="/about"><Btn>About</Btn></Link>
        <Link to="/favorites"><Btn>Favorites</Btn></Link>
        <Link to="/" onClick={props.onLogout}><Btn>Logout</Btn></Link>
        <SearchBar onSearch={props.onSearch}/>
        <Btn onClick={handleRandomCharacter}>Random</Btn>
    </NavBar>
    )
}

export default Nav;