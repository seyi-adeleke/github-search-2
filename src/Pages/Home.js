import React, { useState } from 'react';
import { Input, Flex, VStack, Box } from '@chakra-ui/react'


import Title from '../Components/Title';
import PrimaryButton from '../Components/PrimaryButton';
import { BASE_URL, fetchData } from '../utils';
import Users from '../Components/Users';

const Home = () => {
    const [searchValue, setSearchValue] = useState('');
    const [results, setResult] = useState([]);
    const [total, setTotal] = useState();

    const handleSearchValue = (value) => {
        setSearchValue(value);
    }

    const checkIfButtonIsEnabled = () => {
        if (searchValue.length) return false;
        return true;
    }

    const handleSearch = async () => {
        const response = await fetchData(BASE_URL(searchValue));
        setResult(response.data.items);
        setTotal(response.data.total_count);
    }

    const handleKeyPress = async (event) => {
        if (event.key === 'Enter'){
            const response = await fetchData(BASE_URL(searchValue));
            setResult(response.data.items);
            setTotal(response.data.total_count);
        }
    }

    return (
        <>
            <Flex color='black' flexDirection='column'>
                <VStack spacing={4}>
                    <Box>
                        <Title text='Github Search' align='left' />
                    </Box>
                    <Box>
                        <Input w='80vw' onKeyPress={(e) => handleKeyPress(e)} value={searchValue} placeholder='Search Github' size="lg" onChange={(e) => handleSearchValue(e.target.value)} />
                    </Box>
                    <Box>
                        <PrimaryButton onClick={() => handleSearch()} disabled={checkIfButtonIsEnabled()} copy='Search'/>
                    </Box>
                </VStack>
                {
                    results.length? 
                    <Box mx='10%'>
                         <Users data={results} count={total}/>
                    </Box> : null
                }
            </Flex>
        </>
    )
}

export default Home;
