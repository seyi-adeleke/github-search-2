import React, { useState } from 'react';
import { Input, Flex, VStack, Box, Center, useColorModeValue, HStack } from '@chakra-ui/react'
import { DiGithub } from 'react-icons/di';

import Title from '../Components/Title';
import PrimaryButton from '../Components/PrimaryButton';
import { BASE_URL, fetchData } from '../utils';
import Users from '../Components/Users';
import Paginaton from '../Components/Pagination';
import Error from '../Components/Error';

const Home = () => {
    const [searchValue, setSearchValue] = useState('');
    const [results, setResult] = useState([]);
    const [totalCount, setTotalCount] = useState(null);
    const color = useColorModeValue("black", "white")

    const handleSearchValue = (value) => {
        setSearchValue(value);
    }

    const checkIfButtonIsEnabled = () => {
        if (searchValue.length) return false;
        return true;
    }

    const searchGithub = async (page = 1) => {
        const response = await fetchData(BASE_URL(searchValue, page));
        setResult(response.data.items);
        setTotalCount(response.data.total_count);
    }

    const handleSearch = async () => {
       await searchGithub()
    }

    const handleKeyPress = async (event) => {
        if (event.key === 'Enter'){
            await searchGithub()
        }
    }

    const handlePageChange = async (page) => {
        await searchGithub(page)
    }
  
    const resetState = () => {
        setTotalCount(null);
        setSearchValue('');
        setResult([]);
    }
    return (
        <>
            <Flex color={color} flexDirection='column'>
                <VStack spacing={4}>
                    <HStack>
                        <DiGithub/>
                        <Title text='Github Search' align='left' />
                        <DiGithub/>
                    </HStack>
                    <Box>
                        <Input w='80vw' onKeyPress={(e) => handleKeyPress(e)} value={searchValue} placeholder='Search Github' size="lg" onChange={(e) => handleSearchValue(e.target.value)} />
                    </Box>
                    <Box>
                        <PrimaryButton onClick={() => handleSearch()} disabled={checkIfButtonIsEnabled()} copy='Search'/>
                    </Box>
                </VStack>
                {
                    totalCount === 0 ? 
                    <Center p='1rem'>  
                           <Error handlClick={() => resetState()}/>
                    </Center> : null
                }
                {
                    results.length? 
                        <Box mx='10%'>
                            <Users data={results} count={totalCount}/>
                        </Box> : null
                }
                {
                    results.length? 
                        <Center>  
                            <Paginaton count={totalCount} onPageChanged={(page) => handlePageChange(page)}/>
                        </Center> : null
                }
            </Flex>
        </>
    )
}

export default Home;
