import React, {Suspense} from 'react';
import {Environment, Float, OrbitControls, useGLTF, Wireframe} from "@react-three/drei";
import {Canvas} from "@react-three/fiber";
import {Spin} from "antd";

const Model = ({currentElement, current}) => {
    const {nodes, materials} = useGLTF(`./models/${current.folder}/${current.file}.glb`)
    return (
        <>
                <Suspense fallback={
                    <div className="content-center text-center h-96">
                        <Spin size="large"/>
                    </div>}
                >
                    <Canvas camera={{fov: 14}}>
                        <Float
                            speed={1}
                            rotationIntensity={1}
                            floatIntensity={0.2}
                        >
                            <group scale={current.scale} rotation-y={2}>
                                {currentElement !== "Complete" &&
                                    < Wireframe
                                        geometry={nodes[current.file + "Wireframe"].geometry}
                                        fill={"white"}
                                        fillOpacity={0.15}
                                        stroke={"#ffffff"}
                                        strokeOpacity={1}
                                        thickness={0.01}
                                    />
                                }
                                {current.elements.map((t) => {
                                        return (
                                            <>
                                                {(currentElement === t.name && currentElement !== "Complete") &&
                                                    <mesh
                                                        geometry={nodes[current.file + currentElement].geometry}
                                                        material={materials[current.file + currentElement]}
                                                    />
                                                }
                                                {currentElement === "Complete" &&
                                                    <mesh
                                                        geometry={nodes[current.file + t.name].geometry}
                                                        material={materials[current.file + t.name]}
                                                    />
                                                }
                                            </>
                                        )
                                    }
                                )
                                }
                            </group>
                            <OrbitControls
                                maxPolarAngle={1.4}
                                minPolarAngle={1.2}
                                minAzimuthAngle={-1}
                                maxAzimuthAngle={1}
                                enableZoom={false}
                            />
                            <Environment preset={"warehouse"}/>
                        </Float>
                    </Canvas>
                </Suspense>
        </>
    )
        ;
};

export default Model;