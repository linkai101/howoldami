import '../styles/globals.css';
import Head from 'next/head';
import { ChakraProvider } from "@chakra-ui/react";
import theme from '../lib/theme';

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>how old am i?</title>
        <link rel="icon" href="/favicon.ico" />
        <meta
          name="description"
          content="An app that visualizes your age compared to the US average life expectancy."
        />
      </Head>
      
      <ChakraProvider theme={theme} resetCSS>
        <Component {...pageProps} />
      </ChakraProvider>
    </>
  );
}

export default MyApp;