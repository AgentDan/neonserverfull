import React, {Suspense} from 'react';
import {Canvas} from "@react-three/fiber";
import {Environment, OrbitControls, useGLTF} from "@react-three/drei";

const GltFrender = (props) => {
    function Box() {
        return (
            <>
                <mesh>
                    <OrbitControls autoRotate={true} autoRotateSpeed={100}/>
                    <boxBufferGeometry attach="geometry" args={[1, 1, 10]} />
                    <meshStandardMaterial attach="material"/>
                </mesh>
            </>
        )
    }

    const Model = () => {
        const {nodes, materials} = useGLTF("/uploads/" + props.path)

        if (props.userNum === 99) {
            return (
                <>
                    <OrbitControls autoRotate={true} maxDistance={30} minDistance={15} />
                    <group {...props} dispose={null} >
                        <mesh geometry={nodes.D0.geometry} material={materials.D00}/>
                    </group>
                </>
            )
        }

        return (
            <>
                {props.butA === 0 &&
                    <group dispose={null}>
                        {materials.A00 && <mesh geometry={nodes.A0_1.geometry} material={materials.A00}/>}
                        {materials.A01 && <mesh geometry={nodes.A0_2.geometry} material={materials.A01}/>}
                        {materials.A03 && <mesh geometry={nodes.A0_3.geometry} material={materials.A03}/>}
                    </group>
                }
                {props.butA === 1 &&
                    <group dispose={null}>
                        {materials.A10 && <mesh geometry={nodes.A1_1.geometry} material={materials.A10}/>}
                        {materials.A11 && <mesh geometry={nodes.A1_2.geometry} material={materials.A11}/>}
                        {materials.A12 && <mesh geometry={nodes.A1_3.geometry} material={materials.A12}/>}
                    </group>
                }
                {props.butA === 2 &&
                    <group dispose={null}>
                        {materials.A20 && <mesh geometry={nodes.A2_1.geometry} material={materials.A20}/>}
                        {materials.A21 && <mesh geometry={nodes.A2_2.geometry} material={materials.A21}/>}
                        {materials.A22 && <mesh geometry={nodes.A2_3.geometry} material={materials.A22}/>}
                    </group>
                }
                {props.butA === 3 &&
                    <group dispose={null}>
                        {materials.A30 && <mesh geometry={nodes.A3_1.geometry} material={materials.A30}/>}
                        {materials.A31 && <mesh geometry={nodes.A3_2.geometry} material={materials.A31}/>}
                        {materials.A32 && <mesh geometry={nodes.A3_3.geometry} material={materials.A32}/>}
                    </group>
                }
                {props.butA === 4 &&
                    <group dispose={null}>
                        {materials.A40 && <mesh geometry={nodes.A4_1.geometry} material={materials.A40}/>}
                        {materials.A41 && <mesh geometry={nodes.A4_2.geometry} material={materials.A41}/>}
                        {materials.A42 && <mesh geometry={nodes.A4_3.geometry} material={materials.A42}/>}
                    </group>
                }
                {props.butB === 0 &&
                    <group dispose={null}>
                        {materials.B00 && <mesh geometry={nodes.B0_1.geometry} material={materials.B00}/>}
                        {materials.B01 && <mesh geometry={nodes.B0_2.geometry} material={materials.B01}/>}
                        {materials.B02 && <mesh geometry={nodes.B0_3.geometry} material={materials.B02}/>}
                    </group>
                }
                {props.butB === 1 &&
                    <group dispose={null}>
                        {materials.B10 && <mesh geometry={nodes.B1_1.geometry} material={materials.B10}/>}
                        {materials.B11 && <mesh geometry={nodes.B1_2.geometry} material={materials.B11}/>}
                        {materials.B12 && <mesh geometry={nodes.B1_3.geometry} material={materials.B12}/>}
                    </group>
                }
                {props.butB === 2 &&
                    <group dispose={null}>
                        {materials.B20 && <mesh geometry={nodes.B2_1.geometry} material={materials.B20}/>}
                        {materials.B21 && <mesh geometry={nodes.B2_2.geometry} material={materials.B21}/>}
                        {materials.B22 && <mesh geometry={nodes.B2_3.geometry} material={materials.B22}/>}
                    </group>
                }
                {props.butB === 3 &&
                    <group dispose={null}>
                        {materials.B30 && <mesh geometry={nodes.B3_1.geometry} material={materials.B30}/>}
                        {materials.B31 && <mesh geometry={nodes.B3_2.geometry} material={materials.B31}/>}
                        {materials.B32 && <mesh geometry={nodes.B3_3.geometry} material={materials.B32}/>}
                    </group>
                }
                {props.butB === 4 &&
                    <group dispose={null}>
                        {materials.B40 && <mesh geometry={nodes.B4_1.geometry} material={materials.B40}/>}
                        {materials.B41 && <mesh geometry={nodes.B4_2.geometry} material={materials.B41}/>}
                        {materials.B42 && <mesh geometry={nodes.B4_3.geometry} material={materials.B42}/>}
                    </group>
                }
                {props.butC === 0 &&
                    <group dispose={null}>
                        {materials.C00 && <mesh geometry={nodes.C0_1.geometry} material={materials.C00}/>}
                        {materials.C01 && <mesh geometry={nodes.C0_2.geometry} material={materials.C01}/>}
                        {materials.C03 && <mesh geometry={nodes.C0_3.geometry} material={materials.C03}/>}
                    </group>
                }
                {props.butC === 1 &&
                    <group dispose={null}>
                        {materials.C10 && <mesh geometry={nodes.C1_1.geometry} material={materials.C10}/>}
                        {materials.C11 && <mesh geometry={nodes.C1_2.geometry} material={materials.C11}/>}
                        {materials.C12 && <mesh geometry={nodes.C1_3.geometry} material={materials.C12}/>}
                    </group>
                }
                {props.butC === 2 &&
                    <group dispose={null}>
                        {materials.C20 && <mesh geometry={nodes.C2_1.geometry} material={materials.C20}/>}
                        {materials.C21 && <mesh geometry={nodes.C2_2.geometry} material={materials.C21}/>}
                        {materials.C22 && <mesh geometry={nodes.C2_3.geometry} material={materials.C22}/>}
                    </group>
                }
                {props.butC === 3 &&
                    <group dispose={null}>
                        {materials.C30 && <mesh geometry={nodes.C3_1.geometry} material={materials.C30}/>}
                        {materials.C31 && <mesh geometry={nodes.C3_2.geometry} material={materials.C31}/>}
                        {materials.C32 && <mesh geometry={nodes.C3_3.geometry} material={materials.C32}/>}
                    </group>
                }
                {props.butC === 4 &&
                    <group dispose={null}>
                        {materials.C40 && <mesh geometry={nodes.C4_1.geometry} material={materials.C40}/>}
                        {materials.C41 && <mesh geometry={nodes.C4_2.geometry} material={materials.C41}/>}
                        {materials.C42 && <mesh geometry={nodes.C4_3.geometry} material={materials.C42}/>}
                    </group>
                }

                <group dispose={null}>
                    {materials.D00 && <mesh geometry={nodes.D0_1.geometry} material={materials.D00}/>}
                    {materials.D01 && <mesh geometry={nodes.D0_2.geometry} material={materials.D01}/>}
                    {materials.D02 && <mesh geometry={nodes.D0_3.geometry} material={materials.D02}/>}

                    {materials.D10 && <mesh geometry={nodes.D1_1.geometry} material={materials.D10}/>}
                    {materials.D11 && <mesh geometry={nodes.D1_2.geometry} material={materials.D11}/>}
                    {materials.D12 && <mesh geometry={nodes.D1_3.geometry} material={materials.D12}/>}

                    {materials.D20 && <mesh geometry={nodes.D2_1.geometry} material={materials.D20}/>}
                    {materials.D21 && <mesh geometry={nodes.D2_2.geometry} material={materials.D21}/>}
                    {materials.D22 && <mesh geometry={nodes.D2_3.geometry} material={materials.D22}/>}

                    {materials.D30 && <mesh geometry={nodes.D3_1.geometry} material={materials.D30}/>}
                    {materials.D31 && <mesh geometry={nodes.D3_2.geometry} material={materials.D31}/>}
                    {materials.D32 && <mesh geometry={nodes.D3_3.geometry} material={materials.D32}/>}

                    {materials.D40 && <mesh geometry={nodes.D4_1.geometry} material={materials.D40}/>}
                    {materials.D41 && <mesh geometry={nodes.D4_2.geometry} material={materials.D41}/>}
                    {materials.D42 && <mesh geometry={nodes.D4_3.geometry} material={materials.D42}/>}

                    {materials.D50 && <mesh geometry={nodes.D5_1.geometry} material={materials.D50}/>}
                    {materials.D51 && <mesh geometry={nodes.D5_2.geometry} material={materials.D51}/>}
                    {materials.D52 && <mesh geometry={nodes.D5_3.geometry} material={materials.D52}/>}

                    {materials.D60 && <mesh geometry={nodes.D6_1.geometry} material={materials.D60}/>}
                    {materials.D61 && <mesh geometry={nodes.D6_2.geometry} material={materials.D61}/>}
                    {materials.D62 && <mesh geometry={nodes.D6_3.geometry} material={materials.D62}/>}

                    {materials.D70 && <mesh geometry={nodes.D7_1.geometry} material={materials.D70}/>}
                    {materials.D71 && <mesh geometry={nodes.D7_2.geometry} material={materials.D71}/>}
                    {materials.D72 && <mesh geometry={nodes.D7_3.geometry} material={materials.D72}/>}

                    {materials.D80 && <mesh geometry={nodes.D8_1.geometry} material={materials.D80}/>}
                    {materials.D81 && <mesh geometry={nodes.D8_2.geometry} material={materials.D81}/>}
                    {materials.D82 && <mesh geometry={nodes.D8_3.geometry} material={materials.D82}/>}
                    9
                    {materials.D90 && <mesh geometry={nodes.D9_1.geometry} material={materials.D90}/>}
                    {materials.D91 && <mesh geometry={nodes.D9_2.geometry} material={materials.D91}/>}
                    {materials.D92 && <mesh geometry={nodes.D9_3.geometry} material={materials.D92}/>}
                </group>
            </>
        )
    };

    return (
        <div className={"absolute top-0 ml-44 w-10/12 h-screen"}>
            <Canvas camera={{position: [0, 0, 20]}}>
                <OrbitControls maxDistance={30} minDistance={10} />
                <Environment files={'/uploads/hdr_1k.hdr'}/>
                <Suspense fallback={<Box/>}>
                    <Model/>
                </Suspense>
            </Canvas>
        </div>
    );
};

export default GltFrender;