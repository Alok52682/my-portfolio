import React from 'react';

const Skills = () => {
    return (
        <div>
            <h2 className="text-5xl font-bold text-overColor text-center my-20">Professional Skills</h2>
            <div className='w-10/12 mx-auto md:grid grid-cols-2 gap-10 bg-slate-800 p-10'>
                <div className="form-control w-full">
                    <label className="label">
                        <span className="label-text text-xl text-white">HTML 5</span>
                        <span className="label-text-alt text-xl text-white">95%</span>
                    </label>
                    <div className="w-full bg-gray-200 h-5 mb-6">
                        <div className="bg-info h-5 w-full" style={{ width: '95%' }}></div>
                    </div>
                </div>
                <div className="form-control w-full">
                    <label className="label">
                        <span className="label-text text-xl text-white">CSS</span>
                        <span className="label-text-alt text-xl text-white">95%</span>
                    </label>
                    <div className="w-full bg-gray-200 h-5 mb-6">
                        <div className="bg-info h-5 w-full" style={{ width: '95%' }}></div>
                    </div>
                </div>
                <div className="form-control w-full">
                    <label className="label">
                        <span className="label-text text-xl text-white">JavaScript</span>
                        <span className="label-text-alt text-xl text-white">90%</span>
                    </label>
                    <div className="w-full bg-gray-200 h-5 mb-6">
                        <div className="bg-info h-5 w-full" style={{ width: '90%' }}></div>
                    </div>
                </div>
                <div className="form-control w-full">
                    <label className="label">
                        <span className="label-text text-xl text-white">ReactJs</span>
                        <span className="label-text-alt text-xl text-white">90%</span>
                    </label>
                    <div className="w-full bg-gray-200 h-5 mb-6">
                        <div className="bg-info h-5 w-full" style={{ width: '90%' }}></div>
                    </div>
                </div>
                <div className="form-control w-full">
                    <label className="label">
                        <span className="label-text text-xl text-white">NodeJs</span>
                        <span className="label-text-alt text-xl text-white">80%</span>
                    </label>
                    <div className="w-full bg-gray-200 h-5 mb-6">
                        <div className="bg-info h-5 w-full" style={{ width: '80%' }}></div>
                    </div>
                </div>
                <div className="form-control w-full">
                    <label className="label">
                        <span className="label-text text-xl text-white">MongoDB</span>
                        <span className="label-text-alt text-xl text-white">70%</span>
                    </label>
                    <div className="w-full bg-gray-200 h-5 mb-6">
                        <div className="bg-info h-5 w-full" style={{ width: '70%' }}></div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Skills;

