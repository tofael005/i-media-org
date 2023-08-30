import React from 'react';
import kalima from "../../public/pillar/kalima.png"
import namaj from "../../public/pillar/namaj.jpeg"
import roja from "../../public/pillar/roja.jpeg"
import jakat from "../../public/pillar/jakat.jpeg"
import hajj from "../../public/pillar/hajj.jpeg"
import Image from 'next/image';
import Link from 'next/link';

const Pillar = () => {
    return (
        <div className="mt-20 mb-20">
            <h1 className="text-center text-4xl font-bold my-6 text-[#23306C]">Five Pillars Of Islam</h1>
            <p className="text-center font-light mb-7 text-[#0B8998]">---Islam Pillars---</p>
            <div className="max-w-[1240px] mx-auto grid md:grid-cols-5 text-center gap-6">
                <div className='object-cover overflow-hidden border rounded-md'>
                    <Image className="hover:scale-110 scale-100 duration-500 h-[200px] rounded-md" src={kalima} alt=''></Image>
                    <Link href="/shahada"><h1 className="my-7 text-xl font-bold text-[#0B8998] uppercase">Shahadah</h1></Link>
                </div>
                <div className='object-cover overflow-hidden border rounded-md'>
                    <Image className="hover:scale-110 scale-100 duration-500 h-[200px] rounded-md" src={namaj} alt=''></Image>
                    <Link href="/salah"><h1 className="my-7 text-xl font-bold text-[#0B8998] uppercase">Salah</h1></Link>
                </div>
                <div className='object-cover overflow-hidden border rounded-md'>
                    <Image className="hover:scale-110 scale-100 duration-500 h-[200px] rounded-md" src={roja} alt=''></Image>
                    <Link href="/roja"><h1 className="my-7 text-xl font-bold text-[#0B8998] uppercase">Sawm</h1></Link>
                </div>
                <div className='object-cover overflow-hidden border rounded-md'>
                    <Image className="hover:scale-110 scale-100 duration-500 h-[200px] rounded-md" src={jakat} alt=''></Image>
                    <Link href="/zakat"><h1 className="my-7 text-xl font-bold text-[#0B8998] uppercase">Zakath</h1></Link>
                </div>
                <div className='object-cover overflow-hidden border rounded-md'>
                    <Image className="hover:scale-110 scale-100 duration-500 h-[200px] rounded-md" src={hajj} alt=''></Image>
                    <Link href="/blogcard"><h1 className="my-7 text-xl font-bold text-[#0B8998] uppercase">Hajj</h1></Link>
                </div>
            </div>
        </div>
    );
};

export default Pillar;