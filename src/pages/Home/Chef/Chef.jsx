/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from 'react';
import { Link } from 'react-router-dom';
import header from '../../../../images/heading.png'

const Chef = ({ chef }) => {
  console.log(chef);
  const {id, name, picture, numRecipes, yearsExperience, likes} = chef;
  return (

    <div>

      <div className="card h-100">
        <img src={picture} className="card-img-top h-100" alt="..." />
        <div className="card-body">
          <h5 className="card-title">{name}</h5>
          <ul className="list-group list-group-flush">
            <li className="list-group-item">Years of Experience : {yearsExperience}</li>
            <li className="list-group-item">Numbers Of Recipes : {numRecipes}</li>
            <li className="list-group-item">Likes : {likes}</li>
          </ul>
          {/* <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p> */}
        </div>
        <div className="card-footer">
          <button className='border-0 bg-light'><Link to={`/chef/${id}`} className="btn btn-primary">View Recipes Button</Link></button>
        </div>


      </div>

      
  {/* <div className='col-sm-12'>
  <img src={header} alt="" />
  <h2>ur REcipe</h2>
</div> */}


    </div>
  );
};

export default Chef;