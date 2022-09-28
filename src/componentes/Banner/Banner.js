import React from 'react';
import bimg from "../../componentes/Images/Landing page image.svg"

const Banner = () => {

    const fclr = '#8456EC';
    const sclr = '#E87BF8';

    return (
        <div className='bg-pink-50'>
            <section className='lg:flex lg:flex-row-reverse items-center justify-evenly max-w-7xl mx-auto'>

                <div className='lg:text-end lg:my-40 lg:p-28 mb-20'>
                    <h2 className='text-4xl font-bold text-primary'> <span>Imagine if</span> <br /> <span className='text-purple-600'>Snapchat</span> <br /> had events.</h2>
                    <p className=' text-gray-600'>Easily host and share events with your <br /> friends  across any social media.</p>
                    <div>
                        <a href="/event"><button className="btn bg-gradient-to-r from-purple-600 to-purple-500 mt-5 text-white">🎉 Create my event</button></a>
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