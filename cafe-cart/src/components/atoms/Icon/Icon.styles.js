import styled from 'styled-components';
import { v } from '../../../styles/variables.js'

export const IconImage = styled.img`
    display: flex;
    place-items: center;    
    width: 100%;
    background-color: transparent;
`

export const IconContainer = styled.div`
    display: flex;
    place-items: center;
    background-color: transparent;
    padding: ${v.spacing.small};
    max-width: 100%;
`;

export default {IconImage, IconContainer};