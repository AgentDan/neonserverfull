import {OrbitControls, Stage} from "@react-three/drei"
import {Render} from "./render/Render.jsx"

export const Experience = () => {
    return (
        <>
            <Stage
                intensity={0.2}
                environment="city"
                shadows={{
                    // type: "accumulative",
                    color: "#d9afd9",
                    colorBlend: 1,
                    opacity: 1,
                }}
                adjustCamera={1.5}
            >
                <Render/>
            </Stage>
            <OrbitControls
                makeDefault
                minPolarAngle={0}
                maxPolarAngle={Math.PI / 2}
            />
        </>
    )
}