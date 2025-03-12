import styled from 'styled-components';
import { v } from '../../../styles/variables';

export const LabelAndInputContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: left;
    width: 100%;
    margin-bottom: ${v.spacing.small};
`;

export const FormLegend = styled.legend`
    font-size: ${v.spacing.medium};
    font-weight: 500;
    margin-bottom: ${v.spacing.small};
    width: 25%;
    text-align: center;
    font-family: ${v.fonts.secondary}, ${v.fonts.fallback};
`;

export const FormFieldset = styled.fieldset`
    padding: ${v.spacing.small};
`;

export const Form = styled.form`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
`;
export const ButtonContainer = styled.div`
    display: flex;
    justify-content: space-between;
    width: 100%;
`;