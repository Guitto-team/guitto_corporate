import { createGlobalStyle } from 'styled-components';
import reset from 'styled-reset';
import { ThemeProvider } from 'styled-components';
import { theme } from 'src/theme/theme';
import { AnimatePresence } from 'framer-motion'

const GrobalStyle = createGlobalStyle`
${reset}
*, *::after, *::before {
  box-sizing: border-box;
}
`

function MyApp({ Component, pageProps }) {
  return (
    <>
      <GrobalStyle />
      <ThemeProvider theme={theme}>
        <AnimatePresence>
          <Component {...pageProps} />
        </AnimatePresence>
      </ThemeProvider>
    </>
  ) 
}

export default MyApp
