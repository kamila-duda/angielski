import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { toTest } from "../../routes";
import { addToTest, selectAllChecked, selectStartFlag, setAllChecked, toggleAllChecked, toggleCheck } from "../categoriesSlice";
import { words } from "../words";
import {
  StyledTile,
  StyledContainer,
  StyledTitle,
  StyledButton,
  StyledParagraph,
  StyledLink,
} from "./styled";

const Categories = () => {
  const [checked, setChecked] = useState(false);
  const dispatch = useDispatch();
  const allChecked = useSelector(selectAllChecked);
  const startFlag = useSelector(selectStartFlag);
  return (
    <>
      <StyledParagraph>Wybierz kategorię słówek:</StyledParagraph>
      <StyledContainer>
        <StyledButton onClick={() => dispatch(toggleAllChecked())}>
          {allChecked ? "Odznacz wszystkie" : "Zaznacz wszystkie"}{" "}
        </StyledButton>
        <StyledLink to={toTest()} >
          <StyledButton disabled={startFlag}>Start</StyledButton>
        </StyledLink>
      </StyledContainer>
      <StyledContainer>
        {words.map((category) => (
          <StyledTile
            key={category.id}
            image={category.image}
            onClick={() => {
              dispatch(addToTest(category.words));
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
