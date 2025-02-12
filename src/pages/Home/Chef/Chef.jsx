/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from 'react';
import { Link } from 'react-router-dom';

const Chef = ({ chef }) => {
  console.log(chef);
  const {id, name, picture, numRecipes, yearsExperience, likes} = chef;
  return (

    <div>

      <div className="card h-100">
        <img src={picture} className="card-img-top h-100" alt="..." />
        <div className="card-body">
          <h5 className="card-title ps-3">{name}</h5>
          <ul className="list-group list-group-flush">
            <li className="list-group-item">Years of Experience : {yearsExperience}</li>
            <li className="list-group-item">Numbers Of Recipes : {numRecipes}</li>
            <li className="list-group-item">Likes : {likes}</li>
          </ul>
        </div>

        <div className="card-footer">
          <button className='border-0 bg-light'><Link to={`/chef/${id}`} className="btn btn-primary">View Recipes Button</Link></button>
        </div>

      </div>

    </div>
  );
};

export default Chef;