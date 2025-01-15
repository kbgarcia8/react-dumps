import styled from 'styled-components';

export const LabelAndInputContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: left;
    width: 100%;
    margin-bottom: 1rem;
`;

export const FormLegend = styled.legend`
    font-size: 1.25rem;
    font-weight: 500;
    margin-bottom: 1rem;
    width: 25%;
    text-align: center;
    font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
`;

export const FormFieldset = styled.fieldset`
    padding: 1rem;
`;

export const Form = styled.form`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;

    & .button-container {
        display: flex;
        justify-content: space-between;
        width: 100%;
    }
`;

export default { LabelAndInputContainer, FormFieldset, FormLegend, Form };