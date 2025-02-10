import styled from "styled-components";
import { v } from "../../../../styles/variables";
import GenericButton from "../../../atoms/Button";

export const CartPageWrapper = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    min-height: 100%;
    border: 2px solid blue;
    padding: ${v.spacing.small};
`
export const MenuFilterSpace = styled.div`
    display: flex;
    width: 100%;
    height: 10%;
    border: 2px solid green;
`;

export const MenuFilterButton = styled(GenericButton)`
    
`;