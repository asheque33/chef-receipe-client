import React from 'react';
import { Spinner } from 'react-bootstrap';

const LoadingSpinner = () => {
    return (
        <div className='d-flex justify-content-center align-items-center' style={{
            height: `calc(100vh - 100px)`}}>
            <h5 className='fw-normal fs-1'>L</h5>
           <Spinner animation="border" variant="danger" />
            <h5 className='fw-normal fs-1'>ading...</h5>
            
        </div>
    );
};

export default LoadingSpinner;