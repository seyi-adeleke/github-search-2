import PropTypes from 'prop-types';
import { Flex, Divider, Image, HStack, Box, Link } from '@chakra-ui/react'
import { Fragment, useEffect, useState } from 'react';
import { fetchData } from '../utils';

const User = (url) => {
    const [userDetails, setUserDetails] = useState({});

    useEffect(() => {
        async function getData() {
            const response = await fetchData(url.url);
            setUserDetails(response.data)
        }
        getData();
    }, []);

    const handleClick = () => {
        window.open(userDetails.html_url);
    }
    return (
        <Box 
            _hover={{boxShadow: '5px 10px 8px #888888', cursor: 'pointer'}} 
            display='flex' 
            alignContent='flex-start' 
            width='100%' 
            mt='1rem' 
            border='1px solid #E2E8F0'
            padding='1rem'
            onClick={() => handleClick()}
        >
            <HStack spacing="24px">
                <Box>
                    <Image   
                        borderRadius='full'
                        boxSize='120px'
                        src={userDetails.avatar_url}
                    />
                </Box>
                <Box>
                    <Flex>
                        <Flex mr='1rem'>
                            <Link color="teal.500">
                                {userDetails.name}
                            </Link>
                        </Flex>
                        <Flex>
                            <p><i>{userDetails.login}</i></p>
                        </Flex>
                    </Flex>
                    <Flex>
                        <p>{userDetails.bio}</p>
                    </Flex>
                    <Flex>
                        <p><b>Followers</b>:{userDetails.followers}</p>
                    </Flex>
                    <Flex>
                        <p><b>Company</b>: {userDetails.company}</p>
                    </Flex>
                </Box>
            </HStack>
        </Box>   
    )
}


const CountCopy = (count) => {
    if (count === 1) return 'User Result Found';
    return 'User Results Found';
}

const Users = ({ data, count }) => {
    return (
        <Flex flexDirection='column' pt='1rem'>
            <Flex>
                <p>{`${count}  ${CountCopy(count)}`}</p>
            </Flex>
            <Divider />
            {
                 data.map(user => 
                    <Fragment key={user.id}>
                        <User url={user.url}/>
                    </Fragment>)
            }
        </Flex>
    )
}
Users.propTypes = {
    data: PropTypes.array.isRequired,
};

export default Users;
