import { Button } from '@mui/material';
import React from 'react';
import PropTypes from 'prop-types';

const SubmitButton = ({ handleFormSubmit }) => {

    SubmitButton.propTypes = {
        handleFormSubmit: PropTypes.func.isRequired,
    };

    return (
        <div>
            <Button variant='contained' style={{
                height: 34,
                width: 250,
            }}
                onClick={handleFormSubmit}><b className='submit'>Submit</b></Button>
        </div>

    )
}
export default SubmitButton
