import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { selectTestCategories } from "../categoriesSlice";
import {
  StyledContainer,
  StyledFontAwesomeIcon,
  StyledTile,
  StyledTitle,
} from "./styled";
import { faVolumeUp } from "@fortawesome/free-solid-svg-icons";
import wrong from "./../files/sounds/tryagain.mp3";
import good from "./../files/sounds/goodanswer.ogg"

const TestPage = () => {
  const words = useSelector(selectTestCategories);
  const [testWord, setTestWord] = useState();

  useEffect(() => {
    const index = Math.floor(Math.random() * words.length);
    setTestWord(words[index].title);
    const sounds = new Audio(words[index].sounds);
    sounds.play();
  }, [words]);

  const setNewWord = () => {
    const index = Math.floor(Math.random() * words.length);
    setTestWord(words[index].title);
    const sounds = new Audio(words[index].sounds);
    sounds.play();
  };

  const checkAnswer = (answer) => {
    if (answer === testWord) {
        const sounds = new Audio(good);
        sounds.play();
      setTimeout(()=>setNewWord(), 2000);
    } else {
        const sounds = new Audio(wrong);
        sounds.play();
    }
  };
  
  return (
    <>
      <StyledTitle>
        {testWord}
        <StyledFontAwesomeIcon icon={faVolumeUp} />
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
