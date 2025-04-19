import styled from 'styled-components';
import { v } from '../../../styles/variables.js';

export const TestimonialCardWrapper = styled.div`
    display: flex;
    width: 100%;
    height: 100%;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    box-shadow: -${v.spacing.xxxsmall} ${v.spacing.xxxsmall} ${v.spacing.small} 0 ${({theme}) => theme.shadow};
    padding: ${v.spacing.xsmall};
    border-radius: ${v.borderRadius.small};
    margin-top: ${v.spacing.xxlarge};
`;
export const TestimonialCardUserName = styled.span`
    display: flex;
    width: 100%;
    height: 20%;
    justify-content: center;
    align-items: center;
    font-family: ${v.fonts.tertiary}, ${v.fonts.fallback};
    font-weight: ${v.fontWeight.bold};
    font-size: ${v.fontSize.medium};
    position: relative;
    bottom: ${v.spacing.xlarge};
`;
export const TestimoneePictureContainer = styled.div`
    width: 100%;
    height: 50%;
    position: relative;
    bottom: ${v.spacing.xxlarge};
    display: flex;
    align-items: center;
    justify-content: center; 
`;
export const TestimoneePicture = styled.img`
    width: 50%;
    height: 100%;
    object-fit: fill;
    border-radius: ${v.borderRadius.circle};
    border: ${v.borderThickness.medium} solid ${({theme}) => theme.borderColor1};
`;

export const StarRatingContainer = styled.div`
    display: flex;
    width: 100%;
    height: 15%;
    justify-content: center;
    align-items: center;
    position: relative;
    bottom: ${v.spacing.large};
`;
export const TestimonialCardMessage = styled.p`
    width: 100%;
    height: 100%;
    display: flex;
    flex-wrap: wrap;
    overflow-y: auto;
    font-family: ${v.fonts.primary}, ${v.fonts.fallback};
    font-weight: ${v.fontWeight.bold};
    font-size: ${v.fontSize.small};
    padding: ${v.spacing.xsmall};
    position: relative;
    bottom: ${v.spacing.xsmall};
`;