import React from 'react';
import './App.scss';

import {Introduction} from "./sections/introduction/introduction";
import {DescribeMe} from "./sections/describe-me/describe-me";
import {NavBar} from "./components/navbar/navbar";
import {Contacts} from "./sections/contacts/contacts";
import {AboutMe} from "./sections/about-me/about-me";
import {Projects} from "./sections/projects/projects";

function App() {

    return (
        <div className="App">
            <NavBar/>
            <DescribeMe/>
            <Introduction/>
            <AboutMe/>
            <Projects/>
            <Contacts/>
        </div>
    );
}

export default App;
