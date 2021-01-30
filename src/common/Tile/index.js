import React from "react";
import { StyledTile } from "./styled";

const Tile = ({ image, checked, title, testedTile, repetitionTile }) => {
  return (
    <StyledTile
      image={image}
      checked={checked}
      testedTile={testedTile}
      repetitionTile={repetitionTile}
    >
      {title ? title : ""}
    </StyledTile>
  );
};

export default Tile;
