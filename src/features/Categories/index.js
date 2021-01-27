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
  StyledAnchor,
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
        <StyledButton onClick={() => dispatch(toggleAllChecked())}>
          {allChecked ? "Odznacz wszystkie" : "Zaznacz wszystkie"}
        </StyledButton>
        <StyledLink to={toTest()}>
          <StyledButton
            disabled={startFlag}
            onClick={() => dispatch(startTest())}
          >
            Start
          </StyledButton>
        </StyledLink>
      </Container>
      <Container>
        {words.map((category) => (
          <StyledAnchor
          key={category.id}
            onClick={() => {
              dispatch(addToTest(category));
              dispatch(toggleCheck(category.id));
            }}
          >
            <Tile
              image={category.image}
              checked={allChecked || category.border}
              testedTile={false}
              title={<StyledTitle>{category.title}</StyledTitle>}
            />
          </StyledAnchor>
        ))}
      </Container>
    </>
  );
};

export default Categories;
