import styled from "styled-components";
import { v } from "../../../../styles/variables";

export const CartPageWrapper = styled.div`
    display: grid;
    grid-template-columns: 3fr 2fr;
    grid-template-rows: 1fr 9fr;
    width: 100%;
    height: 100%;
    padding: ${v.spacing.small};
    border: 2px solid violet;
`
export const CartListHeader = styled.h4`
    grid-area: 1/1/2/2;
    padding: ${v.spacing.xxsmall};
    border: 2px solid green;
    height: 100%;
`;
export const CartListContainer = styled.div`
    grid-area: 2/1/3/2;
    width: 100%;
    height: 100%;
    border: 2px solid red;
    padding: ${v.spacing.small};
    overflow-y: auto;
`;

export const CheckoutInformationContainer = styled.div`
    grid-area: 1/2/3/3;
`;