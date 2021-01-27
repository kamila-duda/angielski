import React from "react";
import { StyledTile } from "./styled";

const Tile = ({image, checked, title, testedTile}) => {
    return (
        <StyledTile
            image={image}
            checked={checked}
            testedTile={testedTile}
            >
                {title? title : ""}
            </StyledTile>
    )
};

export default Tile;