//put light and dark theme here, research how to do this
/*
Implement theme using useContext 
    https://medium.com/@ankita.pl277/use-usecontext-and-basic-css-to-create-dark-theme-229db41eadf1
    https://medium.com/@riteshbhagat/implementing-theme-in-react-using-context-api-196149967c9d

Implement theme using styled-components
    https://dev.to/aromanarguello/how-to-use-themes-in-styled-components-49h
*/

export const palette = {
    primary1: '#202234',
    primary2: '#3C5E83',
    primary3: '#0F60B6',
    secondary1: '#C67E10',
    secondary2: '#F6C46D',
    neutral1: '#FFFFFF',
    neutral2: '#F2F2F2',
    neutral3: '#ABABAB',
    neutral4: '#000000',
    accent: '#E1D3B7',
    warning1: '#FF8303',
    warning2: '#F39C11',
    success1: '#3E7B27',
    success2: '#85A947',
    error1: '#E84C3D',
    error2: '#E5D0AC'
}

export const lightTheme = {//utilize dark text
    screenColor: palette.neutral2,
    backgroundColor1: palette.primary1,
    backgroundColor2: palette.primary2,
    backgroundColor3: palette.secondary2,
    borderColor1: palette.neutral4,
    borderColor2: palette.neutral3,
    textColor1: palette.neutral4,
    textColor2: palette.primary2,
    warning: palette.error2,
    success: palette.success2,
    error: palette.error2
}

export const darkTheme = {//utilize light text
    screenColor: palette.neutral4,
    backgroundColor1: palette.primary2,
    backgroundColor2: palette.primary3,
    backgroundColor3: palette.secondary1,
    borderColor1: palette.neutral4,
    borderColor2: palette.neutral3,
    textColor1: palette.neutral1,
    textColor2: palette.accent,
    warning: palette.error1,
    success: palette.success1,
    error: palette.error1
}

export default { lightTheme, darkTheme }