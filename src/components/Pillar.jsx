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
                <div>
                    <Image src={kalima}></Image>
                    <h1>Shahadah</h1>
                </div>
                <div>
                    <Image className="hover:" src={namaj}></Image>
                    <h1>Salah</h1>
                </div>
                <div>
                    <Image src={roja}></Image>
                    <h1>Sawm</h1>
                </div>
                <div>
                    <Image src={jakat}></Image>
                    <h1>Zakah</h1>
                </div>
                <div>
                    <Image src={hajj}></Image>
                    <h1>Hajj</h1>
                </div>
            </div>
        </div>
    );
};

export default Pillar;