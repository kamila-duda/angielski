import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  checkAnswer,
  selectTestCategories,
  selectTestWord,
  setTestWord,
  drawIndex,
  selectSoundOn,
  selectIsError,
} from "../categoriesSlice";
import {
  StyledContainer,
  StyledFontAwesomeIcon,
  StyledTile,
  StyledTitle,
} from "./styled";
import { faVolumeUp } from "@fortawesome/free-solid-svg-icons";
import wrong from "./../files/sounds/tryagain.mp3";
import good from "./../files/sounds/goodanswer.ogg";
import ErrorPage from "../../common/ErrorPage";

const TestPage = () => {
  const dispatch = useDispatch();
  const isError = useSelector(selectIsError);
  const words = useSelector(selectTestCategories);
  const testWord = useSelector(selectTestWord);
  const testWordSound = useSelector(selectSoundOn);

  useEffect(() => {
    const sound = new Audio(testWordSound);
    sound.play();
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
  }
if(isError){
    return (
        <ErrorPage/>
    )
};
  return (
    <>
      <StyledTitle>
        {testWord}
        <StyledFontAwesomeIcon onClick={()=>soundOn()} icon={faVolumeUp} />
      </StyledTitle>
      <StyledContainer>
        {words.map((word) => (
          <StyledTile
            key={word.title}
            image={word.image}
            onClick={() => {
              checkAnswer(word.title);
            }}
          />
        ))}
      </StyledContainer>
    </>
  );
};

export default TestPage;
