import React from 'react';
import bdyImg from '../../Images/Birthday cake.png'

const Event = () => {
    return (
        <div>
            <section className='flex'>
                <div>
                    <h2>Birthday</h2>
                </div>
                <div>
                    <img src={bdyImg} alt="" />
                </div>
            </section>
        </div>
    );
};

export default Event;