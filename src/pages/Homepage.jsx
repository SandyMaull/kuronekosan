import React from 'react'
import {
    SimpleGrid,
    Text,
    Box,
    Image,

} from '@chakra-ui/react'
import Layout from '../components/Layout'
import { data } from "../data/sites";

function Homepage() {
    return (
        <Layout>
            <SimpleGrid spacing={6} templateColumns='repeat(auto-fill, minmax(200px, 1fr))'>
                {data.map((x, index) => (
                    <Box maxW='sm' borderWidth='1px' borderRadius='lg' overflow='hidden' key={index}>
                        <a href={x.url} target="_blank" rel="noopener noreferrer" >
                            <Image src={'img/' + x.pict} alt={x.name} />
                            <Box p='6'>
                                <Box
                                    mt='1'
                                    fontWeight='semibold'
                                    as='h4'
                                    lineHeight='tight'
                                    noOfLines={1}
                                >
                                    <Text>
                                        {x.name}
                                    </Text>
                                </Box>
                                <Box>
                                    <Text>
                                        {x.desc}
                                    </Text>
                                </Box>
                            </Box>
                        </a>
                    </Box>
                ))}
            </SimpleGrid>
        </Layout>
    )
}

export default Homepage