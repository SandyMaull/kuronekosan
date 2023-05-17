import React from 'react'
import Layout from '../components/Layout'
import { Box, Button, Card, CardBody, CardFooter, FormControl, FormHelperText, FormLabel, Heading, Image, Input, Stack } from '@chakra-ui/react'

function Login() {
    return (
        <Layout guest>
            <Card
                direction={{ base: 'column', sm: 'row' }}
                overflow='hidden'
                variant='outline'
            >
                <Image
                    objectFit='cover'
                    maxW={{ base: '100%', sm: '200px' }}
                    src='/Cayna-Edit.png'
                    alt='Caffe Latte'
                />

                <Stack>
                    <CardBody>
                        <Heading size='md'>Login</Heading>
                        <Box py='2' px='10'>
                            <FormControl p='3' isRequired>
                                <FormLabel>Email</FormLabel>
                                <Input type='email' />
                                <FormHelperText>Insert your registered Email.</FormHelperText>
                            </FormControl>
                            <FormControl p='3' isRequired>
                                <FormLabel>Password</FormLabel>
                                <Input type='password' />
                                <FormHelperText>Insert your password.</FormHelperText>
                            </FormControl>
                        </Box>
                    </CardBody>

                    <CardFooter>
                        <Button variant='solid' colorScheme='blue'>
                            Login
                        </Button>
                    </CardFooter>
                </Stack>
            </Card>
        </Layout>
    )
}

export default Login