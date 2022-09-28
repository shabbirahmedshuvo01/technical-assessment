import React from 'react';
import bimg from "../../componentes/Images/Landing page image.svg"

const Banner = () => {
    return (
        <div className='bg-pink-50'>
            <section className='lg:flex lg:flex-row-reverse items-center justify-evenly'>

                <div className='lg:text-end lg:my-40 lg:p-28 mb-20'>
                    <h2 className='text-4xl font-bold text-primary'> <span>Imagine if</span> <br /> <span className='text-secondary'>Snapchat</span> <br /> had events.</h2>
                    <p className=' text-gray-600'>Easily host and share events with your friends <br /> across any social media.</p>
                    <div>
                        <button className="btn btn-active btn-secondary mt-5">🎉 Create my event</button>
                    </div>
                </div>

                <div className='py-6'>
                    <img
                        className='lg:w-1/2 pl-5 md:mx-44 md:mb-40'
                        src={bimg} alt="" />
                </div>
            </section>
        </div>
    );
};

export default Banner;