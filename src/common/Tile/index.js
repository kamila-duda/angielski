import React from "react";
import { StyledTile } from "./styled";

const Tile = ({key, image, checked, title, testedTile}) => {
    return (
        <StyledTile
            key={key}
            image={image}
            checked={checked}
            testedTile={testedTile}
            >
                {title? title : ""}
            </StyledTile>
    )
};

export default Tile;