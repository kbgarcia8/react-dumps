import styled from 'styled-components';

export const IconImage = styled.img`
    display: flex;
    place-items: center;    
    width: 100%;
    height: 100%;
    background-color: transparent;
`

export const IconContainer = styled.div`
    display: flex;
    place-items: center;
    background-color: transparent;
    padding: 1.5rem;
    border: 2px solid red;
`;

export default {IconImage, IconContainer};