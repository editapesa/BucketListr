//this is for the first screen in wireframe example
//displays "what are you waiting for?" & start button

import React from "react";
import Header from '../components/Header';

function Home() {
    return (       
        <div>
            <Header />
            <h1>WHAT ARE YOU WAITING FOR?</h1>
            <p>Show the world what you want most out of life.</p>
            <p>People who set goals are 7x more likely to reach them.</p>
            <button>START RIGHT NOW</button>
        </div>
    );
}

export default Home;