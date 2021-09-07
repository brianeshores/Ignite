// Import dependancies
import React from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
// Import styles and animations
import styled from "styled-components";
import { motion } from "framer-motion";
import { popup } from "../animations";
import { smallImage } from "../util";
// import actions
import { loadDetail } from "../actions/detailsAction";

const Game = ({ name, released, image, id, screenshots }) => {
  const stringPathId = id.toString();
  const dispatch = useDispatch();
  const loadDetailsHandler = () => {
    document.body.style.overflow = "hidden";
    dispatch(loadDetail(id, screenshots));
  };
  return (
    <StyledGame
      variants={popup}
      initial="hidden"
      animate="show"
      layoutId={stringPathId}
      onClick={loadDetailsHandler}
    >
      <Link to={`/game/${id}`}>
        <h3>{name}</h3>
        <p>{released}</p>
        <img src={smallImage(image, 640)} alt={name} />
      </Link>
    </StyledGame>
  );
};
// styled components
const StyledGame = styled(motion.div)`
  min-height: 30vh;
  box-shadow: 0px 5px 20px rgba(0, 0, 0, 0.2);
  text-align: center;
  border-radius: 0.5rem;
  cursor: pointer;
  overflow: hidden;
  img {
    width: 100%;
    height: 40vh;
    object-fit: cover;
  }
`;

export default Game;
