import {Environment, OrbitControls, Scroll, ScrollControls} from "@react-three/drei"
import './KinkiOne.css'
import KinkiModelOne from "./KinkiModelOne.jsx"

function KinkiOne () {
    return (
        <>
            <Environment preset='warehouse'/>

            <ScrollControls pages={5} damping={0.2}>

                <KinkiModelOne/>
                <color attach="background" args={["#000000"]}/>

                <Scroll html style={{width: '100%'}}>
                    <h1 style={{
                        color: '#87CEEB',
                        position: 'absolute',
                        top: `65vh`,
                        left: '50%',
                        fontSize: '4em',
                        transform: `translate(-50%,-50%)`
                    }}>
                        Welcome
                    </h1>

                    <div style={{position: 'absolute', top: `132vh`}}>
                        <h1 style={{
                            color: '#87CEEB',
                            position: 'absolute',
                            top: `65vh`,
                            left: '50%',
                            fontSize: '4em',
                            transform: `translate(-50%,-50%)`
                        }}>
                            Добродошли
                        </h1>

                    </div>

                    <div style={{position: 'absolute', top: `264vh`}}>
                        <h1 style={{
                            color: '#87CEEB',
                            position: 'absolute',
                            top: `65vh`,
                            left: '50%',
                            fontSize: '4em',
                            transform: `translate(-50%,-50%)`
                        }}>
                            Добро пожаловать
                        </h1>
                    </div>

                </Scroll>
            </ScrollControls>
        </>
    )
}

export default KinkiOne