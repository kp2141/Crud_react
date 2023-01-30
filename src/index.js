import React from "react";
import ReactDom from 'react-dom';
import "./style.css"
import Home from "./components/Home";
import Add from "./components/Add";
import Edit from "./components/Edit";
import { BrowserRouter as Router, Route,Routes } from "react-router-dom";

const App = () =>{
    return (
        <div className="App">
            <Router>
                <Routes>
                    <Route path="/" element={<Home/>}>      
                    </Route>
                    <Route path="/create" element={<Add/>}>
                    </Route>
                    <Route path="/edit" element={<Edit/>}>
                    </Route>
                </Routes>
            </Router>

        </div>
    )
}


ReactDom.render(<App/>,document.getElementById('root'))