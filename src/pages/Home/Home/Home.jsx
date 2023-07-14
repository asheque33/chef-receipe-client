/* eslint-disable no-unused-vars */
import React from 'react';
import slider1 from '../sliderImg/slider1.jpg';
import slider2 from '../sliderImg/slider2.jpg';
import slider3 from '../sliderImg/slider3.jpg';
import slider4 from '../sliderImg/slider4.jpg';
import slider5 from '../sliderImg/slider5.jpg';
import Carousel from 'react-bootstrap/Carousel';
import { Outlet } from 'react-router-dom';

const Home = () => {
  return (
    <div>
      <div>
      <Carousel>
  <Carousel.Item interval={2000}>
    <img
      className="d-block w-75 h-25 mx-auto"
      src={slider1}
      alt="First slide"
    />
    <Carousel.Caption>
      <h3>First slide label</h3>
      <p>Tomato Omelette With Olives Cheese!!</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item interval={1500}>
    <img
      className="d-block w-75 h-25 mx-auto"
      src={slider2}
      alt="Second slide"
    />
    <Carousel.Caption>
      <h3>Second slide label</h3>
      <p>Meat Lahmajun Soup Salad Spices Side View!!</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item interval={1500}>
    <img
      className="d-block w-75 h-25 mx-auto"
      src={slider3}
      alt="Third slide"
    />
    <Carousel.Caption>
      <h3>Third slide label</h3>
      <p>
      Top View Cooked Vegetables Such As Red Tomatoes Green Bell Pepper Black Eggplants Potatoes Inside Plate!!
      </p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item interval={1500}>
    <img
      className="d-block w-75 h-25 mx-auto"
      src={slider5}
      alt="Third slide"
    />
    <Carousel.Caption>
      <h3>Fourth slide label</h3>
      <p>
      Comida Valencia Cocina Gourmet Gastronomy.
      </p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item interval={1500}>
    <img
      className="d-block w-75 h-25 mx-auto"
      src={slider4}
      alt="Fifth slide"
    />
    <Carousel.Caption>
      <h3>Fifth slide label</h3>
      <p>
      Lula Kebab With Rice Salad Vegetables Top View!!
      </p>
    </Carousel.Caption>
  </Carousel.Item>
</Carousel>
      </div>

      <Outlet></Outlet>

    </div>

  )
};

export default Home;