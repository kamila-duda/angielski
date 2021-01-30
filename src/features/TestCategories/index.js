import React from "react";
import { useDispatch, useSelector } from "react-redux";
import Button from "../../common/Button";
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
      <StyledTitle>Wybierz 1 lub więcej kategorii i rozpocznij test:</StyledTitle>
      <Container>
        <Button onClick={() => dispatch(toggleAllChecked())} 
          text={`${allChecked ? "Odznacz wszystkie" : "Zaznacz wszystkie"}`}
        />
        <StyledLink to={toTest()}>
          <Button
            disabled={!startFlag}
            text={`Start`}
            onClick={() => dispatch(startTest())}
          />
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
