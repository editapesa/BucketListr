//this is for the first screen in wireframe example
//displays "what are you waiting for?" & start button

import React from "react";
import { Link } from 'react-router-dom';

function Home() {
    return (
        <div class="fluid home-backpic">
            <h1 className='p-3 text-center'>WHAT ARE YOU WAITING FOR?</h1>
            <p className='text-center text-white'>Show the world what you want most out of life.</p>
            <p className='text-center text-white'>People who set goals are 7x more likely to reach them.</p>
            <p className='text-center'><Link to="/signup" className='btn'>START RIGHT NOW!</Link></p>
        </div>
    );
}

export default Home;