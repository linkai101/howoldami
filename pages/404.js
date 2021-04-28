import React from 'react';
import Head from 'next/head';

import {
  Box,
  Flex,
  Heading,
  Text,
  Link,
  Button,
} from '@chakra-ui/react';

export default function Custom404() {
  return (
    <>
      <Head>
        <title>404</title>
      </Head>

      <Flex minH="90vh" align="center" justify="center">
        <Box align="center">
          <Heading as="h1" size="2xl" color="blue.400">404!</Heading>
          <Text fontSize="lg">Sorry, that page isn't here.</Text>
          <Link href="/" style={{ textDecoration: "none" }}>
            <Button colorScheme="blue" mt={4}>take me home</Button>
          </Link>
        </Box>
      </Flex>
    </>
  );
}