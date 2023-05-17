import React from 'react';
import {
  ChakraProvider,
  Box,
  VStack,
  Grid,
  theme,
  Image,
  Text,
} from '@chakra-ui/react';
import { ColorModeSwitcher } from '../ColorModeSwitcher';
import { Link } from 'react-router-dom';

function Layout(props) {
    return (
        <ChakraProvider theme={theme}>
            <Box textAlign="center" fontSize="xl">
                <Grid minH="100vh" p={3}>
                    <Box justifySelf='flex-end'>
                        { props.guest !== true ? (
                            <Link to="/login">
                                Login
                            </Link>
                        ) : (
                            <Link to="/">
                                Home
                            </Link>
                        )}
                        <ColorModeSwitcher justifySelf="flex-end" />
                    </Box>
                    <VStack spacing={8}>
                        { props.guest !== true && 
                            <Link to="/">
                                <Image
                                    borderRadius='full'
                                    boxSize='150px'
                                    src='favicon.png'
                                    alt='Kuronekosan'
                                />
                            </Link>
                        }
                        { props.guest !== true && 
                            <Link to="/">
                                <Text>Kuronekosan Portal</Text>
                            </Link>
                        }
                        {props.children}
                    </VStack>
                </Grid>
            </Box>
        </ChakraProvider>
    );
}

export default Layout;
