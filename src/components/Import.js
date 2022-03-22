import React from 'react'
import Button from '@material-ui/core/Button';

const Import = (props) => {
    // fill out this component

    return (
        <Button variant="contained" color="primary" onClick={() => props.fetchMakes()}>
        Import
      </Button>
    )
}

export default Import