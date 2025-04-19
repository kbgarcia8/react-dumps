import styled from 'styled-components'
import { v } from '../../../styles/variables.js';
import GenericListItem from '../../atoms/ListItem/index.js'

export const OrderReceiptWrapper = styled.div`
    display: flex;
    width: 100%;
    height: 100%;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    box-shadow: -${v.spacing.xxxsmall} ${v.spacing.xxxsmall} ${v.spacing.small} 0 ${({theme}) => theme.shadow};
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
    color: ${({theme}) => theme.textColor1};
`;
export const CurrentOrderHeader = styled.h5`
    width: 100%;
    display: flex;
    align-items: center;    
    padding: ${v.spacing.small};
    border-bottom: ${v.borderThickness.light} dashed ${({theme}) => theme.borderColor1};
`;
export const CurrentOrderItemListing = styled.div`    
    width: 100%;
    height: 37.5%;
    overflow-y: auto;
    color: ${({theme}) => theme.textColor1};
`;
export const ItemList = styled.ul`
    padding: ${v.spacing.small};
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    width: 100%;
    height: auto;
    color: ${({theme}) => theme.textColor1};
`;
export const NoItemMessage = styled.span`
    font-size: ${v.fontSize.xsmall};
    font-family: ${v.fonts.tertiary}, ${v.fonts.fallback};
    color: ${({theme}) => theme.textColor1};
`;
export const Item = styled(GenericListItem)`
    font-size: ${v.fontSize.small};
    font-family: ${v.fonts.secondary}, ${v.fonts.fallback};
    color: ${({theme}) => theme.textColor1};
`;
export const CheckoutTotalDetails = styled.div`
    border: ${v.borderThickness.light} dotted ${({theme}) => theme.borderColor1};
    border-top: ${v.borderThickness.light} dashed ${({theme}) => theme.borderColor1};
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 30%;
    overflow-y: auto;
    color: ${({theme}) => theme.textColor1};
`;
export const CheckoutTotalDetailsSpan = styled.span`
    font-size: ${v.fontSize.xsmall};
    font-family: ${v.fonts.tertiary}, ${v.fonts.fallback};
    white-space: pre-wrap;
    padding: ${v.spacing.xxsmall};
    width: 100%;
    color: ${({theme}) => theme.textColor1};
`;
export const CheckoutTotalDetailsSpanMarker = styled(CheckoutTotalDetailsSpan)`
    font-weight: ${v.fontWeight.bold};
`;