import React from 'react';
import bannerImg from '../../../Assets/work-Space.webp';
import '../../../App.css';
import './Baner.css';
// import { FaDownload } from 'react-icons/fa';

const Banner = () => {
    return (
        <div className="relative">
            <div className='banner-img'>
                <img src={bannerImg} className="block w-[100vw] h-[100vh]" alt='' />
            </div>
            <div className="absolute flex justify-start transform -translate-y-1/2 left-24 top-1/3">
                <h1 className='text-8xl font-extrabold text-white fontStyle'>Hello! <br />I'm Alok Rajbongshi</h1>
            </div>
            <div className="absolute flex justify-start transform w-2/5 -translate-y-1/2 left-24 top-2/4">
                <p className='text-5xl text-white'>Web Developer</p>
            </div>
            <div className="absolute flex justify-start transform w-2/5 -translate-y-1/2 left-24 top-2/3">
                {/* <button className="btn btn-warning hover:text-white mr-5">Resume <FaDownload className='ml-1' /></button> */}
            </div>
        </div>
    );
};

export default Banner;