import React from 'react';
import {OrbitControls} from "@react-three/drei";

const Box = () => {
    console.log("BOX : ")
    return (
        <>
            <mesh>
                <OrbitControls autoRotate={true} autoRotateSpeed={100}/>
                <boxGeometry attach="geometry" args={[0.1, 0.1, 4]}/>
                <meshStandardMaterial attach="material" color="orange"/>
            </mesh>
        </>
    )
}

export default Box;