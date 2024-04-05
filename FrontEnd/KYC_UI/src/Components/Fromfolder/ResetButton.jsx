import { Button } from "@mui/material";
import React from 'react'
import PropTypes from 'prop-types';


const ResetButton = ({ resetForm }) => {
    
    ResetButton.propTypes = {
        resetForm: PropTypes.func.isRequired,
    };

    return (
        <div>
            <Button variant='contained' type='reset'
                style={{
                    height: 34,
                    width: 250,
                }}
                onClick={resetForm}><b className='reset'>Reset</b> </Button>

        </div>
    )

}
export default ResetButton
