import styled from "styled-components";
import { v } from "../../../styles/variables.js";
import { palette, notificationPalette } from "../../../styles/theme.js";
import Stepper from "../../molecules/Stepper/index.js";
import GenericButton from "../../atoms/Button/index.js";

export const CartItemWrapper = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    flex-direction: row;
    width: 100%;
    height: 20%;
    padding: ${v.spacing.xxsmall};
    border: ${v.borderThickness.light} solid ${({theme}) => theme.backgroundColor1};
    border-radius: ${v.borderRadius.small};
    margin-block: ${v.spacing.xxsmall};
`;
export const CartImageContainer = styled.div`
    display: flex;
    width: 20%;
    height: 100%;
`;
export const CartItemImage = styled.img`
    width: 100%;
    height: 100%;
    object-fit: cover;
`;
export const CartItemName = styled.span`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 80%;
    height: 100%;
    font-size: ${v.fontSize.small};
    font-family: ${v.fonts.secondary}, ${v.fonts.fallback};
    color: ${({theme}) => theme.textColor1};
`;
export const ItemDetailsContainer = styled.div`
    display: flex;
    width: 50%;
    height: 100%;
`;
export const CartItemPrice = styled.div`
    width: 10%;
    height: 100%;
    font-family: ${v.fonts.tertiary}, ${v.fonts.fallback};
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: ${v.fontSize.xsmall};
    font-weight: ${v.fontWeight.bold};
    color: ${({theme}) => theme.textColor1};
`;
export const StepperContainer = styled.div`
    width: 20%;
`;
export const CartItemStepper = styled(Stepper)`
    width: 100%;
`;
export const CartItemTotal = styled(CartItemPrice)``;
export const RemoveItemButtonSpace = styled.div`
    width: 5%;
    height:100%;
    padding: 0;
`;
export const RemoveItemButton = styled(GenericButton)`
    width: 100%;
    height: 100%;
    border: none;
    border-radius: 0%;
    padding: 0;
    margin: 0;
    background-color: ${({theme}) => theme.error};
    border-radius: ${v.borderRadius.small};
    & svg {
        color: ${({theme}) => theme.name === "lightTheme" ? palette.neutral1 : palette.neutral5};
    }
    &:hover {
        background-color: ${({theme}) => theme.errorHover};
        & svg {
            color: ${({theme}) => theme.textColor1};
        }
    }
`;