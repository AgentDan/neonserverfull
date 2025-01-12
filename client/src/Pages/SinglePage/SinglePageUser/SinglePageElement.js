import React, {useState} from 'react';
import GLTFrender from "./GLTFrender";

const SinglePageElement = (props) => {
    return (
        <div>
            <div className={"mt-6 ml-2 font-bold"}>
                MODEL ELEMENTS
            </div>
            {
                props.userDB.map((data, index) => {
                    return (
                        <div key={index}>

                            {
                                props.userNum === index
                                    ?
                                    <div>
                                        <div className={"mt-2"}>
                                            {
                                                data.paramA.map((dataNew, index) => {
                                                    let classBut = ["hover:bg-gray-300 text-gray-400 font-semibold mx-2 my-0.5 py-2 px-4 border border-gray-600 rounded shadow"]
                                                    if (props.butA === index) {
                                                        classBut.push("bg-gray-500 text-white")
                                                    } else {
                                                        classBut.push("bg-opacity ")
                                                    }
                                                    return (
                                                        <div key={index}>
                                                            <button
                                                                onClick={() => props.setButA(index)}
                                                                className={classBut.join(' ')}
                                                                key={index}
                                                            >
                                                                {dataNew}
                                                            </button>
                                                        </div>
                                                    )
                                                })
                                            }
                                        </div>
                                        <div className={"mt-2"}>
                                            {
                                                data.paramB.map((dataNew, index) => {
                                                    let classBut = ["hover:bg-gray-300 text-gray-400 font-semibold mx-2 my-0.5 py-2 px-4 border border-gray-600 rounded shadow"]
                                                    if (props.butB === index) {
                                                        classBut.push("bg-gray-500 text-white")
                                                    } else {
                                                        classBut.push("bg-opacity ")
                                                    }
                                                    return (
                                                        <div key={index}>
                                                            <button
                                                                onClick={() => props.setButB(index)}
                                                                className={classBut.join(' ')}
                                                                key={index}
                                                            >
                                                                {dataNew}
                                                            </button>
                                                        </div>
                                                    )
                                                })
                                            }
                                        </div>
                                        <div className={"mt-2"}>
                                            {
                                                data.paramC.map((dataNew, index) => {
                                                    let classBut = ["hover:bg-gray-300 text-gray-400 font-semibold mx-2 my-0.5 py-2 px-4 border border-gray-600 rounded shadow"]
                                                    if (props.butC === index) {
                                                        classBut.push("bg-gray-500 text-white")
                                                    } else {
                                                        classBut.push("bg-opacity ")
                                                    }
                                                    return (
                                                        <div key={index}>
                                                            <button
                                                                onClick={() => props.setButC(index)}
                                                                className={classBut.join(' ')}
                                                                key={index}
                                                            >
                                                                {dataNew}
                                                            </button>
                                                        </div>
                                                    )
                                                })
                                            }
                                        </div>
                                    </div>
                                    :
                                    <></>
                            }
                        </div>
                    )
                })}
            <GLTFrender
                userNum={props.userNum}
                userDB={props.userDB}
                path={props.path}
                butA={props.butA}
                butB={props.butB}
                butC={props.butC}
            />
            <div>
            </div>
        </div>
    );
};

export default SinglePageElement;