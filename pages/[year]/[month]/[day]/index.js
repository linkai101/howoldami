import React from 'react';
import Head from 'next/head';
import NextLink from 'next/link';
import { useRouter } from 'next/router';

import {
  Box,
  Flex,
  Container,
  Stack,
  SimpleGrid,
  Heading,
  Text,
  Link,
  Button,
  Input,
  Select,
  FormControl,
  Spinner,
} from '@chakra-ui/react';

export default function DatePage({ params }) {
  const router = useRouter();
  const { year, month, day } = router.query;

  const [birthDate, setBirthDate] = React.useState();

  React.useEffect(() => {
    getBirthDate();

    function getBirthDate() {
      let date = new Date(year, month-1, day, 0, 0, 0, 0);

      if (year === 'undefined' || month === 'undefined' || day === 'undefined')
        return setBirthDate(null);
      if (isNaN(date.getTime()))
        return setBirthDate(null);
      if (date.getTime() > (new Date()).getTime())
        return setBirthDate(null);
      setBirthDate(date);
    }
  }, []);

  function calcWeeksAlive() {
    let now = new Date();
    const msAlive = Math.abs(now - birthDate);
    const daysAlive = Math.ceil(msAlive / (1000 * 60 * 60 * 24));
    const weeksAlive = Math.round(daysAlive/7);
    return (weeksAlive > 4212) ? 4212 : weeksAlive;
  }

  if (typeof birthDate === 'undefined')
    return <Loading/>;

  if (!birthDate)
    return <Invalid/>;

  return (
    <>
      <Head>
        <title>very old - how old am i?</title>
      </Head>

      <Box bg="blue.500" color="white">
        <Container 
          maxW="container.lg" p={4}
          align="center"
        >
          <Heading as="h1" size="lg">
            so your birthday is {year}-{month}-{day}...
          </Heading>
        </Container>
      </Box>
      
      <Container 
        maxW="container.sm" 
        textAlign="center" 
        p={12}
      >
        <Heading size="lg">
          this is your life expectancy
        </Heading>
        <Heading size="md" mt={2} fontWeight="normal">
          each box represents 1 week, <br/>
          each row represents ~1 year, <br/>
          avg US life expectancy is ~80 years
        </Heading>

        <SimpleGrid columns={52} spacing="1px" mt={8}>
          {Array.from({ length: calcWeeksAlive() }, (_, i) => i + 1).map(d =>
            <Box 
              pt="100%"
              bg="gray.500"
              key={d}
            />
          )}
          {Array.from({ length: 4212-calcWeeksAlive() }, (_, i) => i + 1).map(d =>
            <Box 
              pt="100%"
              bg="gray.300"
              key={d}
            />
          )}
        </SimpleGrid>

        {calcWeeksAlive() >= 4212 ? 
          <Heading size="md" mt={2} fontWeight="normal" mt={8}>
            so basically, you're dead.
          </Heading>
        : 
          <Heading size="md" mt={2} fontWeight="normal" mt={8}>
            so basically, you're getting old.
          </Heading>
        }
      </Container>
    </>
  );
}

function Invalid() {
  return (
    <>
      <Head>
        <title>Invalid date - how old am i?</title>
      </Head>

      <Box bg="blue.500" color="white">
        <Container 
          maxW="container.lg" p={4}
          align="center"
        >
          <Heading as="h1" size="lg">
            Invalid date
          </Heading>
        </Container>
      </Box>
      
      <Container maxW="container.md" textAlign="center">
        <Text fontSize="lg" mt={8}>
          boo hoo, yeah we know <b>you're old</b>, but at least enter a valid date!
        </Text>

        <NextLink href='/' passHref>
          <Link style={{ textDecoration: "none" }}>
            <Button size="sm" colorScheme="blue" mt={4}>i've fallen and i can't get up</Button>
          </Link>
        </NextLink>
      </Container>
    </>
  );
}

function Loading() {
  return (
    <>
      <Head>
        <title>how old am i?</title>
      </Head>

      <Box bg="blue.500" color="white">
        <Container 
          maxW="container.lg" p={4}
          align="center"
        >
          <Heading as="h1" size="lg">
            loading...
          </Heading>
        </Container>
      </Box>
      
      <Container maxW="container.md" textAlign="center" p={12}>
        <Spinner size="lg" color="blue.500"/>
      </Container>
    </>
  );
}

