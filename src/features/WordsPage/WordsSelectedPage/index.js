import React from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  StyledPolishWord,
  StyledTitle,
  StyledButton,
  StyledLink,
  StyledContainer,
  StyledAnchor,
} from "./styled";
import ErrorPage from "../../../common/ErrorPage";
import { toRepetition } from "../../../routes";
import Tile from "../../../common/Tile";
import Container from "../../../common/Container";
import { soundOn } from "../../soundOn";
import { resetState, selectedWords, selectIsError } from "../../wordsSlice";

const WordsSelectedPage = () => {
  const dispatch = useDispatch();
  const isError = useSelector(selectIsError);
  const words = useSelector(selectedWords);

  if (isError) {
    return <ErrorPage />;
  }

  return (
    <>
      <StyledContainer>
      {words.map((word) => (
          <StyledAnchor key={word.title} onClick={() => soundOn(word.sounds)}>
            <StyledTitle>
              {word.title}
            </StyledTitle>
            <StyledPolishWord>{word.polish}</StyledPolishWord>
            <Tile image={word.image} testedTile={false} />
          </StyledAnchor>
        ))}
      </StyledContainer>
      <Container>
        <StyledLink to={toRepetition()} replace>
          <StyledButton onClick={() => dispatch(resetState())}>
            Koniec
          </StyledButton>
        </StyledLink>
      </Container>
    </>
  );
};

export default WordsSelectedPage;