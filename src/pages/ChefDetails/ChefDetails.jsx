import React from 'react';
import { useLoaderData } from 'react-router-dom';

const ChefDetails = () => {
    const chefDetail = useLoaderData();
    console.log(chefDetail);
    const {name, picture, numRecipes, yearsExperience, likes,recipeDetailsPage
    } = chefDetail;
    return (
        <div className="card h-100">
        <img src={picture} className="card-img-top h-100" alt="..." />
        <div className="card-body">
          <h5 className="card-title">{name}</h5>
          <ul className="list-group list-group-flush">
            <li className="list-group-item">Years of Experience : {yearsExperience}</li>
            <li className="list-group-item">Numbers Of Recipes : {numRecipes}</li>
            <li className="list-group-item">Likes : {likes}</li>
          </ul>
          <p className="card-text">{recipeDetailsPage}</p>
        </div>
        <div className="card-footer">
          {/* <button className='border-0 bg-light'><Link to={`/${id}`} className="btn btn-primary">View Recipes Button</Link></button> */}
        </div>


      </div>
    );
};

export default ChefDetails;