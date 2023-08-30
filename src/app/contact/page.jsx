import Image from 'next/image';
import React from 'react';
import contact from "../../../public/contact.jpeg"

const page = () => {
    return (
        <div className="max-w-[1240px] mx-auto mb-12">
            <h1 className='text-center text-4xl font-bold my-3'>Contact</h1>
            <div className='p-8'>
                <div className="grid md:grid-cols-2 gap-10">
                    <Image className='w-full h-full rounded-md' src={contact} alt=''></Image>
                    <form action="">
                        <div>
                            <label htmlFor="">Name</label> <br />
                            <input className='w-full p-3 bg-transparent border rounded-md mb-2' type="text" name='' placeholder='Enter Your Name' /><br />
                            <label htmlFor="">Email</label><br />
                            <input className='w-full p-3 bg-transparent border rounded-md mb-2' type="email" name="" id="" placeholder='Enter Your Email' /><br />
                            <label htmlFor="">Number</label><br />
                            <input className='w-full p-3 bg-transparent border rounded-md mb-2' type="number" name="" id="" placeholder='Number' /><br />
                            <label htmlFor="">Massege</label><br />
                            <textarea className='w-full border mb-2 p-3 rounded-md' name="" id="" cols="30" rows="6" placeholder='Type'></textarea><br />
                            <input className='w-full p-3 rounded-md hover:bg-transparent hover:border font-bold hover:text-[#23306C] duration-500 bg-[#06DAD7] text-white' type="button" value="Submit" />
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default page;