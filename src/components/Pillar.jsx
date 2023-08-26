import React from 'react';
import kalima from "../../public/pillar/kalima.png"
import namaj from "../../public/pillar/namaj.jpeg"
import roja from "../../public/pillar/roja.jpeg"
import jakat from "../../public/pillar/jakat.jpeg"
import hajj from "../../public/pillar/hajj.jpeg"
import Image from 'next/image';

const Pillar = () => {
    return (
        <div className="mt-20 mb-10">
            <h1 className="text-center text-4xl font-bold my-6">Five Pillars Of Islam</h1>
            <p className="text-center font-light mb-7">Islam Pillars</p>
            <div className="max-w-[1240px] mx-auto grid md:grid-cols-5 text-center gap-6">
                <div className='object-cover overflow-hidden border rounded-md'>
                    <Image className="hover:scale-110 scale-100 duration-500 h-[200px] rounded-md" src={kalima}></Image>
                    <h1 className="my-7 text-xl font-bold text-[#0B8998] uppercase">Shahadah</h1>
                </div>
                <div className='object-cover overflow-hidden border rounded-md'>
                    <Image className="hover:scale-110 scale-100 duration-500 h-[200px] rounded-md" src={namaj}></Image>
                    <h1 className="my-7 text-xl font-bold text-[#0B8998] uppercase">Salah</h1>
                </div>
                <div className='object-cover overflow-hidden border rounded-md'>
                    <Image className="hover:scale-110 scale-100 duration-500 h-[200px] rounded-md" src={roja}></Image>
                    <h1 className="my-7 text-xl font-bold text-[#0B8998] uppercase">Sawm</h1>
                </div>
                <div className='object-cover overflow-hidden border rounded-md'>
                    <Image className="hover:scale-110 scale-100 duration-500 h-[200px] rounded-md" src={jakat}></Image>
                    <h1 className="my-7 text-xl font-bold text-[#0B8998] uppercase">Zakath</h1>
                </div>
                <div className='object-cover overflow-hidden border rounded-md'>
                    <Image className="hover:scale-110 scale-100 duration-500 h-[200px] rounded-md" src={hajj}></Image>
                    <h1 className="my-7 text-xl font-bold text-[#0B8998] uppercase">Hajj</h1>
                </div>
            </div>
        </div>
    );
};

export default Pillar;