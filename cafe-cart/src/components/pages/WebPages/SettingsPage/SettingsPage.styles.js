import styled from 'styled-components';
import GenericForm from '../../../molecules/Form';
import GenericButton from '../../../atoms/Button';
import GenericLabel from '../../../atoms/Label';
import GenericInput from '../../../atoms/Input';
import { v } from '../../../../styles/variables';
import Divider from '../../../atoms/Divider';

export const SettingsPageWrapper = styled.div`
    padding: ${v.spacing.xxxsmall};
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-auto-rows: minmax(5%,max-content);
    column-gap: ${v.spacing.medium};
    row-gap: ${v.spacing.small};
    height: 100%;
`;

export const SettingsButtonSpace = styled.div`
    display: flex;
    width: 100%;
    height: 100%;
    margin-bottom: ${v.spacing.xsmall};
    grid-column: 1/3;
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

export const UserInfoDisplaySpace = styled.div`
    grid-column: 1/2;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    height: 100%;
`;

export const UserInfoSpace = styled(UserInfoDisplaySpace)`
    height: 57.5%;
    width: 100%;
    justify-content: center;
`;

export const ProfilePictureContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 60%;
    & .lucide{
        width: 100%;
        height: 100%;
        color: ${({theme}) => theme.borderColor1};
    }
`;

export const ProfilePicture = styled.img`
    width: 100%;
    height: 100%;

`;

export const UserFullnameSpan = styled.span`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    font-size: ${v.fontSize.large};
    font-weight: ${v.fontWeight.bold};
    font-family: ${v.fonts.primary}, ${v.fonts.fallback};
`;
export const DetailSpanMarker = styled(UserFullnameSpan)`
    font-size: ${v.fontSize.small};
    color: ${({theme}) => theme.borderColor2};
    margin-left: ${v.spacing.small};
    width: 35%;
`;
export const DetailSpan = styled.span`
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    margin-block: ${v.spacing.xxxsmall};
    font-size: ${v.fontSize.small};
    font-weight: ${v.fontWeight.bolder};
    font-family: ${v.fonts.primary}, ${v.fonts.fallback};
    color: ${({theme}) => theme.textColor1};
`;
export const RewardsCardSpace = styled(UserInfoDisplaySpace)`
    height: 45%;
    width: 70%;
    justify-content: space-evenly;
    border: ${v.borderThickness.light} solid ${({theme}) => theme.borderColor2};
    border-radius: ${v.borderRadius.medium};
    background-color: ${({theme}) => theme.backgroundColor1};
    padding: ${v.spacing.medium};
`;
export const RewardCardHeader = styled.h3`
    justify-content: flex-start;
    width: 100%;
    height: 10%;
    color: ${({theme}) => theme.textColor3};
`;
export const CardDivider = styled(Divider)`
    height: 10%;
`;
export const RewardCardDetailSpace = styled.div`
    height: 85%;
    display: flex;
    align-items: center;
    justify-content: center;
`;
export const RewardCardDetails = styled.span`
    font-style: italic;
    font-size: ${v.fontSize.large};
    font-weight: ${v.fontWeight.bold};
    font-family: ${v.fonts.secondary}, ${v.fonts.fallback};
    color: ${({theme}) => theme.textColor3};
`;
export const UserInfoEditSpace = styled.div`
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
    box-shadow: 0 4px 8px 0 ${({theme}) => theme.shadow};
    border-radius: ${v.borderRadius.small};
    padding-block: ${v.spacing.xxxsmall};
    width: 85%;
    height: 100%;

    & fieldset {
        display: grid;
        grid-template-columns: 1fr 1fr;
        grid-auto-rows: minmax(5%,max-content);
        place-items: center;
        border: none;
        padding-top: ${v.spacing.xlarge};
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
        color: ${({theme}) => theme.backgroundColor1};
    }
    & .user-info-input:disabled {
        background-color: ${({theme}) => theme.borderColor2};
        color: ${({theme}) => theme.backgroundColor3};
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
export const UserSettingsDisplaySpace = styled.div`
    grid-column: 1/3;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    height: 100%;
`;
export const ThemeSwitcherContainer = styled.div`
    display: flex;
    flex-direction: column;
    box-shadow: 0 2px 4px 0 ${({theme}) => theme.shadow};
    border-radius: ${v.borderRadius.small};
    padding: ${v.spacing.small};
    width: 100%;
`;
export const ThemeSwitchHeader = styled.h5`
    display: flex;
    width: 100%;
`;
export const ThemeSwitchLabel = styled(GenericLabel)`
    cursor: pointer;
    gap: 10px;
`;
export const ThemeSwitch = styled.div`
    position: relative;
    width: 60px;
    height: 28px;
    background: #b3b3b3;
    border-radius: 32px;
    padding: 4px;
    transition: 300ms all;

  &::before {
        transition: 300ms all;
        content: "";
        position: absolute;
        width: 28px;
        height: 28px;
        border-radius: 35px;
        top: 50%;
        left: 4px;
        background: white;
        transform: translate(0, -50%);
    }
`;
export const ThemeSwitchInput = styled(GenericInput)`
    display: none;

    &:checked + ${ThemeSwitch} {
        background: ${({theme}) => theme.backgroundColor1};

    &::before {
        transform: translate(32px, -50%);
    }
  }
`;
