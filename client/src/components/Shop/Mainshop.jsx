import React from 'react';

const Mainshop = () => {
    return (
        <>
            <div className="max-sm:pt-0 pt-20 bg-gray-300 relative">
                <div className="bg-blue-400 w-1/2 h-auto mx-auto flex max-sm:flex-wrap">
                    <div className="h-[100px] w-[160px] bg-red-600 sm:absolute mt-4 ml-4 opacity-45"></div>
                    <div className="max-sm:hidden max-sm:bg-white min-w-48 w-1/2 h-[100px]">Box one</div>
                    <div className="bg-yellow-300 min-w-48  w-[150px]">
                        <div className="h-auto">Title</div>
                        <div className="h-auto">
                            <div className="text-4xl">List</div>
                            <div className="">one</div>
                            <div>two</div>
                        </div>
                        <div className='h-auto'>Description</div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Mainshop;