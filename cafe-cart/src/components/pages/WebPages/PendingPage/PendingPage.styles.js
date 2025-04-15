import styled from "styled-components";
import { v } from "../../../../styles/variables";
import { Link } from "react-router-dom";
import theme from "../../../../styles/theme";

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
    color: ${({theme}) => theme.textColor1};
`;
export const PendingMessage = styled.h5`
    text-align: center;
`;
export const StyledLink = styled(Link)`
    text-decoration: none;
    color: ${({theme}) => theme.backgroundColor1};
    font-weight: bold;
    padding: ${v.spacing.xxxsmall};

    &:hover {
        color: ${({theme}) => theme.backgroundColor2};
        text-decoration: underline;
    }
`;
export const CurrentOrderContainer = styled.div`
    grid-column: 2/3;
    display: flex;
`;