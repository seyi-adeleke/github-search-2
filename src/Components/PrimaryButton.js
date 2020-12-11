import PropTypes from 'prop-types';
import { Button } from '@chakra-ui/react';


const PrimaryButton = ({ copy, onClick, disabled }) => {
    return (
        <Button size='lg' disabled={disabled} colorScheme='teal' variant='outline' onClick={() => onClick()}>
            {copy}
        </Button>
    );
}

PrimaryButton.propTypes = {
    copy: PropTypes.string.isRequired,
    onClick: PropTypes.func.isRequired,
    disabled: PropTypes.bool,
};

export default PrimaryButton;