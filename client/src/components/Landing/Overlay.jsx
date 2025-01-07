import React from 'react';
import {Scroll} from "@react-three/drei";
import "./Overlay.css"

const Overlay = () => {

    return (
        <>
            <Scroll html>
                <div>
                    <div className="h-screen border-2 border-black">
                        <h2 className=" absolute mt-12 text-center text-[10vw]  text-white font-extrabold">HELLO22</h2>
                    </div>
                    <div className="h-screen border-2 border-black">
                        <a href="/shop">
                            <h1 className="absolute text-white font-bold">Component 2</h1>
                        </a>
                        <h2 className=" absolute mt-12 text-center text-[10vw]  text-white font-extrabold">Component  2</h2>
                    </div>
                    <div className="h-screen border-2 border-red-500">
                        <h2 className="content-center absolute mt-12 text-center text-[10vw]  text-white font-extrabold">Component 3</h2>
                        <a href="/card">
                            <div className="absolute h-[20px] w-[100px] bg-green-300">Card</div>
                        </a>
                    </div>
                    <div className="h-screen  border-2 border-black text-center">
                        <h2 className=" absolute mt-12 text-center text-[10vw]  text-white font-extrabold">Component 4</h2>
                    </div>
                    <div className="h-screen border-2 border-black">
                        <h1 className="absolute text-white font-bold">Component 5</h1>
                        <div className="absolute text-center text-white font-semibold">HELLO</div>
                        <div className="mt-4 absolute text-center text-white font-semibold">HELLO1</div>
                        <h2 className=" absolute mt-12 text-center text-[10vw] text-white font-semibold">content
                            button</h2>
                    </div>
                    <div className="border-2 border-black">
                        <h1 className="text-white font-bold">Component 6</h1>
                    </div>
                    <div className="h-screen border-2 border-black">
                        <h1 className="absolute text-white font-bold">Component 7</h1>
                        <h2 className=" absolute mt-12 text-center text-[10vw]  text-white font-extrabold">Component
                            7</h2>
                    </div>
                    <div className="h-screen border-2 border-black">
                        <h1 className="absolute text-white font-bold">Component 8</h1>
                        <h2 className=" absolute mt-12 text-center text-[10vw]  text-white font-extrabold">Component
                            8</h2>
                    </div>
                    <div className="h-screen border-2 border-black">
                        <h1 className="absolute text-white font-bold">Component 9</h1>
                        <h2 className="absolute mt-12 text-center text-[10vw]  text-white font-extrabold">Component
                            9</h2>
                    </div>
                    <div className=" h-screen border-2 border-black">
                        <h1 className="absolute text-white font-extrabold">Component 10</h1>
                        <h2 className="absolute mt-12 text-center text-[10vw]  text-white font-extrabold">Component
                            10</h2>
                    </div>
                </div>
            </Scroll>
        </>
    );
};

export default Overlay;