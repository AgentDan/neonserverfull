import React, {useLayoutEffect, useRef, useState} from 'react';
import {useFrame} from "@react-three/fiber";
import gsap from "gsap";
import {useGLTF, useScroll, PerspectiveCamera} from "@react-three/drei";

const Four = () => {
    const tl = useRef()
    const cubeRef = useRef()
    const cube2Ref = useRef()
    const tableRef = useRef()
    const legneonRef = useRef()
    const tableFonRef = useRef()
    const deskNeonRef = useRef()
    const roomEnv = useRef()
    const pointLightRef = useRef()
    const spotLightRef = useRef()
    const sceneRef = useRef()
    const cameraRef = useRef()
    const rackRef = useRef()
    const windowRef = useRef()

    const scroll = useScroll()
    const {nodes, materials} = useGLTF("./assets/models/room.glb")

    useFrame(() => {
        tl.current.seek(scroll.offset * tl.current.duration())

        if (spotLightRef.current && tableRef.current) {
            spotLightRef.current.target = tableRef.current
        }

        if (cameraRef.current) {
            cameraRef.current.lookAt(-2, 2.1, 0);
        }
    })

    useLayoutEffect(() => {
        tl.current = gsap.timeline({defaults: {duration: 2, ease: "power1.inOut"}});

        tl.current
            .to(cameraRef.current.position, {x: 1.2, y: 2.2, z: 1.7}, 0)
            .to(tableRef.current.children[0].material, {opacity: 0}, 0)
            .to(tableRef.current.children[3].material, {opacity: 0}, 0)
            .to(tableRef.current.children[4].material, {opacity: 0}, 0)
            .to(windowRef.current.children[0].material, {opacity: 0}, 0)
            .to(windowRef.current.children[0].material, {visible: 0}, 0)

            .to(legneonRef.current.children[0].material, {opacity: 1}, 1)
            .to(deskNeonRef.current.children[0].material, {opacity: 1}, 1)
            .to(legneonRef.current.children[0].material, {visible: 1}, 1.5)
            .to(deskNeonRef.current.children[0].material, {visible: 1}, 1.5)

            .to(cameraRef.current.position, {x: 1.2, y: 2.2, z: 1.2}, 4)

            .to(cameraRef.current.position, {x: 1.2, y: 2.2, z: -1.8}, 8)

            .to(deskNeonRef.current.children[0].material, {visible: 0}, 10.5)

            .to(legneonRef.current.children[0].material, {opacity: 0}, 12)
            .to(windowRef.current.children[0].material, {opacity: 1}, 12)
            .to(windowRef.current.children[0].material, {visible: 1}, 12)
            .to(cameraRef.current.position, {x: 4, y: 3.2, z: 0}, 12)
            .to(tableRef.current.children[0].material, {opacity: 1}, 12)
            .to(sceneRef.current.rotation, {y: Math.PI / 2}, 12)
            .to(deskNeonRef.current.children[0].material, {opacity: 0}, 12)
            .to(tableRef.current.children[4].material, {opacity: 1}, 12)

            .to(rackRef.current.children[3].material, {visible: false}, 13)

            .to(sceneRef.current.position, {x: 7, y: -2, z: 3}, 14)
            .to(rackRef.current.children[0].material, {opacity: 1}, 14)
            .to(rackRef.current.children[1].material, {opacity: 1}, 14)
            .to(rackRef.current.children[2].material, {opacity: 1}, 14)
            .to(rackRef.current.children[3].material, {opacity: 0}, 14)

            .to(cameraRef.current.position, {x: 4, y: 1.2, z: 0}, 17)

            .to(sceneRef.current.position, {x: -4, y: -2, z: 0.5}, 20)
            .to(sceneRef.current.rotation, {y: -Math.PI / 6}, 20)

        return () => {
            tl.current?.kill(); // Уничтожаем таймлайн при размонтировании
        };

    }, []);

    return (
        <>
            <PerspectiveCamera
                ref={cameraRef} // Реф для камеры
                rotation={[0, Math.PI / 2, 0]}
                position={[6, 3, 0]} // Начальная позиция камеры
                fov={75} // Поле зрения камеры
                near={0.1}
                far={1000}
                makeDefault
            />

            <group ref={sceneRef}>

                <group ref={rackRef}>
                    <mesh
                        geometry={nodes.rack.geometry}
                        material={materials.rack}
                        scale={[0.3, 0.3, 0.3]}
                        castShadow
                        receiveShadow
                        material-opacity={0}
                        material-transparent={true}
                    >
                    </mesh>
                    <mesh
                        geometry={nodes.rackButton.geometry}
                        material={materials.rackButton}
                        scale={[0.3, 0.3, 0.3]}
                        castShadow
                        receiveShadow
                        material-opacity={0}
                        material-transparent={true}
                    >
                    </mesh>
                    <mesh
                        geometry={nodes.rackLight.geometry}
                        material={materials.rackLight}
                        scale={[0.3, 0.3, 0.3]}
                        castShadow
                        receiveShadow
                        material-opacity={0}
                        material-transparent={true}
                    >
                        <meshStandardMaterial
                            opacity={0}
                            transparent={true}
                            color="white"
                            emissive="white"
                            emissiveIntensity={1}
                            toneMapped={false}
                        />
                    </mesh>
                    <mesh
                        geometry={nodes.rackNeon.geometry}
                        material={materials.rackNeon}
                        scale={[0.3, 0.3, 0.3]}
                    >
                        <meshStandardMaterial
                            opacity={1}
                            transparent={true}
                            color="aqua"
                            emissive="aqua"
                            emissiveIntensity={1}
                            toneMapped={false}
                        />
                    </mesh>
                </group>

                <group ref={tableRef}>
                    <mesh
                        geometry={nodes.desk.geometry}
                        material={materials.desk}
                        scale={[0.3, 0.3, 0.3]}
                        castShadow
                        receiveShadow
                        material-opacity={1}
                        material-transparent={true}
                    >
                    </mesh>
                    <mesh
                        geometry={nodes.panel.geometry}
                        material={materials.panel}
                        scale={[0.3, 0.3, 0.3]}
                    >
                    </mesh>
                    <mesh
                        geometry={nodes.usb.geometry}
                        material={materials.usb}
                        scale={[0.3, 0.3, 0.3]}
                    >
                    </mesh>
                    <mesh
                        geometry={nodes.button.geometry}
                        material={materials.button}
                        scale={[0.3, 0.3, 0.3]}
                    >
                    </mesh>
                    <mesh
                        geometry={nodes.leg.geometry}
                        material={materials.leg}
                        scale={[0.3, 0.3, 0.3]}
                        castShadow
                        receiveShadow
                        material-opacity={1}
                        material-transparent={true}
                    >
                    </mesh>
                </group>
                <group ref={deskNeonRef}>
                    <mesh
                        geometry={nodes.deskNeon.geometry}
                        scale={[0.3, 0.3, 0.3]}
                    >
                        <meshStandardMaterial
                            opacity={0}
                            visible={0}
                            transparent={true}
                            color="aqua"
                            emissive="aqua"
                            emissiveIntensity={1}
                            toneMapped={false}
                        />
                    </mesh>
                </group>
                <group ref={legneonRef}>
                    <mesh
                        geometry={nodes.legNeon.geometry}
                        scale={[0.3, 0.3, 0.3]}
                    >
                        <meshStandardMaterial
                            opacity={0}
                            visible={0}
                            transparent={true}
                            color="aqua"
                            emissive="aqua"
                            emissiveIntensity={1}
                            toneMapped={false}
                        />
                    </mesh>
                </group>
                <group ref={roomEnv}>
                    <mesh
                        geometry={nodes.roomEnv.geometry}
                        scale={[0.3, 0.3, 0.3]}
                    >
                        <meshStandardMaterial
                            opacity={1}
                            transparent={true}
                            color="aqua"
                            emissive="aqua"
                            emissiveIntensity={0.1}
                            toneMapped={false}
                        />
                    </mesh>
                </group>
                <group ref={windowRef}>
                    <mesh
                        geometry={nodes.windowNeon.geometry}
                        scale={[0.3, 0.3, 0.3]}
                    >
                        <meshStandardMaterial
                            opacity={1}
                            visible={true}
                            transparent={true}
                            color="white"
                            emissive="white"
                            emissiveIntensity={1}
                            toneMapped={false}
                        />
                    </mesh>
                </group>

                <spotLight
                    ref={spotLightRef}
                    position={[4, 9, -0.7]}
                    angle={0.23}
                    penumbra={0.8}
                    intensity={500}
                    castShadow
                    shadow-mapSize-width={1024}
                    shadow-mapSize-height={1024}
                    shadow-bias={-0.0001}
                >
                </spotLight>

                <pointLight
                    visible={true}
                    ref={pointLightRef}
                    position={[1, -2, -1]}
                    castShadow={true}
                    intensity={1}
                    power={1500}
                    shadow-mapSize-width={1024}
                    shadow-mapSize-height={1024}
                    shadow-bias={-0.005}
                />

                <pointLight
                    visible={true}
                    ref={pointLightRef}
                    position={[4, -2, -1]}
                    castShadow={true}
                    intensity={1}
                    power={1500}
                    shadow-mapSize-width={1024}
                    shadow-mapSize-height={1024}
                    shadow-bias={-0.005}
                />

                <pointLight
                    visible={true}
                    position={[3.6, 4, -6]}
                    castShadow={true}
                    intensity={0.8}
                    power={100}
                    shadow-mapSize-width={1024}
                    shadow-mapSize-height={1024}
                    shadow-bias={-0.005}
                />

            </group>
        </>
    );
};

export default Four;