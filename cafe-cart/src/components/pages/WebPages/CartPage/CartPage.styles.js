import styled from "styled-components";
import { v } from "../../../../styles/variables";
import GenericButton from "../../../atoms/Button";

export const CartPageWrapper = styled.div`
    display: grid;
    grid-template-columns: 3fr 2fr;
    grid-template-rows: 1fr 1fr 8fr;
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
export const ItemQuantity = styled.h4`
    padding: ${v.spacing.xxsmall};
    border: 2px solid orange;
    width: 25%;
`;
export const ClearCartButton = styled(GenericButton)`
    width: 25%;
`;
export const CartItemsHeaderSpace = styled.div`
    grid-area: 2/1/3/2;
    padding: ${v.spacing.xxsmall};
    border: 2px solid green;
    display: flex;
    align-items: center;
    justify-content: space-between;
`;
export const CartListHeader = styled.h6.attrs(props => ({
    width: props.width
}))`
    padding: ${v.spacing.xsmall};
    border: 2px solid orange;
    width: ${(props) => props.$width || "25%"};
`;
export const CartListContainer = styled.div`
    grid-area: 3/1/4/2;
    width: 100%;
    height: 100%;
    border: 2px solid red;
    padding: ${v.spacing.xxsmall};
    overflow-y: auto;
`;

export const CheckoutInformationContainer = styled.div`
    grid-area: 1/2/3/3;
`;