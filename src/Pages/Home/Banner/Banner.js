import React from 'react';
import bannerImg from '../../../Assets/workspace.jpeg';
import '../../../App.css';
import './Baner.css';

const Banner = () => {
    return (
        <div className="relative">
            <div className='banner-img'>
                <img src={bannerImg} className="block w-[100vw] h-[60vh]" alt='' />
            </div>
            <div className="absolute flex justify-start transform -translate-y-1/2 left-24 top-1/3">
                <h1 className='text-8xl font-extrabold text-white fontStyle'>Hello! <br />I'm Alok Rajbongshi</h1>
            </div>
            <div className="absolute flex justify-start transform w-2/5 -translate-y-1/2 left-24 top-2/3">
                <p className='text-5xl text-white'>Web Developer</p>
            </div>
        </div>
    );
};

export default Banner;