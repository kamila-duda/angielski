import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styled from "styled-components";

export const StyledFontAwesomeIcon = styled(FontAwesomeIcon)`
color: ${({theme})=>theme.color.middle};
margin: 8px;
font-size: 44px;
animation: "rotation" 2s infinite;
@keyframes rotation {
    100% {transform: rotate(360deg)}
}
`;