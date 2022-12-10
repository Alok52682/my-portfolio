import React from 'react';
import '../Banner/Baner.css';
import { FaDownload } from 'react-icons/fa';
import profile from '../../../Assets/Professional (1).jpg';
import resume from '../../../Assets/My Resume.pdf';

const About = () => {
    return (
        <div className="hero">
            <div className="hero-content my-20 flex-col lg:flex-row">
                <div className='lg:w-1/2 text-center p-5'>
                    <div className='w-1/2 relative'>
                        <div className="w-[300px] h-[300px] shadow-2xl border-8 border-info" ></div>
                        <img src={profile} className="absolute w-[300px] h-[300px] -right-20 top-20 shadow-2xl drop-shadow-xl" alt='' />
                        <a href={resume} download={resume}>
                            <button className="btn rounded-none bg-gradient-to-r from-cyan-500 to-blue-500 border-0 mt-5 drop-shadow-xl absolute -right-60 -top-4">Download Resume <FaDownload className='ml-1' /></button>
                        </a>
                    </div>
                </div>
                <div className='lg:w-1/2'>
                    <h1 className="text-5xl font-bold text-overColor drop-shadow-xl">ABOUT ME</h1>
                    <p className="py-6 text-white">Hello! I’m Alok Rajbongshi. Web Developer with over 8 months of experience. Experienced with all stages of the development cycle for dynamic web projects. Having an in-depth knowledge including advanced HTML5, CSS3, JavaScript, ReactJs, NextJs. Strong background in project management.</p>

                    <p className='text-xl text-white leading-loose'><span className='text-info'>NAME:</span> Alok Rajbongshi</p>
                    <p className='text-xl text-white leading-loose'><span className='text-info'>DATE OF BIRTH:</span> 10 May 2001</p>
                    <p className='text-xl text-white leading-loose'><span className='text-info'>NATIONALITY:</span> Bangladeshi</p>
                    <p className='text-xl text-white leading-loose'><span className='text-info'>ADDRESS:</span>Dhaka,Bangladesh</p>
                    <p className='text-xl text-white leading-loose'><span className='text-info'>PHONE:</span>+8801786909926</p>
                    <p className='text-xl text-white leading-loose'><span className='text-info'>E-MAIL:</span>alokraj00061@gmail.com</p>
                </div>
            </div>
        </div>
    );
};

export default About;