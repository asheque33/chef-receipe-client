import React from 'react';

const Blog = () => {
    return (
        <div>
           <h4>Q-01: Write about the differences between uncontrolled and controlled components.</h4>
           <h6>Sol<sup>n</sup>: <br/>    In the context of software development, the terms "uncontrolled components" and "controlled components" are often used when discussing forms and user input.Let's explore the differences between them: <br/>
<h5>Uncontrolled Components:</h5>
<ul>
    <li>Uncontrolled components are typically used when you don't need to track or manage the state of the form inputs directly in your application.</li>
    <li>The state of the form inputs is managed by the browser rather than the application itself.</li>
    <li>Since the state is not explicitly controlled by the application, you can't programmatically modify or validate the input easily.</li>
    <li>Uncontrolled components are often simpler to implement and require less code.</li>
</ul>
<h5>Uncontrolled Components:</h5>
<ul>
    <li>Controlled components are used when you need to have more control over the state and behavior of the form inputs.
    </li>
    <li>In controlled components, the state of the form inputs is managed by the application itself, typically by storing the input values in the component's state.</li>
    <li>Controlled components allow you to modify, validate, and perform actions on the input values easily as they are managed by the application.</li>
    <li>Controlled components require more code compared to uncontrolled components, as you need to handle the state management and event handling explicitly.</li>
</ul> 
</h6><br />

<h4>Q-01:How to validate React props using PropTypes?</h4>
<h6>Sol<sup>n</sup>: <br/> To validate React props using PropTypes, you can make use of the prop-types library, which is commonly used in React applications. Here's a step-by-step guide on how to validate React props using PropTypes: <br />
<ol>
    <li>
    Install prop-types library: <br />
<ul>
    <li className='fw-normal'>If you're using npm, run the following command:<br />
   <small className='fw-light'> npm install prop-types</small>
    </li>
    <li className='fw-normal'>
    If you're using Yarn, run the following command:<br />
    <small className='fw-light'>yarn add prop-types</small>
</li>
</ul>
</li>
    <li>Import PropTypes in your component file: <br />
   <small className='fw-light'> import PropTypes from 'prop-types';</small>
    </li>
    <li>Define propTypes for your component: <br />
    <small>
    {/* MyComponent.propTypes = {
  prop1: PropTypes.string, // Example: prop1 should be a string
  prop2: PropTypes.number.isRequired, // Example: prop2 is a required number
  prop3: PropTypes.arrayOf(PropTypes.string), // Example: prop3 should be an array of strings
  // Add more prop types as needed
}; */}

    </small>
    <h6 className='fw-normal'>Here are some commonly used PropTypes validators:
    </h6>
<ul className='fw-light'>
    <li><small>PropTypes.string: Validates that the prop is a string.</small></li>
    <li><small>PropTypes.number: Validates that the prop is a number.</small></li>
    <li><small>PropTypes.bool: Validates that the prop is a boolean.</small></li>
    <li><small>PropTypes.array: Validates that the prop is an array.</small></li>
    <li><small>PropTypes.object: Validates that the prop is an object.</small></li>
    <li><small>PropTypes.func: Validates that the prop is a function.</small></li>
</ul>
    </li>
    <li>Use your component with validated props:
        <ul>
            <li><small className='fw-normal'>Once you have defined the propTypes for your component, they will be checked automatically when using the component. If any prop fails validation, a warning will be logged in the browser console.</small></li>
        </ul>
    </li>
   
</ol>

</h6>
        </div>
    );
};

export default Blog;