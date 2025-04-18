import styled from 'styled-components';
import { v } from '../../../../styles/variables';

export const HomePageWrapper = styled.div`
    padding: 0;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
    width: 100%;
    min-height: 100%;
`;

export const AboutUsSpace = styled.div`
    width: 100%;
    height: 90vh;
    background-image: url('https://perfectdailygrind.com/wp-content/uploads/2022/01/donut-coffee-1024x640.jpg');
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    padding: ${v.spacing.large};
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-evenly;
    color: ${({theme}) => theme.textColor3};
`;

export const AboutUsHeader = styled.h1`
    width: 100%;
    color: ${({theme}) => theme.textColor3};
`;

export const AboutUsArticle = styled.article`
    display: flex;
    width: 100%;
    font-family: ${v.fonts.primary}, ${v.fonts.fallback};
    font-size: ${v.fontSize.medium};
    font-weight: ${v.fontWeight.bold};
    background-color: ${({theme}) => theme.shadow};
    opacity: 75%;
    padding: ${v.spacing.small};
`;

export const UniquenessDescriptionSpace = styled(AboutUsSpace)`
    background-image: url('https://espresso-works.com/cdn/shop/articles/espresso-works-blog-delicious-foods-that-go-well-with-coffee-1_600x.jpg?v=1619171429');
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    padding-inline: ${v.spacing.large};
    padding-block: 0;
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    align-items: center;
    justify-content: space-evenly;
    width: 100%;
    height: 100vh;
`;

export const DescriptionSpace = styled.div`
    opacity: 75%;
    height: 100%;
    width: 100%;
    padding-block: ${v.spacing.large};
    padding-inline: ${v.spacing.small};
    background-color: ${({theme}) => theme.textColor3};
`;
export const DescriptionHeader = styled.h1`
    width: 100%;
    height: 15%;
    display: flex;
    align-items: center;
    justify-content: flex-start;
`;
export const Description = styled.p`
    width: 100%;
    height: 80%;
    display: flex;
    justify-content: flex-start;
    font-family: ${v.fonts.primary}, ${v.fonts.fallback};
    font-size: ${v.fontSize.small};
    font-weight: ${v.fontWeight.bold};
    padding: ${v.spacing.large};
`;
export const Description2 = styled(Description)`
    height: 30%;
`;
export const DescriptionSpaceFiller = styled(DescriptionSpace)`
    opacity: 0;
`;
export const ServicesSpace = styled.div`
    background-color: ${({theme}) => theme.shadow};
    padding: ${v.spacing.small};
    padding-block: 0;
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    align-items: center;
    justify-content: space-evenly;
    width: 100%;
    height: 50vh;
`;
export const ServicesCard = styled.div`
    width: 95%;
    height: 55%;
    display: flex;
    flex-direction: column;
    border: ${v.borderThickness.light} solid ${({theme}) => theme.borderColor1};
    border-radius: ${v.borderRadius.medium};
    padding: ${v.spacing.xxsmall};
    background-color: ${({theme}) => theme.backgroundColor3};
`;
export const ServiceHeader = styled.h3`
    height: 25%;
`;
export const ServicesDescrptionSpace = styled.div`
    height: 75%;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: ${v.spacing.xxsmall};
    margin-top: ${v.spacing.small};
`;
export const ServiceIcon = styled.img`
    width: 25%;
    height: 100%;
`;
export const ServicesDescrption = styled.p`
    display: flex;
    align-items: center;
    justify-content: center;
    padding: ${v.spacing.xsmall};
    font-weight: ${v.fontWeight.bold};
    font-size: ${v.fontSize.xsmall};
`;
export const SocialDetailsSpace = styled.div`
    padding: ${v.spacing.xxxsmall};
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    align-items: center;
    justify-content: space-evenly;
    width: 100%;
    height: 50vh;
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
    color: ${({theme}) => theme.textColor1};
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
    background-image: url('https://images.stockcake.com/public/7/0/8/708b409f-0df5-4c28-8abb-f19b34458e0b_large/social-network-visualization-stockcake.jpg');
    background-position: center;
    background-repeat: no-repeat;
    background-size: fill;
`;