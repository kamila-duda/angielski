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
} from "./styled";
import { faVolumeUp } from "@fortawesome/free-solid-svg-icons";
import wrong from "./../files/sounds/tryagain.mp3";
import good from "./../files/sounds/goodanswer.ogg";
import ErrorPage from "../../common/ErrorPage";
import { toCategories } from "../../routes";
import Tile from "../../common/Tile";
import Container from "../../common/Container";

const TestPage = () => {
  const dispatch = useDispatch();
  const isError = useSelector(selectIsError);
  const words = useSelector(selectTestCategories);
  const testWord = useSelector(selectTestWord);
  const testWordSound = useSelector(selectSoundOn);

  useEffect(() => {
    soundOn();
  }, [testWord]);

  const checkAnswer = (answer) => {
    if (answer === testWord) {
      const sounds = new Audio(good);
      sounds.play();
      dispatch(drawIndex());
    } else {
      const sounds = new Audio(wrong);
      sounds.play();
    }
  };
  const soundOn = () => {
    const sound = new Audio(testWordSound);
    sound.play();
  };
  if (isError) {
    return <ErrorPage />;
  }
  return (
    <>
      <StyledTitle>
        {testWord}
        <StyledFontAwesomeIcon onClick={() => soundOn()} icon={faVolumeUp} />
      </StyledTitle>
      <StyledContainer>
        {words.map((word) => (
          <StyledLink
            onClick={() => {
              checkAnswer(word.title);
            }}
          >
            <Tile key={word.title} image={word.image} testedTile={true} />
          </StyledLink>
        ))}
      </StyledContainer>
      <Container>
        <StyledLink to={toCategories()}>
          <StyledButton onClick={() => dispatch(resetTest())}>
            Koniec
          </StyledButton>
        </StyledLink>
      </Container>
    </>
  );
};

export default TestPage;
