import Link from 'next/link';
import React from 'react';

const page = () => {
    return (
        <div className='max-w-[500px] mx-auto mt-8 mb-14 font-bangla px-3'>
            <h1 className='text-center text-2xl my-4'>সূরা আল-ফাতিহা</h1>

            <div className="mb-8">
                <h1 className="mb-2 text-green-700">بِسْمِ اللَّهِ الرَّحْمَٰنِ الرَّحِيمِ</h1>
                <p className="mb-2"><span className='text-red-600'>বাংলা উচ্চারণ :</span> বিসমিল্লাহির রাহমা-নির রাহি-ম</p>
                <p className="mb-2"><span className='text-green-700'>বাংলা অনুবাদ :</span> পরম দয়ালু, সবসময় দয়ালু আল্লাহ্‌র নামে শুরু করছি।</p>
            </div>
            <div className="mb-8">
                <h1 className="mb-2 text-green-700"> الْحَمْدُ لِلَّهِ رَبِّ الْعَالَمِينَ</h1>
                <p className="mb-2"><span className='text-red-600'>বাংলা উচ্চারণ :</span> আলহামদু লিল্লাহি রাব্বিল আ’-লামি-ন।</p>
                <p className="mb-2"><span className='text-green-700'>বাংলা অনুবাদ :</span> সকল প্রশংসা, মহিমা এবং ধন্যবাদ আল্লাহর; তিনি সকল চেতন অস্তিত্বের সার্বভৌম ক্ষমতার অধিকারী, যত্নশীল প্রভু।</p>
            </div>
            <div className="mb-8">
                <h1 className="mb-2 text-green-700">الرَّحْمَٰنِ الرَّحِيمِ</h1>
                <p className="mb-2"><span className='text-red-600'>বাংলা উচ্চারণ :</span> আররাহমা-নির রাহি-ম</p>
                <p className="mb-2"><span className='text-green-700'>বাংলা অনুবাদ :</span> পরম দয়ালু, সবসময় দয়ালু</p>
            </div>
            <div className="mb-8">
                <h1 className="mb-2 text-green-700">مَالِكِ يَوْمِ الدِّينِ</h1>
                <p className="mb-2"><span className='text-red-600'>বাংলা উচ্চারণ :</span> মা-লিকি ইয়াওমিদ্দি-ন</p>
                <p className="mb-2"><span className='text-green-700'>বাংলা অনুবাদ :</span> বিচার দিনের একমাত্র অধিপতি।</p>
            </div>
            <div className="mb-8">
                <h1 className="mb-2 text-green-700">إِيَّاكَ نَعْبُدُ وَإِيَّاكَ نَسْتَعِينُ</h1>
                <p className="mb-2"><span className='text-red-600'>বাংলা উচ্চারণ :</span> ইয়্যা-কা না’বুদু ওয়া ইয়্যা-কা নাসতাই’-ন</p>
                <p className="mb-2"><span className='text-green-700'>বাংলা অনুবাদ :</span> আমরা একমাত্র আপনার, শুধুই আপনার দাসত্ব করি, এবং একমাত্র আপনার কাছে, শুধুই আপনার কাছে অনেক চেষ্টার পরে সাহায্য চাই।</p>
            </div>
            <div className="mb-8">
                <h1 className="mb-2 text-green-700">اهْدِنَا الصِّرَاطَ الْمُسْتَقِيمَ</h1>
                <p className="mb-2"><span className='text-red-600'>বাংলা উচ্চারণ :</span> ইহদিনাস সিরাতা’ল মুসতাকি’-ম</p>
                <p className="mb-2"><span className='text-green-700'>বাংলা অনুবাদ :</span> আমাদেরকে একমাত্র সঠিক, প্রতিষ্ঠিত, ঊর্ধ্বগামী, ক্রমাগত কঠিনতর পথের জন্য বিস্তারিত পথনির্দেশ দিন।</p>
            </div>
            <div className="mb-8">
                <h1 className="mb-2 text-green-700"> صِرَاطَ الَّذِينَ أَنْعَمْتَ عَلَيْهِمْ غَيْرِ الْمَغْضُوبِ عَلَيْهِمْ وَلَا الضَّالِّينَ</h1>
                <p className="mb-2"><span className='text-red-600'>বাংলা উচ্চারণ :</span> সিরাতা’ল্লা যি-না আনআ’মতা আ’লাইহিম গা’ইরিল মাগ’দু’বি আ’লাইহিম ওয়ালা দ্দ—ল্লি-ন।</p>
                <p className="mb-2"><span className='text-green-700'>বাংলা অনুবাদ :</span> তাদের পথ যাদেরকে আপনি স্বাচ্ছন্দ্য, অনুগ্রহ, কল্যাণ দিয়েছেন, যারা নিজের এবং অন্যের ক্রোধের শিকার হয় না এবং ভুল পথে যায় না।</p>
            </div>

            <Link href="/quran">
                <button className="mt-8 block mx-auto rounded-md hover:bg-transparent border text-white font-bold hover:text-[#23306C] duration-500 bg-[#06DAD7] px-8 py-4">Back to Quran</button>
            </Link>
        </div>
    );
};

export default page;