import React from "react";
import { useDispatch, useSelector } from "react-redux";
import Container from "../../common/Container";
import Tile from "../../common/Tile";
import { toTest } from "../../routes";
import {
  selectCategory,
  selectAllChecked,
  selectStartFlag,
  selectStateCategories,
  startTest,
  toggleAllChecked,
} from "../testSlice";
import {
  StyledTitle,
  StyledButton,
  StyledParagraph,
  StyledLink,
  StyledAnchor,
} from "./styled";

const TestCategories = () => {
  const words = useSelector(selectStateCategories);
  const dispatch = useDispatch();
  const allChecked = useSelector(selectAllChecked);
  const startFlag = useSelector(selectStartFlag);

  return (
    <>
      <StyledTitle>Wybierz kategorie słówek:</StyledTitle>
      <Container>
        <StyledButton onClick={() => dispatch(toggleAllChecked())}>
          {allChecked ? "Odznacz wszystkie" : "Zaznacz wszystkie"}
        </StyledButton>
        <StyledLink to={toTest()}>
          <StyledButton
            disabled={!startFlag}
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
              dispatch(selectCategory(category.id));
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

export default TestCategories;
