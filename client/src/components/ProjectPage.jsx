import React, {useEffect, useState} from 'react';
// import "./ProjectPage.css";
import Model from "./Model.jsx";
import {v1} from "uuid";
import {Elements} from "../state/stateCard.jsx";

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
            <div className="max-sm:h-screen max-sm:bg-gray-300  bg-gray-200">
                <div className="pt-24 max-sm:pt-0 ">
                    <div className="max-sm:h-auto max-sm:w-auto mx-auto w-[550px] h-auto">
                        <div className="max-sm:top-64 h-[395px] w-[330px] bg-orange-400 absolute z-20 rounded-tr-[200px] rounded-br-[200px]"></div>
                        <div className="max-sm:w-auto h-[395px] w-[550px] bg-gray-300">
                            <div className=" z-20 h-[394px] w-[305px] absolute max-sm:ml-0 ml-[245px]">
                                <div className="font-bold h-auto ml-8">
                                    <h1>{current.name}</h1>
                                </div>
                                <div className="flex h-auto ml-4">
                                    <div className="mt-5 w-1/3 text-white ">
                                        EQUIPMENT:
                                    </div>
                                    <div className="mt-5 text-gray-400 w-auto h-auto">
                                        {
                                            elem.map((t) => {
                                                return (
                                                    <div key={v1()}
                                                         className={`${t.name === currentElement ? "outline rounded-2xl" : ""} mb-1 h-6 px-3 flex cursor-pointer  `}
                                                         onClick={() => setCurrentElement(t.name)}
                                                    >
                                                        <img className="h-6 content-center w-auto"
                                                             src={`./images/icon/${t.name}.png`}/>
                                                        <div className="ml-4 content-center">{t.name}</div>
                                                    </div>
                                                )
                                            })
                                        }
                                    </div>
                                </div>
                                <div className="mt-5 h-auto ml-4">
                                    <div className="mt-5 w-1/3 text-white">
                                        DESCRIPTION:
                                    </div>
                                    <div className="mt-2 text-gray-400">
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
                        <div className="max-sm:mx-0 max-sm:bg-transperent max-sm:top-[250px] max-sm:w-screen max-sm:h-auto max-sm:h-auto max-sm:rounded-tr-[200px] absolute z-50 top-0 pt-10 -mx-80 w-[650px] h-3/5">
                            {current.file &&
                                <Model currentElement={currentElement} current={current}/>
                            }
                        </div>
                    </div>
                </div>
                {/*<Slider/>*/}
            </div>
        </>
    );
};

export default ProjectPage;