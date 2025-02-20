import styled from "styled-components";
import { v } from "../../../../styles/variables";
import GenericButton from "../../../atoms/Button";

export const CartPageWrapper = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    min-height: 100%;
    border: 2px solid blue;
    padding: ${v.spacing.small};
`
export const MenuFilterButtonsSpace = styled.div`
    display: flex;
    width: 100%;
    height: 10%;
    margin-bottom: ${v.spacing.small};
`;

export const MenuFilterButton = styled(GenericButton)`
    border-radius: ${v.borderRadius.small};
    background: transparent;
    color: ${({theme}) => theme.textColor1};

    & .button-icon-and-text span {
        font-size: ${v.fontSize.xsmall};
        font-family: ${v.fonts.secondary};
        font-weight: ${v.fontWeight.bold};
    }    
`;

export const MenuCardContainer = styled.div`
    width: 100%;
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(300px, 1fr)); 
    gap: 10px;
    padding: 10px;
`;