import styled from "styled-components";
import { v } from "../../../../styles/variables";

export const PendingPageWrapper = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr;
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

export const CurrentOrderContainer = styled.div`
    grid-column: 2/3;
    border: 2px solid violet;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;