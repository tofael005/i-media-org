import Image from 'next/image';
import React from 'react';
import support from "../../public/banner.png"

const Support = () => {
    return (
        <div className="bg-[#EBFAFA]">
            <div className="max-w-[1240px] mx-auto">
                <div className="grid md:grid-cols-2 px-3 gap-8">
                    <div>
                        <h1>Support Us</h1>
                        <h1>We Need Your Help</h1>
                    </div>
                    <Image className="w-[350px] h-[350px]" src={support}></Image>
                </div>
            </div>
        </div>
    );
};

export default Support;