
import React from 'react';
import {  Outlet, useLoaderData } from 'react-router-dom';
import Chef from '../Chef/Chef';



const Chefs = () => {
    const chefs = useLoaderData();
    console.log(chefs);
    
    // const {id,name,picture,numRecipes,yearsExperience,likes,recipeDetailsPage} = chef;
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