import styled from "styled-components";
import { v } from "../../../styles/variables";
import Stepper from "../../molecules/Stepper/Stepper";

export const CartItemWrapper = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    flex-direction: row;
    width: 100%;
    height: 20%;
    padding: ${v.spacing.xxsmall};
    border: 2px solid blue;
`;
export const CartImageContainer = styled.div`
    display: flex;
    width: 12.5%;
    height: 100%;
`;
export const CartItemImage = styled.img`
    width: 100%;
    height: 100%;
    object-fit: cover;
`;
export const CartItemDetails = styled.span`
    border: 2px solid orange;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 50%;
    height: 100%;
    font-size: ${v.fontSize.xsmall};
    font-family: ${v.fonts.secondary}, ${v.fonts.fallback};
`;
export const CartItemStepper = styled(Stepper)`

`;