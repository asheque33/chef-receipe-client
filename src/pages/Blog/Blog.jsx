import React from 'react';

const Blog = () => {
    return (
        <div className='container mt-3'>
           <h4>Q-01: Write about the differences between uncontrolled and controlled components.</h4>
           <h6>Sol<sup>n</sup>: <br/>    In the context of software development, the terms "uncontrolled components" and "controlled components" are often used when discussing forms and user input.Let's explore the differences between them: <br/>
     <ol>
    <li>Uncontrolled Components:
  <ul className='fw-light'>
    <li>Uncontrolled components are typically used when you don't need to track or manage the state of the form inputs directly in your application.</li>
    <li>The state of the form inputs is managed by the browser rather than the application itself.</li>
    <li>Since the state is not explicitly controlled by the application, you can't programmatically modify or validate the input easily.</li>
    <li>Uncontrolled components are often simpler to implement and require less code.</li>
  </ul>
     </li>
    <li>Uncontrolled Components:
<ul className='fw-light'>
    <li>Controlled components are used when you need to have more control over the state and behavior of the form inputs.
    </li>
    <li>In controlled components, the state of the form inputs is managed by the application itself, typically by storing the input values in the component's state.</li>
    <li>Controlled components allow you to modify, validate, and perform actions on the input values easily as they are managed by the application.</li>
    <li>Controlled components require more code compared to uncontrolled components, as you need to handle the state management and event handling explicitly.</li>
</ul> 
   </li>
  </ol>
</h6><br />

<h4>Q-02:How to validate React props using PropTypes?</h4>
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
</h6><br />
<h4>Q-03: Write about the differences between node.js and express.js .</h4> 
<h6>Sol<sup>n</sup>: <br/> Node.js and Express.js are two popular technologies used in web development, but they serve different purposes. Here's an overview of the differences between Node.js and Express.js : <br/>

<ol>
   <li>Node.js :</li>
 <ul className='fw-light'>
    <li>Node.js is a runtime environment that allows developers to run JavaScript code on the server-side.</li>
    <li>Node.js uses the V8 JavaScript engine to execute JavaScript code outside of a web browser.</li>
    <li>It can be used to build web servers, command-line tools, desktop applications, and even IoT (Internet of Things) devices.</li>
    <li>Node.js does not provide a built-in framework for web application development. Instead, it offers a set of core APIs and modules that allow developers to build their own custom server-side applications.</li>
  </ul>

   <li>Express.js :</li>
 <ul className='fw-light'>
    <li>Express.js is a minimalistic web application framework built on top of Node.js . </li>
    <li>It provides a robust set of features for building web applications, such as routing, request handling, view rendering, and error handling.</li>
    <li>Express.js allows developers to define routes, middleware functions, and other application logic in a concise and modular manner</li>
    <li>Express.js is highly customizable and can be used as a foundation for building RESTful APIs, single-page applications, and full-stack web applications.</li>
  </ul>
</ol>
</h6><br />

<h4>Q-04:How to validate React props using PropTypes?</h4>
<h6>Sol<sup>n</sup>: <br/> A custom hook in React is a JavaScript function that utilizes built-in hooks (such as useState, useEffect, useContext, etc.) to provide a specific functionality or behavior that can be reused across multiple components. Custom hooks allow you to encapsulate and share stateful logic in a reusable manner.
<br />    Here are few reasons to use Custom Hooks :

<ol>
    <li>Reusability: <span className='fw-light'>Custom hooks promote code reuse. If you find yourself using the same set of hooks and logic in multiple components, you can extract that logic into a custom hook and reuse it wherever needed. This helps avoid code duplication and keeps your codebase clean and maintainable.</span></li>
    <li>Abstraction: <span className='fw-light'>Custom hooks enable you to abstract away complex or repetitive logic. By encapsulating the logic within a custom hook, you can simplify the usage and understanding of that logic in your components. This abstraction improves the overall readability and clarity of your code.</span></li>
    <li>Composability: <span className='fw-light'>Custom hooks can be composed together with other hooks and components. Since hooks can call other hooks, you can create custom hooks that leverage existing hooks, allowing you to build more complex and feature-rich functionality.</span></li>
    <li>Testability: <span className='fw-light'>Custom hooks make testing easier. You can create unit tests specifically for the custom hook, ensuring that the behavior and functionality provided by the hook work as expected. This improves the testability and maintainability of your codebase.</span></li>
    <li>Separation of Concerns: <span className='fw-light'>Custom hooks allow you to separate concerns and keep your components focused on rendering and user interactions. By moving logic to custom hooks, you can keep your components clean and focused on their primary responsibilities, enhancing the overall organization and readability of your code.</span></li>
</ol>
<p>Overall, custom hooks provide a way to encapsulate and reuse complex or shared logic in a React application. </p>
</h6>

        </div>
    );
};

export default Blog;