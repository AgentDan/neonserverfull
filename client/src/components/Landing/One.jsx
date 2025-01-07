import {Suspense, useMemo, useRef, forwardRef, useState, useLayoutEffect, useEffect} from 'react';
import {Box, Float, Html, PerspectiveCamera, useGLTF, useProgress, useScroll} from "@react-three/drei";
import * as THREE from "three";
import {useFrame} from "@react-three/fiber";
import {Vector3} from "three";
import gsap from "gsap";

const LINE_NB_POINTS = 24000;

const MovingTarget = forwardRef((props, ref) => {
    // Анимация цели (движение по кругу)
    useFrame(({clock}) => {
        const t = clock.getElapsedTime();
        if (ref.current) {
            ref.current.position.set(100 + Math.sin(-t) * 10, -170, -300 + Math.cos(t) * 30);
        }
    });
    return (
        <mesh ref={ref} visible={true}>
            <sphereGeometry args={[0.2, 32, 32]}/>
            <meshStandardMaterial color="red"/>
        </mesh>
    );
});

const MovingTarget2 = forwardRef((props, ref) => {
    // Анимация цели (движение по кругу)
    useFrame(({clock}) => {
        const t = clock.getElapsedTime();
        if (ref.current) {
            ref.current.position.set(1 + Math.sin(-t) * 20, -40, -800 + Math.cos(t) * -55);
        }
    });
    return (
        <mesh ref={ref} visible={true}>
            <sphereGeometry args={[0.2, 32, 32]}/>
            <meshStandardMaterial color="red"/>
        </mesh>
    );
});

const MovingTarget3 = forwardRef((props, ref) => {
    // Анимация цели (движение по кругу)
    useFrame(({clock}) => {
        const t = clock.getElapsedTime();
        if (ref.current) {
            ref.current.position.set(1 + Math.sin(-t) * 60, -40, -2150 + Math.cos(t) * -55);
        }
    });
    return (
        <mesh ref={ref} visible={true}>
            <sphereGeometry args={[0.2, 32, 32]}/>
            <meshStandardMaterial color="red"/>
        </mesh>
    );
});

const MovingTarget4 = forwardRef((props, ref) => {
    // Анимация цели (движение по кругу)
    useFrame(({clock}) => {
        const t = clock.getElapsedTime();
        if (ref.current) {
            ref.current.position.set(1 + Math.sin(-t) * 20, -40, -1950 + Math.cos(t) * 55);
        }
    });
    return (
        <mesh ref={ref} visible={true}>
            <sphereGeometry args={[0.2, 32, 32]}/>
            <meshStandardMaterial color="red"/>
        </mesh>
    );
});

const One = () => {
    const [lightOne, setLightOne] = useState()
    const scroll = useScroll()
    const tl = useRef()
    const tableRef = useRef()
    const spotRef = useRef()
    const boxRefTwo = useRef()
    const neonRef = useRef()
    const page4Ref = useRef()
    const page5video1 = useRef()
    const page5video2 = useRef()

    const spotlightRef = useRef();
    const spotlightRef2 = useRef();
    const spotlightRef3 = useRef();
    const spotlightRef4 = useRef();

    const targetRef = useRef();
    const targetRef2 = useRef();
    const targetRef3 = useRef();
    const targetRef4 = useRef();

    const Loader = () => {
        const {progress} = useProgress()
        return <Html>{Math.floor(progress)}% Loaded ...</Html>
    }

    const {nodes, materials} = useGLTF("./assets/models/table.glb");
    const cameraGroup = useRef()
    const boxRef = useRef()
    const curve = useMemo(() => {
        return new THREE.CatmullRomCurve3(
            [
                new THREE.Vector3(0, 0, 0),
                new THREE.Vector3(50, -100, -110),
                new THREE.Vector3(50, -100, -200),
                new THREE.Vector3(100, -150, -300),
                new THREE.Vector3(150, -200, -400),
                new THREE.Vector3(200, -100, -500),
                new THREE.Vector3(215, -100, -600),
                new THREE.Vector3(0, 0, -700),
                new THREE.Vector3(0, 0, -800),
                new THREE.Vector3(-100, 0, -900),
                new THREE.Vector3(-150, 0, -1000),
                new THREE.Vector3(-200, 10, -1110),
                new THREE.Vector3(-100, 100, -1220),
                new THREE.Vector3(-100, 100, -1330),
                new THREE.Vector3(-50, 100, -1440),
                new THREE.Vector3(-250, 10, -1550),
                new THREE.Vector3(-250, 120, -1660),
                new THREE.Vector3(-20, 50, -1770),
                new THREE.Vector3(20, -10, -1880),
                new THREE.Vector3(100, 0, -1990),
                new THREE.Vector3(200, 0, -2100),
                new THREE.Vector3(300, 0, -2200),
            ],
            false,
            "catmullrom",
            0.5
        );
    }, []);

    const linePoints = useMemo(() => {
        return curve.getPoints(LINE_NB_POINTS);
    }, [curve]);

    const shape = useMemo(() => {
        const shape = new THREE.Shape();
        shape.moveTo(0, -0.2);
        shape.lineTo(0, 0.2);
        return shape;
    }, [curve]);

    useFrame((_state, delta) => {

        const curPointIndex = Math.min(
            Math.round(scroll.offset * linePoints.length),
            linePoints.length - 1
        )

        let boxPointIndex
        if (curPointIndex < 23000) {
            boxPointIndex = curPointIndex + 1000
        } else {
            boxPointIndex = 24000
        }
        const boxIndex = linePoints[boxPointIndex]
        const curPoint = linePoints[curPointIndex]
        setLightOne(curPointIndex)

        cameraGroup.current.position.lerp(curPoint, delta * 24);

        boxRef.current.position.x = boxIndex.x
        boxRef.current.position.y = boxIndex.y
        boxRef.current.position.z = boxIndex.z

        const vec = new Vector3(boxIndex.x, boxIndex.y, boxIndex.z)

        cameraGroup.current.lookAt(vec);

        if (spotlightRef.current && targetRef.current) {
            spotlightRef.current.target = targetRef.current;
            spotlightRef.current.target.updateMatrixWorld(); // Обновляем матрицу для корректной привязки
        }
        if (spotlightRef2.current && targetRef2.current) {
            spotlightRef2.current.target = targetRef2.current;
            spotlightRef2.current.target.updateMatrixWorld(); // Обновляем матрицу для корректной привязки
        }
        if (spotlightRef3.current && targetRef3.current) {
            spotlightRef3.current.target = targetRef3.current;
            spotlightRef3.current.target.updateMatrixWorld(); // Обновляем матрицу для корректной привязки
        }
        if (spotlightRef4.current && targetRef4.current) {
            spotlightRef4.current.target = targetRef4.current;
            spotlightRef4.current.target.updateMatrixWorld(); // Обновляем матрицу для корректной привязки
        }

        tl.current.seek(scroll.offset * tl.current.duration())
    })

    useLayoutEffect(() => {
        page4Ref.current = document.getElementById("page4")
        page5video1.current = document.getElementById("page5video1")
        page5video2.current = document.getElementById("page5video2")
        let mm = gsap.matchMedia();

        mm.add({
            isDesktop: `(min-width: 48em)`,
            isMobile: `(max-width: 48em`,

        }, (context) => {

            let {isDesktop, isMobile} = context.conditions;

            // Создаем таймлайн
            tl.current = gsap.timeline({defaults: {duration: 2, ease: "power1.inOut"}});

            // Добавляем анимации
            tl.current
                .to(page4Ref.current, {fontSize: isMobile ? "300%" : "100%"}, 0)
                .to(page5video1.current, {hidden: isMobile ? true : false}, 0)
                .to(page5video2.current, {hidden: isDesktop ? true : false }, 0)
                .to(page4Ref.current, { transform: isMobile ? "translateX(-630%)" : "translateX(-150%)"}, 13)
                .to(page4Ref.current, { transform: "translateX(-150%)", scrollTrigger: {pin: true}}, 13)
                .to(neonRef.current, {visible: false}, 3.8) // Прозрачность материала
                .to(neonRef.current.children[0].material, {opacity: 0}, 4.3) // Прозрачность материала
                .to(tableRef.current.children[0].material, {opacity: 1}, 4) // Прозрачность материала
                .to(neonRef.current.children[0].material, {opacity: 1}, 40) // Прозрачность материала

            return () => {
                tl.current?.kill(); // Уничтожаем таймлайн при размонтировании
            };

        });
        console.log(page4Ref.current)

    }, []);

    return (
        <>
            {/*<spotLight*/}
            {/*    ref={spotlightRef}*/}
            {/*    position={[100, -140, -300]}*/}
            {/*    angle={0.9}*/}
            {/*    penumbra={0.8}*/}
            {/*    intensity={1000}*/}
            {/*/>*/}
            {/*<spotLight*/}
            {/*    ref={spotlightRef2}*/}
            {/*    position={[1, 10, -800]}*/}
            {/*    angle={0.9}*/}
            {/*    penumbra={0.8}*/}
            {/*    intensity={1000}*/}
            {/*    castShadow*/}
            {/*    shadow-mapSize-width={1024}*/}
            {/*    shadow-mapSize-height={1024}*/}
            {/*    shadow-bias={-0.0001}*/}
            {/*/>*/}
            {/*<spotLight*/}
            {/*    ref={spotlightRef3}*/}
            {/*    position={[10, 10, -2150]}*/}
            {/*    angle={0.9}*/}
            {/*    penumbra={0.8}*/}
            {/*    intensity={1000000}*/}
            {/*    castShadow*/}
            {/*    shadow-mapSize-width={1024}*/}
            {/*    shadow-mapSize-height={1024}*/}
            {/*    shadow-bias={-0.0001}*/}
            {/*/>*/}
            {/*<spotLight*/}
            {/*    ref={spotlightRef4}*/}
            {/*    position={[10, 10, -1900]}*/}
            {/*    angle={0.9}*/}
            {/*    penumbra={0.8}*/}
            {/*    intensity={1000000}*/}
            {/*    castShadow*/}
            {/*    shadow-mapSize-width={1024}*/}
            {/*    shadow-mapSize-height={1024}*/}
            {/*    shadow-bias={-0.0001}*/}
            {/*/>*/}
            {/*<spotLight*/}
            {/*    ref={spotRef}*/}
            {/*    position={[100, -138, -300]}*/}
            {/*    angle={0.9}*/}
            {/*    penumbra={0.9}*/}
            {/*    intensity={1000}*/}
            {/*/>*/}

            <MovingTarget ref={targetRef}/>
            <MovingTarget2 ref={targetRef2}/>
            <MovingTarget3 ref={targetRef3}/>
            <MovingTarget4 ref={targetRef4}/>

            <Suspense fallback={<Loader/>}>
                <group ref={cameraGroup}>
                    <PerspectiveCamera rotation-y={Math.PI} position={[0, 1.4, -15]} fov={30} makeDefault/>
                    <group scale={[0.5, 0.5, 0.5]} position={[0, 1, -3]}>
                        <Float floatIntensity={9} speed={7}>
                            {/*<mesh geometry={nodes.cube.geometry} material={materials["material"]}/>*/}
                        </Float>
                    </group>
                </group>
                <Box ref={boxRef} position={[0, 0, -10]} visible={false}>
                    <meshStandardMaterial color="red"/>
                </Box>
                <group ref={tableRef} position={[103, -136, -300]} rotation-y={Math.PI / 2}>
                    <mesh
                        geometry={nodes.table.geometry}
                        material={materials.three}
                        position={[-9, -6, -4]}
                        castShadow
                        receiveShadow
                        material-opacity={0}
                        material-transparent={true}
                    >
                    </mesh>
                </group>

                <group ref={neonRef} position={[103, -136, -300]} rotation-y={Math.PI / 2} visible={true}>
                    <mesh
                        geometry={nodes.neon.geometry}
                        position={[-9, -6, -4]}
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

                <group position={[103, -136, -300]} rotation-y={Math.PI / 2}>
                    <mesh
                        geometry={nodes.usb.geometry}
                        material={materials.usb}
                        position={[-9, -6, -4]}
                        castShadow
                        receiveShadow
                    >
                    </mesh>
                </group>

                {/*<group position={[11, 2, -42]} rotation-y={Math.PI / 2}>*/}
                {/*    <mesh*/}
                {/*        geometry={nodes.car2.geometry}*/}
                {/*        position={[-9, -6, -4]}*/}
                {/*        castShadow*/}
                {/*        receiveShadow*/}
                {/*    >*/}
                {/*        <meshStandardMaterial*/}
                {/*            color="black"*/}
                {/*            // emissive="aqua"*/}
                {/*            // emissiveIntensity={1}*/}
                {/*            toneMapped={false}*/}
                {/*        />*/}
                {/*    </mesh>*/}
                {/*</group>*/}

                {/*<group position={[11, 2, -42]} rotation-y={Math.PI / 2}>*/}
                {/*    <mesh*/}
                {/*        geometry={nodes.plane.geometry}*/}
                {/*        position={[-9, -6, -4]}*/}
                {/*        castShadow*/}
                {/*        receiveShadow*/}
                {/*    >*/}
                {/*        <meshStandardMaterial*/}
                {/*            color="black"*/}
                {/*            // emissive="aqua"*/}
                {/*            // emissiveIntensity={1}*/}
                {/*            toneMapped={true}*/}
                {/*        />*/}
                {/*    </mesh>*/}
                {/*</group>*/}

                {/*<group position-y={-2}>*/}
                {/*    <mesh>*/}
                {/*        <extrudeGeometry*/}
                {/*            args={[*/}
                {/*                shape,*/}
                {/*                {*/}
                {/*                    steps: LINE_NB_POINTS,*/}
                {/*                    bevelEnabled: false,*/}
                {/*                    extrudePath: curve,*/}
                {/*                },*/}
                {/*            ]}*/}
                {/*        />*/}
                {/*        <meshStandardMaterial color={"white"} opacity={0.7} transparent/>*/}
                {/*    </mesh>*/}
                {/*</group>*/}

            </Suspense>
        </>
    );
};

export default One;