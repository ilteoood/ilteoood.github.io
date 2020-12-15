import React from 'react';
import './App.scss';

import {AboutMe} from "./components/about-me/about-me";
import {DescribeMe} from "./components/describe-me/describe-me";

function App() {

    return (
        <div className="App">
            <AboutMe/>
            <DescribeMe/>
        </div>
    );
}

export default App;
