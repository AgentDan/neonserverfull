import React from 'react';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Exp from "./Landing/Exp.jsx";

const Basic = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path={"/"} element={<Exp/>}/>
            </Routes>
        </BrowserRouter>
    );
};

export default Basic;