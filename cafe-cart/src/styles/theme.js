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
    neutral4: '#373A40',
    neutral5: '#000000',
    accent: '#E1D3B7',
    shadow1: 'rgb(88, 88, 88)',
    shadow2: 'rgba(255, 255, 255, 0.50)'
}

export const notificationPalette = {
    infoLight: '#C9E6F0',
    infoDark: '#202234',
    warningLight: '#FCFFC1',
    warningDark: '#493323',
    successLight: '#9EDF9C',
    successDark: '#123524',
    errorLight: '#FAD4D4',
    errorDark: '#990000',
}

export const lightTheme = {//utilize dark text
    screenColor: palette.neutral2,
    backgroundColor1: palette.primary1,
    backgroundColor2: palette.primary2,
    backgroundColor3: palette.secondary2,
    backgroundColor4: palette.secondary1,
    borderColor1: palette.neutral5,
    borderColor2: palette.neutral3,
    textColor1: palette.neutral5,
    textColor2: palette.neutral4,
    textColor3: palette.accent,
    warning: palette.warning2,
    success: palette.success2,
    error: palette.error2,
    shadow: palette.shadow1
}

export const darkTheme = {//utilize light text
    screenColor: palette.neutral5,
    backgroundColor1: palette.primary2,
    backgroundColor2: palette.primary3,
    backgroundColor3: palette.secondary1,
    borderColor1: palette.neutral2,
    borderColor2: palette.neutral3,
    textColor1: palette.neutral1,
    textColor2: palette.accent,
    textColor3: palette.neutral2,
    warning: palette.error1,
    success: palette.success1,
    error: palette.error1,
    shadow: palette.shadow2
}

export default { palette, notificationPalette, lightTheme, darkTheme }