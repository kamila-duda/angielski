import React from "react";
import { useDispatch, useSelector } from "react-redux";
import Container from "../../common/Container";
import Tile from "../../common/Tile";
import { toWords } from "../../routes";
import { selectStateCategories } from "../testSlice";
import {
  selectCategory,
} from "../wordsSlice";
import {
  StyledTitle,
  StyledLink,
} from "./styled";

const WordsPage = () => {
  const words = useSelector(selectStateCategories);
  const dispatch = useDispatch();

  return (
    <>
      <StyledTitle>Wybierz kategorię słówek do nauki:</StyledTitle>
      <Container>
        {words.map((category) => (
          <StyledLink
            key={category.id}
            onClick={() => {
              dispatch(selectCategory(category.id));
            }}
            to={toWords()}
          >
            <Tile
              image={category.image}
              testedTile={false}
              title={<StyledTitle>{category.title}</StyledTitle>}
            />
          </StyledLink>
        ))}
      </Container>
    </>
  );
};

export default WordsPage;
