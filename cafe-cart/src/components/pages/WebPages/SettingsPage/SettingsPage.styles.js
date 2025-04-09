import styled from 'styled-components';
import GenericForm from '../../../molecules/Form';
import GenericButton from '../../../atoms/Button';
import { v } from '../../../../styles/variables';

export const SettingsPageWrapper = styled.div`
    padding: ${v.spacing.xxxsmall};
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-auto-rows: minmax(5%,max-content);
    column-gap: ${v.spacing.medium};
    height: 100%;
`;

export const SettingsButtonSpace = styled.div`
    display: flex;
    width: 100%;
    height: 100%;
    margin-bottom: ${v.spacing.small};
    grid-column: 1/3;
    border: 2px solid blue;
`;

export const SettingsPanelButton = styled(GenericButton)`
    border-radius: ${v.borderRadius.small};
    background: transparent;
    color: ${({theme}) => theme.textColor1};

    & .button-icon-and-text span {
        font-size: ${v.fontSize.xsmall};
        font-family: ${v.fonts.secondary};
        font-weight: ${v.fontWeight.bold};
    }
    
    &:hover {
        color: ${({theme}) => theme.textColor3};
    }
`;

export const UserInfoSpace = styled.div`
    border: 2px solid red;
    grid-column: 2/3;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 100%;
    margin: 0;
    padding: 0;
`;

export const UserInfoForm = styled(GenericForm)`
    border: ${v.borderThickness.light} solid ${({theme}) => theme.borderColor1};
    border-radius: ${v.borderRadius.small};
    padding-block: ${v.spacing.xxxsmall};
    width: 85%;
    height: 100%;

    & fieldset {
        display: grid;
        grid-template-columns: 1fr 1fr;
        grid-auto-rows: minmax(5%,max-content);
        place-items: center;
        border: 2px solid blue;
        padding: 0;
    }

    & .label-input-container {
        margin-block: ${v.spacing.small};
        width: 95%;
    }

    & .user-inputs-label {
        display: flex;
        align-items: flex-start;
        font-size: ${v.fontSize.small};
    }

    & .user-info-input {
        font-size: ${v.fontSize.xsmall};
    }
    
    & .form-main-button-container {
        flex-direction: row;
        align-items: center;
        justify-content: center;
        margin-block: ${v.spacing.xxsmall};

        & button {
            width: 25%;
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
