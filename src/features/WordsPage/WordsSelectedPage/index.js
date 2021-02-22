import React from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  StyledPolishWord,
  StyledTitle,
  StyledLink,
  StyledAnchor,
  StyledFontAwesomeIcon,
} from "./styled";
import ErrorPage from "../../../common/ErrorPage";
import { toRepetition } from "../../../routes";
import Tile from "../../../common/Tile";
import Container from "../../../common/Container";
import { soundOn } from "../../soundOn";
import { resetState, selectedWords, selectIsError } from "../../wordsSlice";
import { faVolumeUp } from "@fortawesome/free-solid-svg-icons";
import Button from "../../../common/Button";

const WordsSelectedPage = () => {
  const dispatch = useDispatch();
  const isError = useSelector(selectIsError);
  const words = useSelector(selectedWords);

  if (isError) {
    return <ErrorPage />;
  }

  return (
    <>
      <Container wordsPage={true}>
      {words.map((word) => (
          <StyledAnchor key={word.title} onClick={() => soundOn(word.sounds)}>
            <StyledTitle>
              {word.title}
            </StyledTitle>
            <StyledPolishWord>{word.polish}</StyledPolishWord>
            <Tile image={word.image} testedTile={false} repetitionTile={true}/>
            <StyledFontAwesomeIcon icon={faVolumeUp} />
          </StyledAnchor>
        ))}
      </Container>
      <Container>
        <StyledLink to={toRepetition()} replace>
          <Button onClick={() => dispatch(resetState())} text={`Powrót`} repetitionEnd={true}/>
        </StyledLink>
      </Container>
    </>
  );
};

export default WordsSelectedPage;