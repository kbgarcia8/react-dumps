import styled from 'styled-components';
import { v } from '../../../styles/variables';
import GenericLabel from '../../atoms/Label';

export const FormLabel = styled(GenericLabel).attrs(props => ({
    labelDirection: props.labelDirection
}))`
    flex-direction:  ${(props) => props.$labelDirection};    
`;

export const EditableInputButtonContainer = styled.div`
    border: 2px solid black;
    display: flex;
    height: 50%;
    width: 20%;
`

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

export const FormFieldset = styled.fieldset.attrs(props => ({
    fieldHeight: props.fieldHeight
}))`
    padding: ${v.spacing.small};
    height: ${(props) => props.$fieldHeight};
`;

export const FieldsetWrapper = styled.div``;

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