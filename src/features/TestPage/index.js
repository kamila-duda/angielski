import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  selectTestCategories,
  selectTestWord,
  drawIndex,
  selectSoundOn,
  selectIsError,
  resetTest,
} from "../categoriesSlice";
import {
  StyledFontAwesomeIcon,
  StyledTitle,
  StyledButton,
  StyledLink,
  StyledContainer,
  StyledAnchor,
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
  const words = useSelector(selectTestCategories);
  const testWord = useSelector(selectTestWord);
  const testWordSound = useSelector(selectSoundOn);

  useEffect(() => {
    soundOn(testWordSound);
  }, [testWord, testWordSound]);

  const checkAnswer = (answer) => {
    if (answer === testWord) {
      soundOn(good)
      dispatch(drawIndex());
    } else {
      soundOn(wrong);
    }
  };

  if (isError) {
    return <ErrorPage />;
  }
  return (
    <>
      <StyledTitle>
        {testWord}
        <StyledFontAwesomeIcon onClick={() => soundOn(testWordSound)} icon={faVolumeUp} />
      </StyledTitle>
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
