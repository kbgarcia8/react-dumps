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
        lineHeight: '1.5rem',
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
        xsmall: '0.75rem',
        small: '1rem',
        medium: '1.5rem',
        large: '1.75rem',
        xlarge: '2rem',
        xxlarge: '2.25rem',
        xxlarge: '2.5rem',
    },
    spacing: {
        xxxsmall: '0.25em',
        xxsmall: '0.375em',
        xsmall: '0.5em',
        small: '0.75em',
        medium: '1.25em',
        large: '2em',
        xlarge: '3.25em',
        xxlarge: '5.25em',
        xxxlarge: '8.5em',
    },
};