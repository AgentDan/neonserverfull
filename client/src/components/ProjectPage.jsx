import React, {useEffect, useState} from 'react';
import "./ProjectPage.css";
import Model from "./Model.jsx";
import {v1} from "uuid";
import {Elements} from "../state/state.jsx";

const ProjectPage = () => {
    const [elem, setElem] = useState([])
    const [current, setCurrent] = useState([])
    const [currentElement, setCurrentElement] = useState("Complete")
    const [state, setState] = useState(Elements)

    let a = []
    useEffect(() => {
        state.map((t) => {
            t.name === "SMART DESK full complete" ? a.push(t) : ""
        })
        setCurrent(a[0])
        setElem(a[0].elements)
    }, []);
    return (
        <>
            <div className="card relative bg-gray-200">
                <div className="mx-auto mt-24">
                    <div className="left">
                    </div>
                    <div className="right">
                        <div className="product-info">
                            <div className="font-bold">
                                <h1>{current.name}</h1>
                            </div>
                            <div className="flex">
                                <div className="mt-5 w-1/3 text-white">
                                    ECUIPMENT:
                                </div>
                                <div className="  mt-5 text-gray-400">
                                    {
                                        elem.map((t) => {
                                            return (
                                                <div key={v1()}
                                                     className={`${t.name === currentElement ? "outline rounded-2xl" : ""} mb-1 h-6 px-3 flex cursor-pointer  `}
                                                     onClick={() => setCurrentElement(t.name)}
                                                >
                                                    <img className="h-6 content-center"
                                                         src={`./images/icon/${t.name}.png`}/>
                                                    <div className="ml-4 content-center">{t.name}</div>
                                                </div>
                                            )
                                        })
                                    }
                                </div>
                            </div>
                            <div className="bg-blue-400">
                                <div className="mt-5 w-1/3 text-white">
                                    DESCRIPTION:
                                </div>
                                <div className="  mt-2 text-gray-400">
                                    {
                                        elem.map((t) => {
                                                return (
                                                    <div key={v1()}
                                                         className={`${t.name !== currentElement ? "hidden" : ""}`}>{t.description}</div>
                                                )
                                            }
                                        )
                                    }
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {current.file &&
                    <Model currentElement={currentElement} current={current}/>
                }
                {/*<Slider/>*/}
            </div>
        </>
    );
};

export default ProjectPage;