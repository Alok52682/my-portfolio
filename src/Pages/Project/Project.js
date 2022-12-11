import React from 'react';
import { useLoaderData } from 'react-router-dom';
import BackGround from '../../Assets/Black Minimalist Motivation Quote LinkedIn Banner.jpg';

const Project = () => {
    const project = useLoaderData();
    console.log(project);
    return (
        <div>
            <div className="relative">
                <div>
                    <img src={BackGround} className="block w-[100vw] h-[200px] md:h-[40vh]" alt='' />
                </div>
                <div className="absolute left-10 top-10 bottom-10 w-1/2 md:w-3/12">
                    <h1 className='text-3xl md:text-6xl lg:text-6xl font-extrabold text-white text-overColor'>{project?.title}</h1>
                    <p className='text-white text-xs md:text-lg'>{project?.short_discription}</p>
                </div>
                <div className='my-20 w-10/12 mx-auto lg:flex gap-10'>
                    <div className='lg:w-7/12 mb-20'>
                        <div className="carousel w-full h-72 md:h-[600px]">
                            <div id="slide1" className="carousel-item relative w-full">
                                <img src={project.images.demo1} className="mx-auto" alt='' />
                                <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                                    <a href="#slide3" className="text-4xl text-info">❮</a>
                                    <a href="#slide2" className="text-4xl text-info">❯</a>
                                </div>
                            </div>
                            <div id="slide2" className="carousel-item relative w-full">
                                <img src={project.images.demo2} className="mx-auto" alt='' />
                                <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                                    <a href="#slide1" className="text-4xl text-info">❮</a>
                                    <a href="#slide3" className="text-4xl text-info">❯</a>
                                </div>
                            </div>
                            <div id="slide3" className="carousel-item relative w-full">
                                <img src={project.images.demo3} className="mx-auto" alt='' />
                                <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                                    <a href="#slide2" className="text-4xl text-info">❮</a>
                                    <a href="#slide1" className="text-4xl text-info">❯</a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='lg:w-5/12'>
                        <h1 className="text-3xl font-bold text-overColor drop-shadow-xl text-center md:text-left">PROJECT INFO</h1>
                        <p className="py-6 text-white">{project?.project_info}</p>

                        <h2 className='text-2xl font-semibold text-overColor text-center md:text-left'>Key points</h2>
                        <ul className='text-white list-decimal ml-3'>
                            {
                                Object.keys(project?.key_points).map(point => <li className='mt-3' key={point}>{project?.key_points[point]}</li>)
                            }
                        </ul>
                        <h1 className="text-3xl font-bold text-overColor drop-shadow-xl text-center md:text-left my-5">Technology Used</h1>
                        <p className='text-white'>{project?.technologies}</p>
                        <h1 className="text-3xl font-bold text-overColor drop-shadow-xl text-center md:text-left my-5">Links</h1>
                        <p className='text-white'>Live Link: <a className='hover:text-info' href={project?.livelink}>{project?.livelink}</a> </p>
                        <p className='text-white mt-3'>Repository Link: <a className='hover:text-info' href={project?.Repo_link}>{project?.Repo_link}</a> </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Project;