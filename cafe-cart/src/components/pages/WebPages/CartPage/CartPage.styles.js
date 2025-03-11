import styled from "styled-components";
import { v } from "../../../../styles/variables";
import GenericButton from "../../../atoms/Button";

export const CartPageWrapper = styled.div`
    display: grid;
    grid-template-columns: 3fr 2.5fr;
    grid-template-rows: 1fr 1fr 7fr 1fr;
    column-gap: ${v.spacing.xxsmall};
    width: 100%;
    height: 100%;
    padding: ${v.spacing.small};
    border: 2px solid violet;
`
export const CartListHeaderSpace = styled.div`
    grid-area: 1/1/2/2;
    padding: ${v.spacing.xxsmall};
    border: 2px solid green;
    display: flex;
    align-items: center;
    justify-content: space-between;
`;
export const OrderQuantityHeader = styled.h4`
    padding: ${v.spacing.xxsmall};
    border: 2px solid orange;
    width: 25%;
`;
export const ClearCartButton = styled(GenericButton)`
    width: 25%;
`;
export const CartItemsHeaderSpace = styled.div`
    grid-area: 2/1/3/2;
    padding-block: ${v.spacing.xxsmall};
    padding-inline: ${v.spacing.medium};
    border: 2px solid indigo;
    display: flex;
    align-items: center;
    justify-content: space-between;
`;
export const CartListHeader = styled.h6.attrs(props => ({
    width: props.width
}))`
    padding-block: ${v.spacing.xsmall};
    border: 2px solid orange;
    width: ${(props) => props.$width || "25%"};
    display: flex;
    align-items: center;
    justify-content: center;
`;
export const CartListContainer = styled.div`
    grid-area: 3/1/4/2;
    width: 100%;
    height: 100%;
    border: 2px solid red;
    padding: ${v.spacing.xxsmall};
    overflow-y: auto;
`;
export const CartTotalSpace = styled.div`
    grid-area: 4/1/5/2;
    border: 2px solid black;
    display: flex;
    align-items: center;
    justify-content: space-between;
    flex-wrap: wrap;
`;
export const CartTotalInfo = styled.span.attrs(props => ({
    width: props.width
}))`
    padding-block: ${v.spacing.xsmall};
    border: 2px solid orange;
    width: ${(props) => props.$width || "25%"};
    height: 45%;
    display: flex;
    align-items: center;
    justify-content: center;
    font-family: ${v.fonts.secondary}, ${v.fonts.fallback};
    font-size: ${v.fontSize.xsmall};
    font-weight: ${v.fontWeight.light};
`;
export const CheckoutInformationContainer = styled.div`
    grid-area: 1/2/5/3;
    padding: ${v.spacing.xxsmall};
    display: grid;
    grid-template-rows: 3fr 3fr 2fr;  
    border: 2px solid green;
`;
export const AddressInfoContainer = styled.div`
    grid-row: 1/2;
    border: 2px solid red;
`;