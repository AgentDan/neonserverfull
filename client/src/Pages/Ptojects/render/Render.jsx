import React, {useContext} from 'react'
import {RenderElements} from "./RenderElements.jsx"
import RenderBlockNew from "./RenderBlockNew.jsx";
import {AuthContext} from "../../../context/AuthContext";

export const Render = () => {
    const {idProject} = useContext(AuthContext)

    const renderElements = idProject === false
        ? <RenderElements myPath={"zaglushka"}/>
        : <RenderBlockNew/>

    return (
        <>
            {renderElements}
        </>
    )
}
