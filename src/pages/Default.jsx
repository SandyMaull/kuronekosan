import React from 'react'
import {
    Text,
    Link,
    Code,
  } from '@chakra-ui/react';
  import { Logo } from '../Logo';
import Layout from '../components/Layout';

function Default() {
    return (
        <Layout>
            <Logo h="40vmin" pointerEvents="none" />
            <Text>
                Edit <Code fontSize="xl">src/App.js</Code> and save to reload.
            </Text>
            <Link
                color="teal.500"
                href="https://chakra-ui.com"
                fontSize="2xl"
                target="_blank"
                rel="noopener noreferrer"
            >
                Learn Chakra
            </Link>

        </Layout>
    )
}

export default Default