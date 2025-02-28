import styled from "styled-components";
import { v } from "../../../../styles/variables";

export const CartPageWrapper = styled.div`
    display: grid;
    grid-template-columns: 1fr 2fr;
    width: 100%;
    height: 100%;
    padding: ${v.spacing.small};
`
export const CartListContainer = styled.div`
    grid-column: 1/2;
    width: 100%; 
    border: 2px solid black;
`;

export const CartItem = styled.div`

`;

export const CheckoutInformationContainer = styled.div`
    grid-column: 2/3;
`;