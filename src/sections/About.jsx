import React, { useState } from 'react'
import Globe from 'react-globe.gl'
import Button from '../components/Button'

export default function About() {
    const [hasCopied, setHasCopied] = useState(false)
    const handleCopy = () => {
        navigator.clipboard.writeText('abhaysinghrana2004@gmail.com')
        setHasCopied(true)
        setTimeout(() => {
            setHasCopied(false)
        }, 2000);
    }
    return (
        <section className='c-space my-20' id="about">
            <div className='grid xl:grid-cols-3 xl:grid-rows-6 md:grid-cols-2 grid-cols-1 gap-5 h-full max-w-7xl mx-auto'>
                <div className='col-span-1 xl:row-span-3'>
                    <div className='grid-container bg-gray-800 p-6 rounded-lg shadow-lg'>
                        <div className='w-full p-4'>
                            <i className="fa-solid fa-user text-white text-9xl py-4"></i>
                        </div>
                        <p className='head-text text-white'>About Me</p>
                        <p className='grid-subtext text-gray-300'>
                            Hey! Welcome to my portfolio. Tech enthusiast, who loves diving into new technologies and figuring how things work.
                            Check out my projects and feel free to reach out if you'd like to collaborate.
                        </p>
                    </div>
                </div>
                <div className='col-span-1 xl:row-span-3'>
                    <div className='grid-container bg-gray-800 p-6 rounded-lg shadow-lg'>
                        <img className='w-full h-[266px] object-cover' src='/techStack.png' alt='techStack'/>
                        <p className='head-text text-white'>Tech Stack</p>
                        <p className='grid-subtext text-gray-300'>I have good background experience in Python web development-especially with Flask and Django. I love learning about new technologies and applying them to real-world problems (I am new at React).</p>
                    </div>
                </div>
                <div className='col-span-1 xl:row-span-4'>
                    <div className='grid-container bg-gray-800 p-6 rounded-lg shadow-lg'>
                        <div className='rounded-3xl w-full sm:h-[326px] h-fit flex justify-center items-center'>
                            <Globe
                                height={326}
                                width={326}
                                backgroundColor="rgba(0,0,0,0)"
                                backgroundImageOpacity={0.5}
                                showAtmosphere
                                showGraticules
                                globeImageUrl="./earth-night.jpg"
                                bumpImageUrl="./earth-topology.png"
                            />
                        </div>
                        <div className='mt-4'>
                            <p className='head-text'>I work remotely</p>
                            <p className='grid-subtext'>I'm based in India, with remote work available.</p>
                            <Button name="Contact Me" isBeam containerClass="w-full mt-10 bg-gray-950" />
                        </div>
                    </div>
                </div>
                <div className='xl:col-span-2 xl:row-span-3'>
                    <div className='grid-container'>
                        {/* <img src='' className='w-full sm:h-[266px] h-fit object-cover sm:object-top' /> */}
                        <div className='grid grid-cols-2 gap-4'>
                            <div>
                                <img src="/other/gunAnim.gif" alt="test" />
                            </div>
                            <div>
                                <img src="/other/gunAnim2.gif" alt="" />
                            </div>
                        </div>
                        <div>
                            <p className='head-text'>My Passion</p>
                        </div>
                        <div>
                            <p className='grid-subtext'>
                                I love cybersecurity and spend most of my free time honing my skills on TryHackMe. Otherwise, you might find me attempting to solve a Rubik's cube; my best time is 18 seconds - or animating guns in Blender for my YouTube channel!
                            </p>
                        </div>
                    </div>
                </div>
                <div className='xl:col-span-1 xl:row-span-2'>
                    <div className='grid-container'>
                        {/* <img src='https://via.placeholder.com/150' className='w-full md:h-[126px] sm:h-[276px] h-fit object-cover sm:object-top' alt="Contact Me" /> */}
                        <div className=''>
                            <p className='text-gray-300 m-0 sm:text-xl lg:text-2xl text-2xl text-center'>Contact Me</p>
                            <button className='copy-container hover:cursor-pointer flex items-center justify-center' onClick={handleCopy}>
                                <i className={hasCopied ? "fa-solid fa-check text-green-400 text-2xl sm:text-xl mr-2" : "fa-regular fa-copy text-gray-200 text-2xl sm:text-xl mr-2"}></i>
                                <p className='lg:text-xl md:text-lg font-medium text-gray_gradient text-white text-center break-words break-all'>abhaysinghrana2004@gmail.com</p>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
