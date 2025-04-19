import styled from 'styled-components'
import { v } from '../../../../styles/variables.js';
import OrderReceipt from '../../../molecules/OrderReceipt/index.js';

export const OrderHistoryPageWrapper = styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(${v.width.fixed_medium}, 1fr));
    grid-auto-rows: minmax(${v.width.third}, auto);
    column-gap: ${v.spacing.medium};
    row-gap: ${v.spacing.medium};
    padding: ${v.spacing.xsmall};
    width: 100%;
    height: 100%;
`;

export const EmptyOrderHistoryMessageContainer = styled.div`
    width: 92.5vw;
    display: flex;
    white-space: pre-wrap;
    align-items: center;
    justify-content: center;
    margin-top: ${v.spacing.large};
    padding: ${v.spacing.small};

`;
export const EmptyOrderHistoryMessage = styled.span`
    text-align: center;
    line-height: ${v.spacing.large};
    font-family: ${v.fonts.tertiary}, ${v.fonts.fallback};
    font-size: ${v.fontSize.medium};
`;

export const OrderHistoryCardSpace = styled.div`    
    border-radius: ${v.borderRadius.xsmall};
    height: 100%;
    width: 100%;
`;
export const SummaryEntry = styled(OrderReceipt)`
    border: ${v.borderThickness.light} solid ${({theme}) => theme.backgroundColor1};
    & .shop-details{
        font-size: ${v.fontSize.xxsmall};
    }
    & .receipt-header {
        font-size: ${v.fontSize.xsmall};
    }
    & .receipt-order-item{
        font-size: ${v.fontSize.xsmall};
    }
    & .receipt-total-span, .receipt-total-marker {
        font-size: ${v.fontSize.xxsmall};
    }
`;
export const OrderHistoryButtonSpace = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    height: 7.5%;
    width: 100%;
    margin-top: ${v.spacing.xxxsmall};

    & button {
        width: 35%;
        border-radius: ${v.borderRadius.small};
    }
    & .button-icon-and-text span{
        font-size: ${v.fontSize.xxsmall};
    }
`;