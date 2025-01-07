import './App.css'
import Experience from "./components/Landing/Experience.jsx";
import Mainshop from "./components/Shop/Mainshop.jsx"
import Constructor from "./components/Constructor/Constructor.jsx";
import React from "react";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Card from "./components/Card.jsx";

function App() {

    return (
        <>
            <BrowserRouter>
                <Routes>
                    <Route path={"/"} element={<Experience/>}/>
                    <Route path={"/shop"} element={<Mainshop/>}/>
                    <Route path={"/constructor"} element={<Constructor/>}/>
                    <Route path={"/card"} element={<Card/>}/>
                </Routes>
            </BrowserRouter>
        </>
    )
}

export default App
