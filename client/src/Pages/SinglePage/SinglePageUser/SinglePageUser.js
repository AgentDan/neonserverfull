import React, {useState, useContext} from 'react'
import SinglePageElement from "./SinglePageElement"
import {AuthContext} from "../../../context/AuthContext"

const SinglePageUser = (props) => {
    const [userNum, setUserNum] = useState(99)
    const [path, setPath] = useState("bebrik.glb")
    const {logoName} = useContext(AuthContext)
    const {logout} = useContext(AuthContext)
    const [butA, setButA] = useState(0)
    const [butB, setButB] = useState(0)
    const [butC, setButC] = useState(0)

    const pressButton = (num, data) => {
        setPath(data.img)
        setUserNum(num)
        setButA(0)
        setButB(0)
        setButC(0)
    }
    return (
        <div className={"bg-gradient-to-r from-gray-100 to-gray-400 h-screen"}>
            <div className={"pt-6 ml-2 font-bold"}>
                USER NAME
            </div>
            <div className={"ml-2 font-thin"}>
                {logoName}
            </div>
            <button onClick={logout} className={"ml-2 font-thin font-bold"}>
                EXIT
            </button>
            <div className={"mt-6 ml-2 font-bold"}>
                PROJECT NAME
            </div>
            <div className={"mt-2"}>
                {
                    props.userDB.map((data, index) => {
                        let classBut = ["hover:bg-gray-300 text-gray-400 font-semibold mx-2 my-0.5 py-2 px-4 border border-gray-600 rounded shadow"]
                        if (userNum === index) {
                            classBut.push("bg-gray-500 text-white")
                        } else {
                            classBut.push("bg-opacity ")
                        }
                        return (
                            <div key={index}>
                                <button
                                    className={classBut.join(' ')}
                                    key={index}
                                    onClick={() => pressButton(index, data)}
                                >
                                    {data.title}
                                </button>
                            </div>
                        )
                    })
                }
            </div>
            <SinglePageElement
                setButA={setButA}
                setButB={setButB}
                setButC={setButC}
                butA={butA}
                butB={butB}
                butC={butC}
                userNum={userNum}
                userDB={props.userDB}
                path={path}
            />
        </div>
    )
}

export default SinglePageUser;