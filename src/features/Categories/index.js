import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { toTest } from "../../routes";
import {
  addToTest,
  selectAllChecked,
  selectStartFlag,
  selectStateCategories,
  startTest,
  toggleAllChecked,
  toggleCheck
} from "../categoriesSlice";
import {
  StyledTile,
  StyledContainer,
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
    <><StyledTitle>Test z języka angielskiego dla klasy I</StyledTitle>
      <StyledParagraph>Wybierz kategorię słówek:</StyledParagraph>
      <StyledContainer>
        <StyledButton onClick={() => dispatch(toggleAllChecked(words))}>
          {allChecked ? "Odznacz wszystkie" : "Zaznacz wszystkie"}
        </StyledButton>
        <StyledLink to={toTest()}>
          <StyledButton disabled={startFlag} onClick={()=>dispatch(startTest(words))}>Start</StyledButton>
        </StyledLink>
      </StyledContainer>
      <StyledContainer>
        {words.map((category) => (
          <StyledTile
            key={category.id}
            image={category.image}
            onClick={() => {
              dispatch(addToTest(category));
              dispatch(toggleCheck(category.id));
            }}
            checked={allChecked || category.border}
          >
            <StyledTitle>{category.title}</StyledTitle>
          </StyledTile>
        ))}
      </StyledContainer>
    </>
  );
};

export default Categories;
