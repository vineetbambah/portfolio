'use client';
import { useState } from 'react';
const Work = () => {
    const [activeTab, setActiveTab] = useState('none');
    return (
        <div className="work mt-24">
            <h1 className="font-thin text-3xl">Work</h1>
            <div className="flex flex-row  space-x-8 items-center mt-4">
                <h1 className="hover:text-green-600 select-none cursor-pointer" onClick={ ()=>{setActiveTab(prev => (prev === 'projects' ? 'none' : 'projects'))}}>Projects</h1>
                <h1 className="hover:text-green-600 select-none cursor-pointer" onClick={()=>{setActiveTab(prev => (prev === 'writings' ? 'none' : 'writings'))}}>Writings</h1>
                <h1 className="hover:text-green-600 select-none cursor-pointer" onClick={()=>{setActiveTab(prev => (prev === 'dump' ? 'none' : 'dump'))}}>Dump</h1>
            </div>
            <h1>{activeTab}</h1>
        </div>
    );
};
export default Work;