import { Canvas } from '@react-three/fiber'
import React, { Suspense, useState } from 'react'
import { workExperiences } from '../constants'
import { OrbitControls } from '@react-three/drei'
import CanvasLoader from '../components/CanvasLoader'
import Developer from '../components/Developer'
const Experience = () => {
    const [animationName, setAnimationName] = useState('idle')

    return (
        <section className='c-space my-20 flex justify-center items-center max-w-max m-auto'>
            <div className='w-full text-neutral-300'>
                <h3 className='head-text text-xl'>My Work Experience</h3>
                <div className='work-container flex'>
                    <div className='work-canvas flex-1'>
                        <Canvas>
                            <ambientLight intensity={5} />
                            <spotLight position={[10, 10 ,10]} angle={0.15} penumbra={1} />
                            <directionalLight position={[10, 10, 10]} intensity={1}/>
                            <OrbitControls enableZoom={false} enablePan={false} maxPolarAngle={Math.PI/2} />
                            <Suspense fallback={<CanvasLoader/>}>
                                <Developer position-y={-3} scale={3} animationName={animationName}/>
                            </Suspense>
                        </Canvas>
                    </div>
                    <div className="work-content">
                        <div className="sm:py-10 py-5 sm:px-5 px-2.5">
                            {workExperiences.map((item, index) => (
                                <div
                                    key={item.id}
                                    className="work-content_container group"
                                    onClick={() => setAnimationName(item.animation.toLowerCase())}
                                    onPointerOver={() => setAnimationName(item.animation.toLowerCase())}
                                    onPointerOut={() => setAnimationName(setAnimationName("idle"))}
                                >
                                    <div className="flex flex-col h-full justify-start items-center py-2">
                                        <div className="work-content_logo">
                                            <img className="w-full h-full" src={item.icon} alt="item-icon" />
                                        </div>

                                        <div className="work-content_bar" />
                                    </div>

                                    <div className="sm:p-5 px-2.5 py-5">
                                        <p className="font-bold text-white-800">{item.name}</p>
                                        <p className="text-sm mb-5">
                                            {item.pos} -- <span>{item.duration}</span>
                                        </p>
                                        <p className="group-hover:text-white transition-all ease-in-out duration-500">{item.description}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Experience