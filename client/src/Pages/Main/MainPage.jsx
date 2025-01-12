import './MainPage.css'
import {Menu} from "../Menu/Menu.jsx"
import {useState} from "react"
import ProjectZero from "./ProjectZero/ProjectZero";

const MainPage = ({isLogin, logoName}) => {
    const [menuOpened, setMenuOpened] = useState(false)

    return (
        <>
            <ProjectZero/>
            {/*<Canvas camera={{fov: 54, position: [5, 0, 1]}}>*/}
                {/*<ProjectOne/>*/}
            {/*</Canvas>*/}
            <Menu
                menuOpened={menuOpened}
                setMenuOpened={setMenuOpened}
                isLogin={isLogin}
                logoName={logoName}
            />
        </>
    )
}

export default MainPage