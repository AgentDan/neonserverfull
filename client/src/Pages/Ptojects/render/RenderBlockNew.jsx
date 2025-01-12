import React, {Suspense, useContext} from 'react'
import {RenderElements} from "./RenderElements.jsx"
import Box from "./Box"
import {AuthContext} from "../../../context/AuthContext"

const RenderBlockNew = () => {
    const {arrNew, setArrNew, allElem, setAllElem, idProject} = useContext(AuthContext)
    let defoultProject
    arrNew.projects.map((t) => t.id === idProject ? defoultProject = t.def : "")
    return (
        <>
            <Suspense fallback={<Box/>}>
                {
                    defoultProject.map((j)=>{
                        return(
                            <RenderElements myPath={j.file}/>
                        )
                    })
                }
                {
                    allElem.map((t) => {
                        return (
                            t.check && <RenderElements myPath={t.file}/>
                        )
                    })
                }
            </Suspense>
        </>
    )
}

export default RenderBlockNew