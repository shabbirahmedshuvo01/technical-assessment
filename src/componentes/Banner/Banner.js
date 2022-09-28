import React from 'react';
import bimg from "../../componentes/Images/Landing page image.svg"

const Banner = () => {
    return (
        <div className='bg-pink-50'>
            <section className='flex items-center justify-evenly'>
                <div className='my-5'>
                    <img
                        className='w-4/5'
                        src={bimg} alt="" />
                </div>
                <div className='my-40 text-end'>
                    <h2 className='text-4xl font-bold text-primary'> <span>Imagine if</span> <br /> <span className='text-secondary'>Snapchat</span> <br /> had events.</h2>
                    <p className=' text-gray-600'>Easily host and share events with your friends <br /> across any social media.</p>
                    <button className="btn btn-active btn-secondary mt-2">🎉 Create my event</button>
                </div>
            </section>
        </div>
    );
};

export default Banner;