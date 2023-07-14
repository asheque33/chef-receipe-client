import React from 'react';
import { useLoaderData } from 'react-router-dom';
import './ChefDetails.css'

const ChefDetails = () => {
    const chefDetail = useLoaderData();
    console.log(chefDetail);
    const {name, picture, numRecipes, yearsExperience, likes,recipeDetailsPage
    } = chefDetail;
    return (
        <div className='chefDetails row row-cols-1 row-cols-md-2 g-4'>

<img className='w-50' src={picture} alt="" />

      <div className="card-body ps-4 pe-4 ">
        <h3 className="card-title mt-4 fw-bolder">{name}</h3>
        <h5 className='mt-2 fw-bolder'>{yearsExperience} years experience</h5>
        <h5 className='fw-bolder'>{numRecipes} recipes</h5>
        <h5 className='fw-bolder'>{likes} likes</h5>
           <h6 className="card-text fw-bolder pe-4">{recipeDetailsPage}</h6>
         </div>
       


     </div>

    );
};

export default ChefDetails;