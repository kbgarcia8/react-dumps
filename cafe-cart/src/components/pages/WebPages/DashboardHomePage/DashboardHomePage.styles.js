import styled from 'styled-components';
import { v } from '../../../../styles/variables.js';
import { Link } from 'react-router-dom';

export const DashboardHomePageWrapper = styled.div`
    padding: 0;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
    width: 100%;
    min-height: 100%;
`;
export const HappyHourSpace = styled.div`
    width: 100%;
    height: 47.5vh;
    padding: ${v.spacing.large};
    display: flex;
    align-items: flex-start;
    justify-content: center;
    background-color: ${({theme}) => theme.backgroundColor1};
    color: ${({theme}) => theme.textColor3};
`;
export const HappyHourTexts = styled.div`
    display: flex;
    flex-direction: column;
    width: 55%;
    height: 100%;
`;
export const HappyHourHeader = styled.h1`
    width: 100%;
    color: ${({theme}) => theme.error};
    letter-spacing: ${v.spacing.xxxsmall};
`;
export const HappyHourDetails = styled.article`
    display: flex;
    width: 100%;
    height: 80%;
    font-family: ${v.fonts.primary}, ${v.fonts.fallback};
    font-size: ${v.fontSize.medium};
    font-weight: ${v.fontWeight.bold};
    background-color: ${({theme}) => theme.shadow};
    color: ${({theme}) => theme.textColor3}
    opacity: 75%;
    padding: ${v.spacing.small};
`;
export const TermsAndConditionSpan = styled.span`
    display: flex;
    align-items: center;
    justify-content: flex-end;
    width: 100%;
    height: 10%;
    font-family: ${v.fonts.tertiary}, ${v.fonts.fallback};
    font-size: ${v.fontSize.xxsmall};
    background-color: ${({theme}) => theme.shadow};
    color: ${({theme}) => theme.textColor3}
    opacity: 75%;
    padding: ${v.spacing.small};
`;
export const HappyHourImageContainer = styled.div`
    background-image: url('https://cbx-prod.b-cdn.net/COLOURBOX54687288.jpg?width=800&amp;height=800&amp;quality=70');
    background-position: center;
    background-repeat: no-repeat;
    background-size: contain;
    width: 45%;
    height: 100%;
    padding: ${v.spacing.small};
    border-radius: ${v.borderRadius.circle};
`;
export const VouchersSpace = styled.div`
    width: 100%;
    height: 42.5vh;
    padding: ${v.spacing.large};
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
    background-color: ${({theme}) => theme.backgroundColor4};
    color: ${({theme}) => theme.textColor1};
`;
export const VouchersHeader = styled.h2`
    width: 100%;
    color: ${({theme}) => theme.textColor1};
`;
export const VoucherDetailsSpan = styled.span`
    display: flex;
    width: 100%;
    height: 100%;
    border-radius: ${v.borderRadius.medium};
    align-items: center;
    justify-content: flex-start;
    font-family: ${v.fonts.secondary}, ${v.fonts.fallback};
    white-space: pre;
    padding: ${v.spacing.xxsmall};
    color: ${({theme}) => theme.textColor1};
    background-color: ${({theme}) => theme.screenColor};
    margin-block: ${v.spacing.xxsmall};
    cursor: pointer;
`;
export const StyledMenuLink = styled(Link)`
    text-decoration: none;
    color: ${({theme}) => theme.backgroundColor1};
    font-weight: ${v.fontWeight.bold};
    font-size: ${v.fontSize.small};
    padding: ${v.spacing.xxxsmall};

    &&:hover{
        color: ${({theme}) => theme.backgroundColor2};
        text-decoration: underline;
    }
    &:active{
        color: ${({theme}) => theme.backgroundColor3};;
    }
`;

export const AnnouncementSpace = styled.div`
    width: 100%;
    height: 42.5vh;
    padding: ${v.spacing.large};
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
    background-color: ${({theme}) => theme.backgroundColor1};
    color: ${({theme}) => theme.textColor2};
`;
export const AnnouncementsHeader = styled.h2`
    width: 100%;
    color: ${({theme}) => theme.textColor3};
`;
export const AnnouncementDetailsSpan = styled.span`
    display: flex;
    width: 100%;
    height: 100%;
    border-radius: ${v.borderRadius.medium};
    align-items: center;
    justify-content: flex-start;
    font-family: ${v.fonts.secondary}, ${v.fonts.fallback};
    white-space: pre;
    padding: ${v.spacing.xxsmall};
    color: ${({theme}) => theme.textColor3};
    background-color: transparent;
    margin-block: ${v.spacing.xxsmall};
    cursor: pointer;
`;
export const SocialDetailsSpace = styled.div`
    padding: ${v.spacing.xxxsmall};
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    align-items: center;
    justify-content: space-evenly;
    width: 100%;
    height: 50vh;
    background-color: ${({theme}) => theme.screenColor};
`;
export const SocialDetailsHeader = styled.h4`
    width: 100%;
    color: ${({theme}) => theme.textColor1};
`;
export const SocialDetailsSpanContainer = styled.div`
    width: 100%;
    padding: ${v.spacing.medium};
`;
export const SocialDetailsSpan = styled.span`
    display: flex;
    width: 100%;
    height: 100%;
    border-radius: ${v.borderRadius.small};
    align-items: center;
    justify-content: flex-start;
    font-family: ${v.fonts.secondary}, ${v.fonts.fallback};
    white-space: pre;
    padding: ${v.spacing.xxsmall};
    color: ${({theme}) => theme.name === "lightTheme" ? theme.textColor1 : theme.screenColor};
    background-color: ${({theme}) => theme.textColor3};
    margin-block: ${v.spacing.xxsmall};

    & svg {
        color: ${({theme}) => theme.backgroundColor2};
        margin-right: ${v.spacing.medium};
        width: 7.5%;
        height: 100%;
    }
`;
export const SocialDetailsImageContainer = styled.div`
    width: 100%;
    height: 100%;
    padding: ${v.spacing.small};
    background-image: url('https://img.freepik.com/premium-vector/colorful-flat-icons-red-background-represent-social-media-communication-technology-networking-concepts_657438-47619.jpg');
    background-position: center;
    background-repeat: no-repeat;
    background-size: fill;
`;