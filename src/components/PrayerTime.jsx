import React from 'react';
import { BsStopwatch } from 'react-icons/bs';


const PrayerTime = () => {
    return (
        <div className='mt-10 max-w-[1240px] mx-auto'>
            <h1 className="text-center text-4xl text-[#23306C] font-bold">Prayar Times</h1>
            <p className="text-center mt-2 text-[#0B8998]">---Today---</p>

            <div className="grid md:grid-cols-5 mt-8 gap-6 px-3">
                <div className="border rounded-md md:flex flex justify-center items-center gap-3 p-4">
                    <span className="text-5xl text-center text-[#23306C] font-extrabold">
                        <BsStopwatch />
                    </span>
                    <div className="p-3">
                        <h1 className="font-bold text-[#0B8998] mb-2">FAZR</h1>
                        <p>4:22AM</p>
                    </div>
                </div>
                <div className="border rounded-md md:flex flex justify-center items-center gap-3 p-4">
                    <span className="text-5xl text-[#23306C] text-center font-extrabold">
                        <BsStopwatch />
                    </span>
                    <div className="p-3">
                        <h1 className="font-bold text-[#0B8998] mb-2">DHUHR</h1>
                        <p>11: 59AM</p>
                    </div>
                </div>
                <div className="border rounded-md md:flex flex justify-center items-center gap-3 p-4">
                    <span className="text-5xl text-[#23306C] text-center font-extrabold">
                        <BsStopwatch />
                    </span>
                    <div className="p-3">
                        <h1 className="font-bold text-[#0B8998] mb-2">ASR</h1>
                        <p>4: 30PM</p>
                    </div>
                </div>
                <div className="border rounded-md md:flex flex justify-center items-center gap-3 p-4">
                    <span className="text-5xl text-[#23306C] text-center font-extrabold">
                        <BsStopwatch />
                    </span>
                    <div className="p-3">
                        <h1 className="font-bold text-[#0B8998] mb-2">MAGRIB</h1>
                        <p>6:18PM</p>
                    </div>
                </div>
                <div className="border rounded-md md:flex flex justify-center items-center gap-3 p-4">
                    <span className="text-5xl text-[#23306C] text-center font-extrabold">
                        <BsStopwatch />
                    </span>
                    <div className="p-3">
                        <h1 className="font-bold text-[#0B8998] mb-2">ISHAA</h1>
                        <p>7:35PM</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PrayerTime;