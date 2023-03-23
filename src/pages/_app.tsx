import {AppProps} from "next/app";
import { createGlobalStyle } from 'styled-components';
import reset from 'styled-reset';
import { ThemeProvider } from 'styled-components';
import { theme } from 'src/theme/theme';

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
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  ) 
}

export default MyApp
