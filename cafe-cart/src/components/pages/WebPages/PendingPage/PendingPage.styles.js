import styled from "styled-components";
import { v } from "../../../../styles/variables";
import { Link } from "react-router-dom";
import GenericListItem from "../../../atoms/ListItem";

export const PendingPageWrapper = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr;
    column-gap: ${v.spacing.medium};
    width: 100%;
    height: 100%;
    padding: ${v.spacing.small};
`;
export const PendingPageAestheticsContainer = styled.div`
    grid-column: 1/2;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;
export const PendingPageGIFContainer = styled.div`
    border: ${v.borderThickness.thick} solid ${({theme}) => theme.borderColor1};
    height: 75%;
    width: 75%;
    border-radius: ${v.borderRadius.large};
`;

export const PendingPageGIF = styled.img`
    width: 100%;
    height: 100%;
    border-radius: ${v.borderRadius.medium};
`;

export const PendingMessageContainer = styled.div`
    width: 100%;
    height: 25%;
    display: flex;
    justify-content: center;
    align-items: center;
`;
export const PendingMessage = styled.h5`
    text-align: center;
`;
export const StyledLink = styled(Link)``;
export const CurrentOrderContainer = styled.div`
    grid-column: 2/3;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    box-shadow: 0 4px 8px 0 ${({theme}) => theme.shadow};
    padding: ${v.spacing.xsmall};
    border-radius: ${v.borderRadius.small};
`;
export const OrderSummaryLogoSpace = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 32.5%;    
`;
export const OrderSummaryLogo = styled.img`
    width: 10%;
    height: 50%;
`;
export const OrderSummaryHeaderSpan = styled.span`
    font-size: ${v.fontSize.xxsmall};
    font-family: ${v.fonts.tertiary}, ${v.fonts.fallback};
    font-weight: ${v.fontWeight.bold};
    text-align: center;
    white-space: pre-wrap;
    padding: ${v.spacing.xxxsmall};
    margin: 0;
`;
export const CurrentOrderHeader = styled.h5`
    width: 100%;
    display: flex;
    align-items: center;    
    padding: ${v.spacing.small};
    border-bottom: ${v.borderThickness.light} dashed ${({theme}) => theme.borderColor1};
`;
export const CurrentOrderItemListing = styled.div`
    border-bottom: ${v.borderThickness.light} dashed ${({theme}) => theme.borderColor1};
    width: 100%;
    height: 37.5%;
    overflow-y: auto;
`;
export const ItemList = styled.ul`
    padding: ${v.spacing.small};
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    width: 100%;
    height: auto;
`;
export const NoItemMessage = styled.span`
    font-size: ${v.fontSize.xsmall};
    font-family: ${v.fonts.tertiary}, ${v.fonts.fallback};
`;
export const Item = styled(GenericListItem)`
    font-size: ${v.fontSize.small};
    font-family: ${v.fonts.secondary}, ${v.fonts.fallback};
`;
export const CheckoutTotalDetails = styled.div`
    border: ${v.borderThickness.light} dotted ${({theme}) => theme.borderColor1};
    border-top: none;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 30%;
    overflow-y: auto;
`;
export const CheckoutTotalDetailsSpan = styled.span`
    font-size: ${v.fontSize.xsmall};
    font-family: ${v.fonts.tertiary}, ${v.fonts.fallback};
    white-space: pre-wrap;
    padding: ${v.spacing.xxsmall};
    width: 100%;
`;
export const CheckoutTotalDetailsSpanMarker = styled(CheckoutTotalDetailsSpan)`
    font-weight: ${v.fontWeight.bold};
`;