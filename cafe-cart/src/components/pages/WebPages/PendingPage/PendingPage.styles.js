import styled from "styled-components";
import { v } from "../../../../styles/variables";
import { Link } from "react-router-dom";
import ListItem from "../../../atoms/ListItem";

export const PendingPageWrapper = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr;
    column-gap: ${v.spacing.medium};
    width: 100%;
    height: 100%;
    padding: ${v.spacing.small};
    border: 2px solid red;
`;
export const PendingPageAestheticsContainer = styled.div`
    grid-column: 1/2;
    border: 2px solid blue;
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
    border: 2px solid green;
    display: flex;
    justify-content: center;
    align-items: center;
`;
export const PendingMessage = styled.h5`
    border: 2px solid yellow;
    text-align: center;
`;
export const StyledLink = styled(Link)``;
export const CurrentOrderContainer = styled.div`
    grid-column: 2/3;
    border: 2px solid violet;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;
export const CurrentOrderHeader = styled.h5`
    border: 2px solid orange;
    width: 100%;
    display: flex;
    align-items: center;
    padding: ${v.spacing.small};
`;
export const CurrentOrderItemListing = styled.div`
    border: 2px solid pink;
    width: 100%;
    height: 58%;
    overflow-y: auto;
`;
export const ItemList = styled.li`

`;
export const Item = styled(ListItem)``;