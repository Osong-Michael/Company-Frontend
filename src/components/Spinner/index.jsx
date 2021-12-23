import React from 'react';
import { Spinner } from 'react-bootstrap';

const SpinnerComp = () => {

    return (
        <div className="spinner-ctn">
            <Spinner animation="border" variant="primary" />
        </div>
    );
};

export default SpinnerComp;