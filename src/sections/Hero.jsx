import { PerspectiveCamera } from '@react-three/drei'
import { Canvas } from '@react-three/fiber'
import React, { Suspense } from 'react'
import WorkBench from '../components/WorkBench'
import CanvasLoader from '../components/CanvasLoader'
import { useMediaQuery } from 'react-responsive'
import { calculateSizes } from '../constants'
import Target from '../components/Target'
import ReactLogo from '../components/ReactLogo'
import HeroCamera from '../components/HeroCamera'
import Button from '../components/Button'


const Hero = () => {
    const isSmall = useMediaQuery({maxWidth: 440})
    const isMobile = useMediaQuery({maxWidth: 768})
    const isTablet = useMediaQuery({minWidth: 768, maxWidth: 1024})
    const sizes = calculateSizes(isSmall, isMobile, isTablet)
    
  return (
    <section className='min-h-screen w-full flex flex-col relative' id='home'>
        <div className='w-full mx-auto flex flex-col sm:mt-36 mt-20 c-space gap-3'>
            <p className='sm:text-3xl text-2xl font-medium text-white text-center'>
                Hi, I am Abhay <span className='waving-hand'>👋</span>
            </p>
            <p className='font-bold text-gray-400 text-center sm:text-7xl text-5xl'>Welcome To My Portfolio!</p>

        </div>
        <div className="w-full h-full absolute inset-0">
            {/* <Leva/> */}
            <Canvas className='w-full h-full'>
                <Suspense fallback={<CanvasLoader/>}>
                <PerspectiveCamera makeDefault position={[0, 0, 30]}/>
                
                <HeroCamera isMobile={isMobile}>
                    <WorkBench position={sizes.deskPosition} rotation={[0, -Math.PI/2, 0]} scale={sizes.deskScale}/>
                </HeroCamera>
                
                <group>
                    <Target position={sizes.targetPosition} scale={1.4}/>
                    <ReactLogo position={sizes.reactLogoPosition}/>
                </group>
                <ambientLight intensity={1}/>
                <directionalLight position={[10, 10, 10]} intensity={0.5}/>

                </Suspense>
            </Canvas>
        </div>
        <div className='absolute bottom-7 left-0 right-0 w-full z-10 c-space'>
            <a href="#about" className='w-fit'>
                <Button name="Let's work together" isBeam={true} containerClass="sm:w-fit w-full sm:min-w-96 bg-gray-900"/>
            </a>
        </div>
    </section>
  )
}

export default Hero