import React from 'react';
import { Link, useRouteError } from 'react-router-dom';
import { FaFaceTired } from "react-icons/fa6";

const ErrorPage = () => {
    const {error,status} = useRouteError();
    console.log(error.message);
    return (
        <div className='d-flex justify-content-center  bg-secondary-subtle vh-100 pt-4'>
           
<div className='container d-flex flex-column align-items-center my-4 py-4 mb-0'>
<FaFaceTired className='text-warning fs-1 mt-4'></FaFaceTired>  
          <h2><span className='fw-bold text-warning'>{status || 404 }</span></h2>
          <p className='fw-bold text-danger'>{error.message}</p>
          <Link className='bg-info opacity bg-opacity-50 text-secondary px-4 py-2 rounded' to='/'>Back to Home</Link>
</div>

        </div>
    );
};

export default ErrorPage;