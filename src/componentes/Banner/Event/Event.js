import React from 'react';
import bdyImg from '../../Images/Birthday cake.png';
import svg1 from '../../Images/Fill 19.svg';
import { AiOutlineCalendar } from 'react-icons/ai';
import { GoLocation } from 'react-icons/go';

const Event = () => {
    return (
        <div>
            <section className='lg:flex flex-row-reverse justify-center items-center lg:gap-x-40'>

                <div className='lg:mt-44'>
                    <img className='lg:w-96 md:p-10' src={bdyImg} alt="" />
                </div>

                <div className='p-5 md:px-20'>
                    <div className='text-start'>
                        <h2 className='text-4xl font-bold text-primary'>Birthday Bash</h2>
                        <p className='text-xs mt-1 text-black font-medium'>Hosted by Elysia</p>
                    </div>

                    {/* svg or texts */}

                    <div className='mt-10'>
                        <div className='mt-5 flex gap-5 text-start'>
                            <div className='mt-2 text-purple-500 text-2xl'>
                                <AiOutlineCalendar />
                            </div>
                            <div>
                                <p className='text-primary font-semibold'>18 August 6:00PM</p>
                                <p>to <span className='text-black font-medium'>19 August 1:00PM</span> UTC +10</p>
                            </div>
                        </div>
                        <div className='mt-5 flex gap-5 text-start'>
                            <div className='mt-2 text-purple-500 text-2xl'>
                                <GoLocation />
                            </div>
                            <div>
                                <p className='text-primary font-semibold'>Street name</p>
                                <p>Suburb, State, Postcode</p>
                            </div>
                        </div>
                    </div>

                </div>
            </section>
        </div>
    );
};

export default Event;