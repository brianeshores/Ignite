import React, { useState } from "react";
import { motion } from "framer-motion";
import styled from "styled-components";
import logo from "../img/logo.svg";
import { fetchSearched } from "../actions/gamesAction";
import { useDispatch } from "react-redux";
import { fadeIn } from "../animations";

const Nav = () => {
  const dispatch = useDispatch();
  const [textInput, setTextInput] = useState("");
  const textInputHandler = (e) => {
    setTextInput(e.target.value);
  };
  const submitSearch = (e) => {
    e.preventDefault();
    dispatch(fetchSearched(textInput));
    setTextInput("");
  };
  const clearSearched = () => {
    dispatch({ type: "CLEAR_SEARCHED" });
  };
  return (
    <div>
      <StyledNav variants={fadeIn} initial="hidden" animate="show">
        <Logo onClick={clearSearched}>
          <img src={logo} alt="logo" />
          <h1>Ignite</h1>
        </Logo>
        <form className="search" onSubmit={submitSearch}>
          <input value={textInput} onChange={textInputHandler} type="text" />
          <button type="submit">Search</button>
        </form>
      </StyledNav>
    </div>
  );
};

const StyledNav = styled(motion.nav)`
  padding: 3rem 5rem;
  text-align: center;
  input {
    width: 30%;
    font-size: 1.5rem;
    padding: 0.5rem;
    border: none;
    margin-top: 1rem;
    box-shadow: 0px 0px 30px rgba(0, 0, 0, 0.2);
    outline: none;
  }
  button {
    font-size: 1.5rem;
    border: none;
    padding: 0.5rem 2rem;
    cursor: pointer;
    background: #d6be39;
    color: white;
  }
`;
const Logo = styled(motion.div)`
  display: flex;
  justify-content: center;
  padding: 1rem;
  cursor: pointer;
  img {
    width: 2rem;
    height: 2rem;
  }
`;
export default Nav;
