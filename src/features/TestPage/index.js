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
      setNewWord();
    } else {
      alert("źle");
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
