import Image from 'next/image';
import React from 'react';
import namaz from "../../../public/namaj/namaj.jpeg"
import namaz1 from "../../../public/namaj/nama1.jpg"

const page = () => {
    return (
        <div className='max-w-[1240px] mx-auto mt-4 mb-28 px-3'>
            <Image className='w-full object-cover md:h-[570px]' src={namaz1} alt=''></Image>
            <h1 className='text-4xl font-extrabold underline text-center my-8 font-bangla'>নামায</h1>
            <p className='font-bangla text-justify my-8'><span className='font-bangla text-xl'>সালাত</span>  প্রত্যেক মুসলিমের জন্য ফরজ। আর নামায জান্নাতের চাবি | তাই সঠিক পদ্ধতিতে নামাজ শিক্ষা এবং নামায পড়া আমাদের জন্য অপরিহার্য | এখানে আমরা নামাজ শিক্ষার আগে জানবো নামায সম্বন্ধে কিছু গুরুত্বপূর্ণ কথা |</p>

            <p className='font-bangla text-justify my-8'>সালাত বা নামায নিছক প্রার্থনা নয় | এটি আমাদেরকে আমাদের স্রষ্টার অনুগত করে | তাই নামায হচ্ছে আনুগত্যের অনুশীলন | নামাযের আরবি শব্দ হল Salah, এই শব্দটির অর্থ চারটি প্রসিদ্ধ রয়েছে | ১. প্রার্থনা করা, ২. অনুগ্রহ করা, ৩. পবিত্রতা বর্ণনা করা, এবং ৪. ক্ষমা প্রার্থনা করা |পারিভাষিক অর্থে সালাত বা নামায হচ্ছে এমন একটা নির্দিষ্ট ইবাদত যা নির্ধারিত সময়ে সুনির্দিষ্ট পদ্ধতিতে আদায় করা হয় | পাঁচ ওয়াক্ত নামাযের মাধ্যমে একজন মুসলমান ইসলামের পরিচালিত হয় |</p>

            <p className='font-bangla text-justify my-8'>নামায আমাদের মধ্যে আল্লাহ ভীতি, সততা, সৎকর্মশীলতা ও পবিত্রতার আবেগ এবং আল্লাহর বিধানের আনুগত্যের ভাবধারা সৃষ্টি করে | কোরআন ও হাদিসে এ বিষয়ে সবিশেষ গুরুত্ব দেওয়া হয়েছে | আল কুরআনে ব্যক্তি ও সামাজিক জীবনে নামাযের গুরুত্ব ব্যক্ত হয়েছে ৮২ বার |</p>

            <Image className='w-full object-cover md:h-[570px]' src={namaz} alt=''></Image>

            <p className='font-bangla text-justify my-8'><span className='font-bangla text-xl'>সালাত</span> শব্দটির বাংলা অর্থ হচ্ছে প্রার্থনা | তবে প্রার্থনা শব্দটি আরবী সালাত শব্দের তাৎপর্য পুরোপুরি প্রকাশ করতে পারে না | কারণ প্রার্থনা করা মানে হচ্ছে অনুরোধ করা বা বিনীতভাবে কিছু চাওয়া | প্রার্থনা করার আরেকটি অর্থ হচ্ছে মিনতি করা | সাহায্যের আবেদন করা বা দোওয়া করা | আর সেটাই হচ্ছে আবেদন বা প্রার্থনা | তবে সালাত অর্থ কেবলমাত্র প্রার্থনা নয়, প্রার্থনার চাইতেও অনেক বেশী কিছু |</p>

            <p className='font-bangla text-justify my-8'>কারণ সালাতের মাধ্যমে আমরা আল্লাহতালার কাছে সাহায্য চাওয়ার পাশাপাশি তার প্রশংসাও করি | আমরা তার কাছ থেকে নির্দেশনা পায় | আর এসবের পাশাপাশি এটা হলো এক ধরনের programming | এটা একটা বিশেষ অবস্থা অথবা একজন সাধারণ মানুষের কথায় এটা এক ধরনের Brain-Washing | মনো বিজ্ঞানীদের মতে, আমাদের মন সরাসরি আমাদের নিয়ন্ত্রনে নেই | শরীরের উপর রয়েছে আমাদের পুরো নিয়ন্ত্রণ | কিন্তু আমাদের মন সরাসরি আমাদের নিয়ন্ত্রণে নেই এখন নামায হচ্ছে মনকে Controll করার সবথেকে উত্তম উপায় |</p>
        </div>
    );
};

export default page;