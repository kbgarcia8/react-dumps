import styled from "styled-components";
import { v } from "../../../styles/variables";

export const Label = styled.label.attrs(props => ({
    labelDirection: props.labelDirection
}))`
    display: flex;
    align-items: center;
    flex-direction:  ${(props) => props.$labelDirection} || "column";
    font-family: ${v.fonts.secondary}, ${v.fonts.fallback};
    font-size: ${v.fontSize.xsmall};
    font-weight: ${v.fontWeight.bold};
    margin-bottom: ${v.spacing.xxsmall};

    & .label-image-container {
        width: 20%;
        display: flex;
        align-items: center;
        border: 2px solid red;
    }
    
    & .label-image-container img {
        width: 100%;
    }

    & .label-image-container svg {
        width: 100%;
    }
    
    & .additional-info{
        font-weight: ${v.fontWeight.light};
    }
`;

export default Label;