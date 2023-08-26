import React from 'react';
import { BsStopwatch } from 'react-icons/bs';


const PrayerTime = () => {
    return (
        <div className='mt-10 max-w-[1240px] mx-auto'>
            <h1 className="text-center text-3xl font-bold">Prayar Times</h1>
            <p className="text-center mt-2 ">---Today---</p>

            <div className="grid md:grid-cols-5 mt-8 gap-6">
                <div className="border rounded-md flex items-center gap-3 p-4">
                    <span className="text-5xl text-center font-extrabold">
                        <BsStopwatch />
                    </span>
                    <div className="p-3">
                        <h1 className="font-bold text-[#0B8998] mb-2">Fajar</h1>
                        <p>5:10AM</p>
                    </div>
                </div>
                <div className="border rounded-md flex items-center gap-3 p-4">
                    <span className="text-5xl text-center font-extrabold">
                        <BsStopwatch />
                    </span>
                    <div className="p-3">
                        <h1 className="font-bold text-[#0B8998] mb-2">Zuhr</h1>
                        <p>12: 25PM</p>
                    </div>
                </div>
                <div className="border rounded-md flex items-center gap-3 p-4">
                    <span className="text-5xl text-center font-extrabold">
                        <BsStopwatch />
                    </span>
                    <div className="p-3">
                        <h1 className="font-bold text-[#0B8998] mb-2">Asr</h1>
                        <p>4: 35PM</p>
                    </div>
                </div>
                <div className="border rounded-md flex items-center gap-3 p-4">
                    <span className="text-5xl text-center font-extrabold">
                        <BsStopwatch />
                    </span>
                    <div className="p-3">
                        <h1 className="font-bold text-[#0B8998] mb-2">Maghrib</h1>
                        <p>5:10AM</p>
                    </div>
                </div>
                <div className="border rounded-md flex items-center gap-3 p-4">
                    <span className="text-5xl text-center font-extrabold">
                        <BsStopwatch />
                    </span>
                    <div className="p-3">
                        <h1 className="font-bold text-[#0B8998] mb-2">Isha'a</h1>
                        <p>5:10AM</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PrayerTime;