import {v1} from 'uuid'
import {Link, useNavigate} from "react-router-dom"
import PanelElementsTailwindMax from "./PanelElementsTailwindMAX.jsx"
import {useContext, useState} from "react";
import {AuthContext} from "../../../context/AuthContext"

const PanelProjectsTailwind = () => {
    const [menuOpenedTwo, setMenuOpenedTwo] = useState(true)
    const {
        userId,
        logoName,
        allProjects,
        setAllProjects,
        idProject,
        setIdProject,
        arrNew,
        setArrNew
    } = useContext(AuthContext)
    const Navigator = useNavigate()
    const onChangeHandle = (idCurrentProject) => {
        setIdProject(idCurrentProject)
        setAllProjects(allProjects.map(t => t.id === idCurrentProject ? {...t, check: true} : {...t, check: false}))
    }
    const onClickHome = () => {
        setIdProject(false)
        Navigator('/')
    }

    const radioProjects =
        <div
            className="flex flex-col items-start backdrop-blur-sm bg-white/30 w-44 h-32 rounded-3xl p-3 mt-1">
            {
                allProjects.map((t, index) => {
                    return (
                        <div
                            className="w-48 text-sm font-medium text-gray-900 cursor-pointer h-6"
                            key={v1()}
                        >
                            <span
                                className={t.check === true ? "bg-amber-400" : ""}
                                onClick={e => onChangeHandle(t.id)}
                            >
                                {t.nameProject}
                            </span>
                        </div>
                    )
                })
            }
        </div>

    return (
        <>
            <button
                onClick={() => setMenuOpenedTwo(!menuOpenedTwo)}
                className=" z-20 fixed top-4 right-12 p-3 backdrop-blur-sm bg-white/30 w-11 h-11 rounded-md"
            >
                <div
                    className={`bg-blue-600 h-0.5 rounded-md w-full transition-all ${
                        menuOpenedTwo ? "rotate-45  translate-y-0.5" : ""
                    }`}
                />
                <div
                    className={`bg-blue-600 h-0.5 rounded-md w-full my-1 ${
                        menuOpenedTwo ? "hidden" : ""
                    }`}
                />
                <div
                    className={`bg-blue-600 h-0.5 rounded-md w-full transition-all ${
                        menuOpenedTwo ? "-rotate-45" : ""
                    }`}
                />
            </button>
            <div className={`fixed -right-5  top-16 flex flex-col items-center flex-wrap ${menuOpenedTwo ? "w-80" : "w-0"}`}>
                <div
                    className='cursor-pointer font-bold top-1 right-1 flex flex-col items-start backdrop-blur-sm bg-white/30 w-44 h-10 rounded-3xl pl-3 pt-2'
                    onClick={onClickHome}
                >
                    HOME
                </div>

                {logoName === "kinki" &&
                    (
                        <div
                            className='cursor-pointer top-1 right-1 flex flex-col items-start backdrop-blur-sm bg-white/30 w-44 h-10 rounded-3xl pl-3 pt-2 mt-1'
                        >
                            <Link to={"/renderskinki"}>
                                plan renders
                            </Link>
                        </div>
                    )
                }

                {logoName === "jovanova" &&
                    (
                        <div
                            className='cursor-pointer top-1 right-1 flex flex-col items-start backdrop-blur-sm bg-white/30 w-44 h-10 rounded-3xl pl-3 pt-2 mt-1'
                        >
                            <Link to={"/renderjovanova"}>
                                plan & renders
                            </Link>
                        </div>
                    )
                }

                {logoName === "desk" &&
                    (
                        <div
                            className='cursor-pointer top-1 right-1 flex flex-col items-start backdrop-blur-sm bg-white/30 w-44 h-10 rounded-3xl pl-3 pt-2 mt-1'
                        >
                            <Link to={"/renderdesk"}>
                                plan & renders
                            </Link>
                        </div>
                    )
                }

                {logoName === "konst" &&
                    (
                        <div
                            className='cursor-pointer top-1 right-1 flex flex-col items-start backdrop-blur-sm bg-white/30 w-44 h-10 rounded-3xl pl-3 pt-2 mt-1'
                        >
                            <Link to={"/renderskonst"}>
                                renders
                            </Link>
                        </div>
                    )
                }

                {logoName === "railing" &&
                    (
                        <div
                            className='cursor-pointer top-1 right-1 flex flex-col items-start backdrop-blur-sm bg-white/30 w-44 h-10 rounded-3xl pl-3 pt-2 mt-1'
                        >
                            <Link to={"/railing"}>
                                renders
                            </Link>
                        </div>
                    )
                }

                {radioProjects}
                {idProject && <PanelElementsTailwindMax/>}

            </div>
        </>
    )
}

export default PanelProjectsTailwind;