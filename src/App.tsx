import React from 'react';
import './App.scss';

import {Introduction} from "./components/introduction/introduction";
import {DescribeMe} from "./components/describe-me/describe-me";
import {NavBar} from "./components/navbar/navbar";
import {Contacts} from "./components/contacts/contacts";
import {AboutMe} from "./components/about-me/about-me";

function App() {

    return (
        <div className="App">
            <NavBar/>
            <DescribeMe/>
            <Introduction/>
            <AboutMe></AboutMe>
            <Contacts/>
        </div>
    );
}

export default App;
