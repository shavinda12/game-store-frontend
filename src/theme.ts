import { extendTheme, type ThemeConfig } from '@chakra-ui/react'

const config:ThemeConfig={
    initialColorMode:'dark',
    useSystemColorMode:false
}

const theme=extendTheme({config})

export default theme;

// 2. Add your color mode config
// const config: ThemeConfig = {
//   initialColorMode: 'light',
//   useSystemColorMode: false,
// }

// // 3. extend the theme
// const theme = extendTheme({ config })

// export default theme