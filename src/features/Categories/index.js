import React from "react";
import { useDispatch, useSelector } from "react-redux";
import Container from "../../common/Container";
import Tile from "../../common/Tile";
import { toTest } from "../../routes";
import {
  addToTest,
  selectAllChecked,
  selectStartFlag,
  selectStateCategories,
  startTest,
  toggleAllChecked,
  toggleCheck,
} from "../categoriesSlice";
import {
  StyledTitle,
  StyledButton,
  StyledParagraph,
  StyledLink,
} from "./styled";

const Categories = () => {
  const words = useSelector(selectStateCategories);
  const dispatch = useDispatch();
  const allChecked = useSelector(selectAllChecked);
  const startFlag = useSelector(selectStartFlag);
  return (
    <>
      <StyledTitle>Test z języka angielskiego dla klasy I</StyledTitle>
      <StyledParagraph>Wybierz kategorię słówek:</StyledParagraph>
      <Container>
        <StyledButton onClick={() => dispatch(toggleAllChecked(words))}>
          {allChecked ? "Odznacz wszystkie" : "Zaznacz wszystkie"}
        </StyledButton>
        <StyledLink to={toTest()}>
          <StyledButton
            disabled={startFlag}
            onClick={() => dispatch(startTest(words))}
          >
            Start
          </StyledButton>
        </StyledLink>
      </Container>
      <Container>
        {words.map((category) => (
          <StyledLink
            onClick={() => {
              dispatch(addToTest(category));
              dispatch(toggleCheck(category.id));
            }}
          >
            <Tile
              key={category.id}
              image={category.image}
              checked={allChecked || category.border}
              testedTile={false}
              title={<StyledTitle>{category.title}</StyledTitle>}
            />
          </StyledLink>
        ))}
      </Container>
    </>
  );
};

export default Categories;
