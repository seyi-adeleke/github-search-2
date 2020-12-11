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

    return (
        <Flex alignContent='flex-start' width='100%' mt='1rem' border='1px solid #E2E8F0' padding='1rem'>
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
        </Flex>   
    )
}

const Users = ({ data, count }) => {

    return (
        <Flex flexDirection='column' pt='1rem'>
           <Flex>
                <p>{count} User Result(s)</p>
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
