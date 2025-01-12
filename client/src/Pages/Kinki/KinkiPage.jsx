import './KinkiPage.css'
import {Canvas} from "@react-three/fiber"
import KinkiOne from "./ProjectOne/KinkiOne.jsx"
import {Menu} from "../Menu/Menu.jsx"
import {useState} from "react"

const KinkiPage = () => {
    const [menuOpened, setMenuOpened] = useState(false)
    console.log("HELLO")

    return (
        <>
            {/*<Canvas camera={{fov: 54, position: [5, 0, 1]}}>*/}
                <KinkiOne/>
            {/*</Canvas>*/}
        </>
    )
}

export default KinkiPage