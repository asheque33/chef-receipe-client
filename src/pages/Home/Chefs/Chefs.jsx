
import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Chef from '../Chef/Chef';
import './Chefs.css'


const Chefs = () => {
    const chefs = useLoaderData();
    
    // const {id,name,picture,numRecipes,yearsExperience,likes,recipeDetailsPage} = chef;
    return (
        <div className='my-4 row row-cols-1 row-cols-md-2 g-4 chefs'>
            {
                chefs.map(chef => (
                  <Chef key={chef.id}
                  chef={chef}
                  >
                  </Chef>
                  


                ))
            }

        </div>


    );
};

export default Chefs;