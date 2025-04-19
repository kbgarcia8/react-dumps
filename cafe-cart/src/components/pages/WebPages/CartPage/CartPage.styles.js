import styled from "styled-components";
import { v } from "../../../../styles/variables.js";
import GenericButton from "../../../atoms/Button/index.js";
import GenericForm from "../../../molecules/Form/index.js";
import Stepper from "../../../molecules/Stepper/index.js";

export const CartPageWrapper = styled.div`
    display: grid;
    grid-template-columns: 3fr 2.5fr;
    grid-template-rows: 1fr 1fr 7fr 1fr;
    column-gap: ${v.spacing.xxsmall};
    width: 100%;
    height: 100%;
    padding: ${v.spacing.small};
`
export const CartListHeaderSpace = styled.div`
    grid-area: 1/1/2/2;
    padding: ${v.spacing.xxsmall};
    border-bottom: ${v.borderThickness.medium} solid ${({theme}) => theme.borderColor1};
    display: flex;
    align-items: center;
    justify-content: space-between;
`;
export const OrderQuantityHeader = styled.h4`
    padding: ${v.spacing.xxsmall};
    width: 25%;
`;
export const ClearCartButton = styled(GenericButton)`
    width: 25%;
    border-radius: ${v.borderRadius.small};
`;
export const CartItemsHeaderSpace = styled.div`
    grid-area: 2/1/3/2;
    padding-block: ${v.spacing.xxsmall};
    padding-inline: ${v.spacing.medium};
    display: flex;
    align-items: center;
    justify-content: space-between;
`;
export const CartListHeader = styled.h6.attrs(props => ({
    width: props.width
}))`
    padding-block: ${v.spacing.xsmall};
    border-bottom: ${v.borderThickness.light} solid ${({theme}) => theme.borderColor1};
    width: ${(props) => props.$width || "25%"};
    display: flex;
    align-items: center;
    justify-content: center;
    color: ${({theme}) => theme.textColor1};
`;
export const CartListContainer = styled.div`
    grid-area: 3/1/4/2;
    width: 100%;
    height: 100%;
    padding: ${v.spacing.xxsmall};
    overflow-y: auto;
`;
export const CartTotalSpace = styled.div`
    grid-area: 4/1/5/2;
    display: flex;
    align-items: center;
    justify-content: space-between;
    flex-wrap: wrap;
`;
export const CartTotalInfoHeader = styled.span.attrs(props => ({
    $width: props.$width
}))`
    padding-block: ${v.spacing.xsmall};
    width: ${(props) => props.$width || "25%"};
    height: 45%;
    display: flex;
    align-items: center;
    justify-content: center;
    border-bottom: ${v.borderThickness.light} solid ${({theme}) => theme.borderColor1};
    font-family: ${v.fonts.secondary}, ${v.fonts.fallback};
    font-size: ${v.fontSize.xsmall};
    font-weight: ${v.fontWeight.light};
    color: ${({theme}) => theme.textColor1};
`;

export const CartTotalInfo = styled(CartTotalInfoHeader).attrs(props => ({
    $width: props.$width
}))`
    width: ${(props) => props.$width || "25%"};
    border: none;
`;
export const TransactionTypeStepper = styled(Stepper)`
    width: 80%;
    
    & .stepper-state {
        font-size: ${v.fontSize.xsmall};
    }
`;
export const CheckoutInformationContainer = styled.div`
    grid-area: 1/2/5/3;
    padding: ${v.spacing.xxsmall};
    border: ${v.borderThickness.light} solid ${({theme}) => theme.borderColor1};
    border-radius: ${v.borderRadius.small};
    margin-inline: ${v.spacing.xxsmall};
`;
export const CheckoutForm = styled(GenericForm)`
    height: 100%;
    padding: 0;
    display: flex;
    flex-direction: column;
    justify-content: space-between;

    & fieldset {
        width: 100%;
        display: flex;
        flex-wrap: wrap;
        overflow-y: auto;
        align-items: center;
        margin: 0;
        padding: ${v.spacing.xxsmall};
    }

    & legend {
        font-size: ${v.fontSize.small};
        font-weight: ${v.fontWeight.bold};
        font-family: ${v.fonts.secondary}, ${v.fonts.fallback};
        text-align: center;
        margin-bottom: ${v.spacing.xxsmall};
    }

    & .payment-label {
        display: flex;
        white-space: pre-line;
        width: 100%;
        max-height: 90%;
        margin: 0;
        & span {
            margin-left: ${v.spacing.xxsmall};
            width: 100%;
        }
        & .main-label {
            font-size: ${v.fontSize.xsmall};
            font-weight: ${v.fontWeight.bold};
        }
        & .additional-info{
            font-size: ${v.fontSize.xxsmall};
        }
        & .label-image-container svg {
            height: 100%;
            margin: ${v.spacing.xxxsmall};
        }
    }

    & .label-input-container{
        flex-direction: row;
        border: ${v.borderThickness.thin} solid ${({theme}) => theme.borderColor1};
        margin-inline: ${v.spacing.xxxsmall};
        margin-block: ${v.spacing.xxxsmall};
        width: 47.5%;
        padding: ${v.spacing.xxxsmall};
        max-height: 100%;
    }
    
    & .selected {
        background-color: ${({theme}) => theme.backgroundColor2};
    }
    
    & .selected > * {
        color: ${({theme}) => theme.textColor3};
    }
    
    & .input-edit-buttons{
        flex-direction: column;

        & button {
            width: 100%;
            border-radius: 0;
            padding: 0%;
        }
        
        & .button-icon-and-text svg {
            width: 50%;
        }
    }
    
    & .form-main-button-container{
        justify-content: center;
        width: 100%;
        padding: ${v.spacing.xxxsmall};
        height: 10%;
    
        & .submit-form-btn {
            width: 35%;
            border-radius: ${v.borderRadius.small};
        }
    }
    
    & .editable-input-fieldset {
        margin-left: ${v.spacing.large};
        margin-bottom: ${v.spacing.large};
        width: 40%;
        height: max-content;
        display: flex;
        justify-content: center;
        align-items: center;
        
        & legend {
            font-size: ${v.fontSize.xsmall};
            width: 35%;
        }
        & .editable-input-container {width: 75%;}
        & input {font-size: ${v.fontSize.xxsmall};}


        & .editable-input-button-space {
            & button {
                border-radius: ${v.borderRadius.small};
                width: 50%;
                margin: 0;
                padding: 0;
                margin-inline: ${v.spacing.xxxsmall};
                padding-inline: ${v.spacing.xxxsmall};
                
                & .button-icon-and-text span {
                    font-size: ${v.fontSize.xxsmall};
                }
            }
        }
    }
    
    & .add-input-button-space {
        width: 100%;
        height: 15%;
        display: flex;
        justify-content: center;
        margin-top: ${v.spacing.xxsmall};

        & button {
            width: 10%;
            border-radius: ${v.borderRadius.small};

            & .button-icon-and-text span {
                    font-size: ${v.fontSize.small};
            }
        }
    }
`;