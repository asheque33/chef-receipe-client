
import React from 'react';
import {  Outlet, useLoaderData, useNavigation } from 'react-router-dom';
import Chef from '../Chef/Chef';
import LoadingSpinner from '../LoadingSpinner/LoadingSpinner';



const Chefs = () => {

const navigation = useNavigation();
    if(navigation.state === 'loading'){
        return <LoadingSpinner/>
    }
    
    const chefs = useLoaderData();
    console.log(chefs);
  
    return (
        <div className='my-4 row row-cols-1 row-cols-md-2 g-4 mx-4 chefs'>
            {
                chefs.map(chef => (
                  <Chef key={chef.id}
                  chef={chef}
                  >
                  </Chef>
                  ))
              }
              <Outlet></Outlet>
            
        </div>


    );
};

export default Chefs;