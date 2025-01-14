import React from "react";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import {AuthContext} from './context/AuthContext'

import './App.css'
import {useAuth} from "./hooks/auth.hook.js";
import PrivatRouter from "./router/PRouter.jsx"
import Experience from "./components/Landing/Experience.jsx";
import Mainshop from "./components/Shop/Mainshop.jsx"
import Constructor from "./components/Constructor/Constructor.jsx";
import Card from "./components/Card.jsx";
import Projects from "./Pages/Ptojects/Projects.jsx";
import RendersKinki from "./Pages/Renders/RendersKinki/Renders"
import RendersJovanova from "./Pages/Renders/RendersJavanova/RendersJovanova.jsx";
import RendersKonst from "./Pages/Renders/RendersKonst/RendersKonst.jsx";
import RendersDesk from "./Pages/Renders/RendersDesk/RendersDesk.jsx";
import RendersRailing from "./Pages/Renders/RendersRailng/RendersRailing.jsx";
import SignIn from "./Pages/SignIn/SignIn.jsx";
import SignUp from "./Pages/SignUp/SignUp.jsx";
import MainPage from "./Pages/Main/MainPage.jsx";

function App() {
    const {login, logout, token, userId, isReady, logoName, arrNew, setArrNew, allProjects, setAllProjects, allElem, setAllElem, idProject, setIdProject} = useAuth()
    const isLogin = !!token
    return (
        <AuthContext.Provider value={{login, logout, token, userId, isReady, isLogin, logoName, arrNew, setArrNew, allProjects, setAllProjects, allElem, setAllElem, idProject, setIdProject}}>
            <BrowserRouter>
                <Routes>
                    <Route path="/">
                        <Route element={<PrivatRouter/>}>
                            <Route path="/projects" element={<Projects/>}/>
                            <Route path="/renderskinki" element={<RendersKinki/>}/>
                            <Route path="/renderjovanova" element={<RendersJovanova/>}/>
                            <Route path="/renderskonst" element={<RendersKonst/>}/>
                            <Route path="/renderdesk" element={<RendersDesk/>}/>
                            <Route path="/railing" element={<RendersRailing/>}/>
                        </Route>
                        <Route path="/" element={<Experience/>}/>
                        <Route path="/login" element={<SignIn/>}/>
                        <Route path="/registration" element={<SignUp/>}/>
                        <Route path="/shop" element={<Mainshop/>}/>
                        <Route path="/constructor" element={<Constructor/>}/>
                        <Route path="/card" element={<Card/>}/>
                        <Route path="*" element={<MainPage isLogin={isLogin}/>}/>
                    </Route>
                </Routes>
            </BrowserRouter>
        </AuthContext.Provider>
    )
}

export default App
