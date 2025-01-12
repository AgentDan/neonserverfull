import React, {useRef} from 'react'
import {useGLTF, useScroll} from "@react-three/drei"
import {useFrame} from "@react-three/fiber"
import {gsap} from "gsap"
import {useLayoutEffect} from "react"

const KinkiModelOne = () => {
    const {nodes, materials} = useGLTF('./models/lockerGSAP1.glb')
    const mod = useRef()
    const tl = useRef()
    const scroll = useScroll()
    const G1 = useRef()
    const G2 = useRef()
    const G3 = useRef()
    const G4 = useRef()
    const G5 = useRef()
    const G6 = useRef()

    useFrame((state, delta) => {
        tl.current.seek(scroll.offset * tl.current.duration())
    })

    useLayoutEffect(() => {
        tl.current = gsap.timeline({defaults: {duration: 2, ease: 'power1.inOut'}})
        mod.current.rotation.y = 5
        mod.current.position.y = -0.3
        mod.current.position.z = -0.5
        tl.current

            .to(mod.current.position, {y: 3}, 0)
            .to(mod.current.rotation, {y: 1}, 0)

            .to(mod.current.position, {y: 7}, 2)
            .to(mod.current.rotation, {y: -2}, 2)

            .to(mod.current.position, {y: 10}, 4)
            .to(mod.current.rotation, {y: -1}, 4)

            .to(mod.current.position, {y: 14}, 6)
            .to(mod.current.rotation, {y: -1}, 6)

            .to(mod.current.position, {y: 18.5}, 10)
            .to(mod.current.rotation, {y: -1.7}, 10)

    }, [])

    return (
        <>
            <group dispose={null} ref={mod}>

                <group ref={G1}>
                    <mesh geometry={nodes.G1.geometry} material={materials.G1}/>
                </group>

                <group ref={G2}>
                    <mesh geometry={nodes.G2.geometry} material={materials.G2}/>
                </group>

                <group ref={G3}>
                    <mesh geometry={nodes.G3.geometry} material={materials.G3}/>
                </group>
                <group ref={G4}>
                    <mesh geometry={nodes.G4.geometry} material={materials.G3}/>
                </group>
                <group ref={G5}>
                    <mesh geometry={nodes.G5.geometry} material={materials.G3}/>
                </group>
                <group ref={G6}>
                    <mesh geometry={nodes.G6.geometry} material={materials.G3}/>
                </group>
                <group>
                    <mesh geometry={nodes.G7.geometry} material={materials.G7}/>
                </group>

            </group>
        </>
    )
};

export default KinkiModelOne