import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  selectTestCategories,
  selectTestWord,
  drawIndex,
  selectSoundOn,
  selectIsError,
  resetTest,
  selectIsLoading,
  selectProgress,
  downProgress,
  upProgress,
} from "../categoriesSlice";
import {
  StyledFontAwesomeIcon,
  StyledTitle,
  StyledButton,
  StyledLink,
  StyledContainer,
  StyledAnchor,
  StyledProgressBar,
} from "./styled";
import { faVolumeUp } from "@fortawesome/free-solid-svg-icons";
import wrong from "./../files/sounds/tryagain.mp3";
import good from "./../files/sounds/goodanswer.ogg";
import ErrorPage from "../../common/ErrorPage";
import { toCategories } from "../../routes";
import Tile from "../../common/Tile";
import Container from "../../common/Container";
import { soundOn } from "../soundOn";

const TestPage = () => {
  const dispatch = useDispatch();
  const isError = useSelector(selectIsError);
  const isLoading = useSelector(selectIsLoading);
  const words = useSelector(selectTestCategories);
  const testWord = useSelector(selectTestWord);
  const testWordSound = useSelector(selectSoundOn);
  const progress = useSelector(selectProgress);

  useEffect(() => {
    soundOn(testWordSound);
  }, [testWord, testWordSound]);

  const checkAnswer = (answer) => {
    if (answer === testWord) {
      soundOn(good);
      dispatch(drawIndex());
      dispatch(upProgress());
    } else {
      soundOn(wrong);
      dispatch(downProgress());
    }
  };

  if (isError) {
    return <ErrorPage />;
  }

  

  return (
    <>
      <StyledTitle onClick={() => soundOn(testWordSound)}>
        {testWord}
        <StyledFontAwesomeIcon icon={faVolumeUp} />
      </StyledTitle>
      <StyledProgressBar progress={progress}></StyledProgressBar>
      {isLoading ? (
        <StyledContainer><p>Losuję ...</p></StyledContainer>
      ) : (
        <StyledContainer>
          {words.map((word) => (
            <StyledAnchor
              key={word.title}
              onClick={() => {
                checkAnswer(word.title);
              }}
            >
              <Tile image={word.image} testedTile={true} />
            </StyledAnchor>
          ))}
        </StyledContainer>
      )}
      <Container>
        <StyledLink to={toCategories()} replace>
          <StyledButton onClick={() => dispatch(resetTest())}>
            Koniec
          </StyledButton>
        </StyledLink>
      </Container>
    </>
  );
};

export default TestPage;
