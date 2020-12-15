import React from 'react';
import './App.scss';

import {Introduction} from "./components/introduction/introduction";
import {DescribeMe} from "./components/describe-me/describe-me";
import {NavBar} from "./components/navbar/navbar";
import {Contacts} from "./components/contacts/contacts";

function App() {

    return (
        <div className="App">
            <NavBar/>
            <DescribeMe/>
            <Introduction/>
            <Contacts/>
        </div>
    );
}

export default App;
