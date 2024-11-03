import React, { Suspense, useState } from 'react'
import { myProjects } from '../constants'
import { Canvas } from '@react-three/fiber';
import { Center, Float, OrbitControls } from '@react-three/drei';
import CanvasLoader from '../components/CanvasLoader';
import DemoComputer from '../components/DemoComputer';
const projectCount = myProjects.length

export default function Projects() {
  const [selectedProjectIndex, setSelectedProjectIndex] = useState(0);
  const currentProject = myProjects[selectedProjectIndex]
  const handleNavigation = (direction) => {
    setSelectedProjectIndex((prevIndex) => {
      if(direction === 'previous'){
        return prevIndex === 0 ? projectCount - 1: prevIndex - 1
      }
      else {
        return prevIndex === projectCount - 1 ? 0: prevIndex + 1
      }
    })

  }
  return (
    <section className='c-space my-20 max-w-7xl m-auto'>
      <p className='text-gray-400 font-bold text-2xl py-4' id='projects'>My Projects</p>
      <div className='grid lg:grid-cols-2 grid-cols-1 mt-12 gap-5 w-full'>
        <div className={`flex flex-col gap-5 relative sm:p-10 px-5 shadow-lg rounded-md ${currentProject.className} gradient-light transition-colors`}>
          {/* <div className='gradient-light w-full h-full'>
            <img src='' className='w-full h-96 object-cover rounded-xl' />
          </div> */}
          <div className='p-3 backdrop-filter backdrop-blur-3xl w-fit rounded-lg' style={currentProject.logoStyle}>
            {/* <img src={currentProject.logo} alt='logo' className="w-10 h-10 shadow-sm"/> */}
            <i className={`${currentProject.logo} text-3xl`}></i>
          </div>
          <div className='flex flex-col gap-5 text-white-600 my-5'>
            <p className='text-white text-2xl font-semibold animatedText'>{currentProject.title}</p>
            <p className='animatedText grid-subtext'>{currentProject.desc}</p>
            <p className='animatedText'>{currentProject.subdesc}</p>
          </div>
          <div className='flex items-center justify-between flex-wrap gap-5'>
            <div className='flex items-center gap-3'>
              {currentProject.tags.map((tag, index) => (
                <div key={index} className='tech-logo'>
                  <img src={`${tag["path"]}`} alt="technologies" title={`${tag['name']}`}/>
                </div>
              ))}
            </div>
            {currentProject.href && (<a className='flex items-center gap-2 cursor cursor-pointer text-gray-300' href={`https://${currentProject.href}`} target='_blank' rel='noreferrer'>
              <p>Live Demo</p>
              <i className="fa-solid fa-up-right-from-square w-3 h-3"></i>
            </a>)}
          </div>
          <div className='flex justify-between items-center mt-7 p-4'>
            <button className='w-10' onClick={() => handleNavigation('previous')} aria-label='previous'>
              <i className="fa-solid fa-circle-left text-white text-2xl" aria-label='previous'></i>
            </button>
            <button className='w-10' onClick={() => handleNavigation('next')} aria-label='next'>
              <i className="fa-solid fa-circle-right text-white text-2xl" aria-label='next'></i>
            </button>
          </div>
        </div>
        <div className='rounded-lg h-96 md:h-full'>
          <Canvas>
            <ambientLight intensity={4} />
            <directionalLight position={[10, 10, 5]}/>
            <Center>
              <Suspense fallback={<CanvasLoader/>}>
                <Float floatIntensity={3}>
                  <group scale={0.021} position={[0, 0, 0]} rotation={[0.5, -0.1, 0]}>
                    <DemoComputer texture={currentProject.texture} />
                  </group>
                </Float>
              </Suspense>
            </Center>
            <OrbitControls maxPolarAngle={Math.PI/2} enableZoom={false} enablePan={false}/>
          </Canvas>

        </div>
      </div>
    </section>
  )
}
