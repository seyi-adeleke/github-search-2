import { VStack } from '@chakra-ui/react'
import PropTypes from 'prop-types';

import PrimaryButton from './PrimaryButton'

const Error = ({ handlClick }) => {
    return (
        <VStack spacing='1rem'>
            <iframe title='404 Gif' src='https://giphy.com/embed/JNsDdfwziM7o2yRXqY' width='480' height='270' frameBorder="0" class="giphy-embed" allowFullScreen />
            <PrimaryButton 
                onClick={() => handlClick()} 
                copy='Click Me To Reset'
            />
        </VStack>
    )
};

Error.propTypes = {
    handlClick: PropTypes.string.isRequired,
};

export default Error;
