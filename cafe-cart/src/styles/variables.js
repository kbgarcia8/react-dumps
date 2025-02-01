//put typescale, styled component css`` and sizing constants object here
/*research on values recommended for these
    https://medium.com/codyhouse/create-your-design-system-part-1-typography-7c630d9092bd
*/
/* Example
export const spacing = {
    small: '8px',
    medium: '16px',
    large: '24px',
    xlarge: '32px',
    xxlarge: '64px',
};
To use in styled components:
import { v } from '../../styles/variables';

const StyledComponent = styled.div`
    margin: ${v.spacing.medium};
`;
*/

export const v = {
    base: {
        fontSize: '16px',
        spacing: '24px',
        lineHeight: '1.25rem',
    },
    fonts: {
        primary: 'Trirong',
        secondary: 'Oswald',
        tertiary: 'Arvo',
        fallback: 'system-ui, -apple-system, BlinkMacSystemFont, \'Segoe UI\', Roboto, Oxygen, Ubuntu, Cantarell, \'Open Sans\', \'Helvetica Neue\', sans-serif',
    },
    fontWeight : {
        light: 300,
        regular: 400,
        medium: 500,
        bold: 700,
        bolder: 900,
    },
    fontSize: {
        xxsmall: '0.5rem',
        xsmall: '0.75rem',
        small: '1rem',
        medium: '1.25rem',
        large: '1.5rem',
        xlarge: '1.75rem',
        xxlarge: '2rem',
        xxxlarge: '2.25rem',
    },
    spacing: {
        xxxsmall: '0.25rem',
        xxsmall: '0.375rem',
        xsmall: '0.5rem',
        small: '0.75rem',
        medium: '1.25rem',
        large: '2rem',
        xlarge: '3.25rem',
        xxlarge: '5.25rem',
        xxxlarge: '8.5rem',
    },
    borderRadius: {
        small: '0.25rem',
        medium: '0.5rem',
        large: '1rem',
        circle: '50%',
    },
    borderThickness: {
        thin: '0.0625rem',
        light: '0.125rem',
        medium: '0.25rem',
        thick: '0.5rem',
    },
    width : {
        fixed_xsmall: '50px',
        fixed_small: '150px',
        fixed_medium: '300px',
        fixed_large: '500px',
        quarter: '25%',
        half: '50%',
        third: '75%',
        full: '100%'        
    },
    breakpoints: {
        mobile: '480px',
        tablet: '780px',
        desktop: '1040px',
        largeDesktop: '1440px'
    }
};