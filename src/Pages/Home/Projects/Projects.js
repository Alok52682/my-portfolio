import React from 'react';
import edule from '../../../Assets/elearning.jpeg';
import travel from '../../../Assets/travel trek.png';
import book from '../../../Assets/Bookly.jpeg';

const Projects = () => {
    return (
        <div>
            <h2 className="text-5xl font-bold text-overColor text-center my-10 md:my-20">My Projects</h2>
            <div className='text-center bg-slate-800 w-10/12 mx-auto '>
                <div className='md:p-10 grid md:grid-cols-3 gap-5'>
                    <div className="card bg-slate-500 text-start rounded-sm mb-5 h-full">
                        <div className='h-3/5 p-4 border-b border-slate-900'>
                            <img src={travel} className='h-full w-full rounded-tl-sm rounded-tr-sm' alt="car!" />
                        </div>
                        <div className="card-body h-2/5">
                            <p className='text-blue-800 font-bold'>MERN Stack</p>
                            <div className=''>
                                <h2 className="card-title">Travel trek (Travel guid)</h2>
                            </div>
                            <div className="card-actions justify-end mb-3">
                                <button className="btn rounded-none bg-gradient-to-r from-cyan-500 to-blue-500 border-0">Details</button>
                            </div>
                        </div>
                    </div>
                    <div className="card bg-slate-500 text-start rounded-sm mb-5 h-full">
                        <div className='h-3/5 p-4 border-b border-slate-900'>
                            <img src={edule} className='h-full w-full rounded-tl-sm rounded-tr-sm' alt="car!" />
                        </div>
                        <div className="card-body h-2/5">
                            <p className='text-blue-800 font-bold'>MERN Stack</p>
                            <div className=''>
                                <h2 className="card-title">Edule (E-learning website)</h2>
                            </div>
                            <div className="card-actions justify-end mb-3">
                                <button className="btn rounded-none bg-gradient-to-r from-cyan-500 to-blue-500 border-0">Details</button>
                            </div>
                        </div>
                    </div>
                    <div className="card bg-slate-500 text-start rounded-sm mb-5 h-full">
                        <div className='h-3/5 p-4 border-b border-slate-900'>
                            <img src={book} className='h-full w-full rounded-tl-sm rounded-tr-sm' alt="car!" />
                        </div>
                        <div className="card-body h-2/5">
                            <p className='text-blue-800 font-bold'>MERN Stack</p>
                            <div className=''>
                                <h2 className="card-title text-lg md:text-xl">Bookly (Book resell website)</h2>
                            </div>
                            <div className="card-actions justify-end mb-3">
                                <button className="btn rounded-none bg-gradient-to-r from-cyan-500 to-blue-500 border-0">Details</button>
                            </div>
                        </div>
                    </div>
                </div>
                <button className="btn rounded-none bg-gradient-to-r from-cyan-500 to-blue-500 border-0 mt-5 mb-10 drop-shadow-xl">See More</button>
            </div>
        </div>
    );
};

export default Projects;