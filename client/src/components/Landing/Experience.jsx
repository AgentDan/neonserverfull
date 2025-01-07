import React from 'react';
import {ScrollControls} from "@react-three/drei";
import Overlay from "./Overlay.jsx";
import Bubble from "./Bubble.jsx";
import {Canvas} from "@react-three/fiber";

const Experience = () => {

    return (
        <>
            <div className="bg-black">
                <Canvas shadows camera={{position: [5, 5, 5], fov: 50, far: 50000}}>
                    <ScrollControls pages={10} damping={0.2}>
                        <Overlay/>
                        <Bubble/>
                    </ScrollControls>
                </Canvas>
            </div>
        </>
    );
};

export default Experience;