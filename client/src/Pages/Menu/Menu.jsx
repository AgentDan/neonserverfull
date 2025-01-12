import {useContext} from "react"
import {Link} from "react-router-dom"
import {AuthContext} from "../../context/AuthContext"
import {useNavigate} from "react-router-dom"

export const Menu = (props) => {
    const {menuOpened, setMenuOpened, isLogin, logoName} = props
    const navigate = useNavigate()
    const {logout} = useContext(AuthContext)
    const logOutHandler = () => {
        if (logout) logout()
        navigate('/')
    }

    return (
        <>
            <button
                onClick={() => setMenuOpened(!menuOpened)}
                className=" z-20 fixed top-12 right-12 p-3 backdrop-blur-sm bg-white/30 w-11 h-11 rounded-md"
            >
                <div
                    className={`bg-blue-600 h-0.5 rounded-md w-full transition-all ${
                        menuOpened ? "rotate-45  translate-y-0.5" : ""
                    }`}
                />
                <div
                    className={`bg-blue-600 h-0.5 rounded-md w-full my-1 ${
                        menuOpened ? "hidden" : ""
                    }`}
                />
                <div
                    className={`bg-blue-600 h-0.5 rounded-md w-full transition-all ${
                        menuOpened ? "-rotate-45" : ""
                    }`}
                />
            </button>
            <div
                className={`z-10 fixed top-0 right-0 bottom-0 backdrop-blur-sm transition-all overflow-hidden flex flex-col ${menuOpened ? "w-80" : "w-0"}`}
            >
                <div className="flex items-center justify-start flex-col gap-6 p-8 font-bold text-black">
                    {!isLogin &&
                        (<div className={'h-6 w-auto cursor-pointer mt-28'}>
                            <Link to={"/login"}>
                                LogIn
                            </Link>
                        </div>)
                    }
                    {isLogin &&
                        (<div
                            className={'h-6 w-auto cursor-pointer mt-28'}
                            onClick={logOutHandler}>
                            LogOut
                            ({logoName})
                        </div>)
                    }
                    {isLogin &&
                        <div className={'h-6 w-auto cursor-pointer '}>
                            <Link to={"/projects"}>
                                PROJECTS
                            </Link>
                        </div>
                    }
                </div>
            </div>
        </>
    )
}
