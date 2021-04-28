import React from 'react';
import NextLink from 'next/link';

import {
  Box,
  Flex,
  Container,
  Center,
  Stack,
  Heading,
  Text,
  Link,
  Button,
  Input,
  Select,
  FormControl,
} from '@chakra-ui/react';

export default function Home() {
  const [month, setMonth] = React.useState();
  const [day, setDay] = React.useState();
  const [year, setYear] = React.useState();

  return (
    <>
      <Container 
        maxW="container.md" p={12} pt={24} 
        textAlign="center"
      >
        <Heading as="h1" size="2xl">how old am i?</Heading>

        <Flex mt={6} direction={{ base: "column", md: "row" }}>
          <Center 
            textAlign={{ base: "center", md: "right" }} 
            px={{ base: 0, md: 6 }}
          >
           <Text fontSize="lg" fontWeight="bold">
              very old, my birthday is
            </Text>
          </Center>
          
          <Stack flex={1} direction="row" my={2}>
            <Select flex={3} placeholder="Month" 
              value={month} onChange={e => setMonth(e.target.value)}
            >
              <option value="1">January</option>
              <option value="2">Febuary</option>
              <option value="3">March</option>
              <option value="4">April</option>
              <option value="5">May</option>
              <option value="6">June</option>
              <option value="7">July</option>
              <option value="8">August</option>
              <option value="9">September</option>
              <option value="10">October</option>
              <option value="11">November</option>
              <option value="12">December</option>
            </Select>
            <Input flex={1} type="number" placeholder="Day"
              value={day} onChange={e => setDay(e.target.value)}
            />
            <Input flex={1} type="number" placeholder="Year"
              value={year} onChange={e => setYear(e.target.value)}
            />
          </Stack>
        </Flex>

        <NextLink href={`/${year}/${month}/${day}`} passHref>
          <Link style={{ textDecoration: "none" }}>
            <Button size="sm" colorScheme="blue" mt={2}>
              yeah, i am sooo old
            </Button>
          </Link>
        </NextLink>
      </Container>
    </>
  );
}

/*

<Box bg="blue.400" color="white">
        <Container 
          maxW="container.lg" p={12} pt={24}
          align="center"
        >
          <Heading as="h1" size="2xl">
            How Old Am I
          </Heading>
        </Container>
      </Box>

      <Container maxW="container.sm" p={8} pt={16} align="center">
        <Heading size="lg">Enter your birthday to get started.</Heading>

        <Stack direction="row" mt={6}>
          <Select placeholder="Month" 
            value={month} onChange={e => setMonth(e.target.value)}
          >
            <option value="1">January</option>
            <option value="2">Febuary</option>
            <option value="3">March</option>
            <option value="4">April</option>
            <option value="5">May</option>
            <option value="6">June</option>
            <option value="7">July</option>
            <option value="8">August</option>
            <option value="9">September</option>
            <option value="10">October</option>
            <option value="11">November</option>
            <option value="12">December</option>
          </Select>
          <Select placeholder="Day"
            value={day} onChange={e => setDay(e.target.value)}
          >
            {Array.from({length: 31}, (_, i) => i + 1).map(d =>
              <option value={d} key={d}>{d}</option>
            )}
          </Select>
          <Input type="number" placeholder="Year"
            value={year} onChange={e => setYear(e.target.value)}
          />
        </Stack>

        <NextLink href={`/${year}/${month}/${day}`} passHref>
          <Link style={{ textDecoration: "none" }}>
            <Button type="submit" colorScheme="blue" mt={4}>
              That's my birthday!
            </Button>
          </Link>
        </NextLink>
      </Container>

*/