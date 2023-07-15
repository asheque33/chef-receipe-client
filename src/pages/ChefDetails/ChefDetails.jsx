import React from 'react';
import { useLoaderData, useNavigation } from 'react-router-dom';
import './ChefDetails.css'
import { Card, CardGroup } from 'react-bootstrap';
import Rating from 'react-rating';
import { FaRegStar, FaStar } from 'react-icons/fa';
import LoadingSpinner from '../Home/LoadingSpinner/LoadingSpinner';


const ChefDetails = () => {
    const navigation = useNavigation();
    console.log(navigation.state);
    if(navigation.state === 'loading'){
        return <LoadingSpinner/>
    }

    const chefDetail = useLoaderData();
    console.log(chefDetail);
    const {name, picture, numRecipes, yearsExperience, likes,recipeDetailsPage,recipeImg1,recipeImg2,recipeImg3,ratings1,ratings2,ratings3} = chefDetail;
    return (
    <>
{/* Chef Details with banner */}
        <div className='chefDetails row row-cols-1 row-cols-md-2 g-4'>
<img className='w-50'  src={picture} alt="" />

      <div className="card-body ps-4 pe-4 ">
        <h3 className="card-title mt-4 fw-bolder">{name}</h3>
        <h5 className='mt-2 fw-bolder'>{yearsExperience} years experience</h5>
        <h5 className='fw-bolder'>{numRecipes} recipes</h5>
        <h5 className='fw-bolder'>{likes} likes</h5>
           <h6 className="card-text fw-bolder pe-4">{recipeDetailsPage}</h6>
         </div>
     </div>

        {/*Specific Chef's recipe  */}
     <CardGroup className='mt-4'>
      <Card>
        <Card.Img variant="top" className='h-100' src={recipeImg1} />
        <Card.Body>
          <Card.Title>Beef Stack</Card.Title>
          <Card.Text>
          <h6>Ingradiants : </h6><span><p>Beef,Ginger,Black Pepper,Turmeric,Salt etc.</p></span>
            <h6>Cooking Method : </h6>
            <ul>
                <li>Grilling - Grilling means cooking over a gas or charcoal grill or other heat source.</li>
                <li>Pan frying and stir frying.</li>
                <li>Pan searing.</li>
                <li>Roasting.</li>
           </ul>
           <h6>Rating :   <Rating
           readonly
           placeholderRating={ratings1}
           emptySymbol={<FaRegStar></FaRegStar>}
           placeholderSymbol={<FaStar className='text-warning'></FaStar>}
           fullSymbol={<FaStar></FaStar>}
           />  {ratings1}         
           </h6>
          </Card.Text>
        </Card.Body>
        
      </Card>
      <Card>
        <Card.Img variant="top" className='h-100' src={recipeImg2} />
        <Card.Body>
          <Card.Title>Beef Stack</Card.Title>
          <Card.Text>
          <h6>Ingradiants : </h6><span><p>Beef,Ginger,Black Pepper,Turmeric,Salt etc.</p></span>
            <h6>Cooking Method : </h6>
            <ul>
                <li>Grilling - Grilling means cooking over a gas or charcoal grill or other heat source.</li>
                <li>Pan frying and stir frying.</li>
                <li>Pan searing.</li>
                <li>Roasting.</li>
           </ul>
           <h6>Rating :   <Rating
           readonly
           placeholderRating={ratings2}
           emptySymbol={<FaRegStar></FaRegStar>}
           placeholderSymbol={<FaStar className='text-warning'></FaStar>}
           fullSymbol={<FaStar></FaStar>}
           />  {ratings2}         
           </h6>
          </Card.Text>
        </Card.Body>
      </Card>
      <Card>
        <Card.Img variant="top" className='h-100' src={recipeImg3} />
        <Card.Body>
          <Card.Title>Beef Stack</Card.Title>
          <Card.Text>
          <h6>Ingradiants : </h6><span><p>Beef,Ginger,Black Pepper,Turmeric,Salt etc.</p></span>
          <h6>Cooking Method : </h6>
            <ul>
                <li>Grilling - Grilling means cooking over a gas or charcoal grill or other heat source.</li>
                <li>Pan frying and stir frying.</li>
                <li>Pan searing.</li>
                <li>Roasting.</li>
           </ul>
           <h6>Rating :   <Rating
           readonly
           placeholderRating={ratings3}
           emptySymbol={<FaRegStar></FaRegStar>}
           placeholderSymbol={<FaStar className='text-warning'></FaStar>}
           fullSymbol={<FaStar></FaStar>}
           />  {ratings3}         
           </h6>
          </Card.Text>
        </Card.Body>
      </Card>
    </CardGroup>  
        
  </>
       



    );
};

export default ChefDetails;