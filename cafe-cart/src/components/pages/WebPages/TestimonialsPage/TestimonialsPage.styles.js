import styled from 'styled-components'
import { v } from '../../../../styles/variables'
import TestimonialCard from '../../../molecules/TestimonialCard/TestimonialCard';

export const TestimonialsPageWrapper = styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(${v.width.quarter}, 1fr));
    grid-auto-rows: minmax(${v.width.fixed_xsmall}, 75%);
    column-gap: ${v.spacing.medium};
    row-gap: ${v.spacing.medium};
    padding: ${v.spacing.xsmall};
    width: 100%;
    height: 100%;
`;

export const EmptyTestimonialsMessageContainer = styled.div`
    width: 92.5vw;
    display: flex;
    white-space: pre-wrap;
    align-items: center;
    justify-content: center;
    margin-top: ${v.spacing.large};
    padding: ${v.spacing.small};

`;
export const EmptyTestimonialsMessage = styled.span`
    text-align: center;
    line-height: ${v.spacing.large};
    font-family: ${v.fonts.tertiary}, ${v.fonts.fallback};
    font-size: ${v.fontSize.medium};
`;

export const TestimonialsCardSpace = styled.div`    
    border-radius: ${v.borderRadius.small};
    height: 75%;
    width: 100%;
`;
export const TestimonialEntry = styled(TestimonialCard)`
`;