import PropTypes from 'prop-types';
import { Heading } from '@chakra-ui/react';


const Title = ({ text }) => {
    return (
        <Heading as="h3" size="lg">
            {text}
        </Heading>
    )
};


Title.propTypes = {
    text: PropTypes.string,
};

export default Title;