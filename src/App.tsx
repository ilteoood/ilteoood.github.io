import React from 'react';
import './App.scss';

import {AboutMe} from "./components/about-me/about-me";
import {DescribeMe} from "./components/describe-me/describe-me";
import {NavBar} from "./components/navbar/navbar";

function App() {

    return (
        <div className="App">
            <NavBar/>
            <DescribeMe/>
            <AboutMe/>

        </div>
    );
}

export default App;
