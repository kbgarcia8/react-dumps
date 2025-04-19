import styled from 'styled-components'
import { v } from '../../../../styles/variables.js';
import GenericForm from '../../../molecules/Form/index.js';

export const ContactPageWrapper = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-auto-rows: minmax(7.5%,max-content);
    column-gap: ${v.spacing.xxxsmall};
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
export const ContactUsEmailFormSpace = styled.div`
    grid-column: 1/2;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
`;
export const ContactUsEmailForm = styled(GenericForm)`
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
        position: relative;
        bottom: 5%;
        border: none;
    }

    & .label-input-container {
        margin-block: ${v.spacing.xsmall};
    }

    & .contact-page-inputs-label {
        display: flex;
        align-items: flex-start;
        font-size: ${v.fontSize.small};
    }

    & input.contact-page-inputs, textarea.contact-page-inputs {
        width: 100%;
        border: none;
        border-bottom: ${v.borderThickness.light} solid ${({theme}) => theme.borderColor1};
        background-color: transparent;
        border-radius: 0;
    }

    & textarea.contact-page-inputs {
        border: ${v.borderThickness.light} solid ${({theme}) => theme.borderColor1};
        padding: ${v.spacing.small};
    }

    & input.contact-page-inputs:hover {
        outline: none;
        border-bottom: ${v.borderThickness.light} solid ${({theme}) => theme.backgroundColor2};
    }

    & textarea.contact-page-inputs:hover {
        outline: none;
        border: ${v.borderThickness.light} solid ${({theme}) => theme.backgroundColor2};
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
export const CafeInformationSapce = styled.div`
    grid-column: 2/3;
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
`;
export const ContactDetailsSpace = styled(CafeInformationSapce)`
    height: 40%;
    justify-content: space-evenly;
    padding: ${v.spacing.small};
    border: ${v.borderThickness.thick} double ${({ theme }) => theme.borderColor1};
    background-color: ${({theme}) => theme.textColor3};
`;
export const ContactDetailsSpan = styled.span`
    display: flex;
    width: 100%;
    height: 100%;
    align-items: center;
    justify-content: flex-start;
    font-family: ${v.fonts.secondary}, ${v.fonts.fallback};
    white-space: pre;
    padding: ${v.spacing.xxsmall};
    color: ${({theme}) => theme.textColor1};

    & svg {
        color: ${({theme}) => theme.backgroundColor2};
        margin-right: ${v.spacing.medium};
    }
`;
export const GoogleMapPinSpace = styled(CafeInformationSapce)`
    height: 55%;
    justify-content: space-evenly;
    padding: ${v.spacing.small};
    background-color: ${({theme}) => theme.backgroundColor3};
    padding: ${v.spacing.small};
    margin-top: ${v.spacing.small};
    border: ${v.borderThickness.thick} double ${({ theme }) => theme.borderColor1};
`;
export const GoogleMapPinSpaceHeader = styled.h5`
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    font-family: ${v.fonts.primary}, ${v.fonts.fallback};
`;

