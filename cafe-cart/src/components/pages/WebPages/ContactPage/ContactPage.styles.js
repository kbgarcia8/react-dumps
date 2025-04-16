import styled from 'styled-components'
import { v } from '../../../../styles/variables';
import GenericForm from '../../../molecules/Form';

export const ContactPageWrapper = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-auto-rows: minmax(7.5%,max-content);
    column-gap: ${v.spacing.medium};
    width: 100%;
    height: 100%;
    padding: ${v.spacing.small};
`;
export const ContactPageHeader = styled.h3`
    font-family: ${v.fonts.secondary}, ${v.fonts.fallback};
    grid-column: 1/3;
    width: 100%;
    display: flex;
    align-items: center;
    color: ${({theme}) => theme.textColor1};
`;
export const ContactEmailFormSpace = styled.div`
    grid-column: 1/2;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    border: 2px solid blue;
`;
export const ContactEmailForm = styled(GenericForm)`
    border: ${v.borderThickness.light} solid ${({theme}) => theme.borderColor1};
    border-radius: ${v.borderRadius.small};
    padding-top: ${v.spacing.large};
    padding-bottom: ${v.spacing.xlarge};
    width: 75%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;

    & fieldset {
        display: flex;
        flex-direction: column;
        justify-content: center;
        border: 2px solid red;
        position: rerlative;
        bottom: 100px;
    }

    & .label-input-container {
        margin-block: ${v.spacing.xsmall};
    }

    & .contact-inputs-label {
        display: flex;
        align-items: flex-start;
        font-size: ${v.fontSize.small};
    }
    
    & .form-main-button-container {
        flex-direction: column;
        align-items: center;
        justify-content: center;
        height: 15%;

        & button {
            width: 50%;
            border-radius: ${v.borderRadius.medium};
            margin-block: ${v.spacing.xxxsmall};
            & span{
                font-size: ${v.fontSize.xsmall};
                font-family: ${v.fonts.primary}, ${v.fonts.fallback};
                font-weight: ${v.fontWeight.bold};
            }            
        }
    }
`;