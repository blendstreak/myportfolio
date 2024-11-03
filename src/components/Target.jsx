import { Float, useGLTF } from '@react-three/drei'
import React, { useEffect, useRef } from 'react'
// import gsap from 'gsap'
// import { useGSAP } from '@gsap/react'

const Target = (props) => {
    const targetRef = useRef()
    const { scene } = useGLTF('./models/target.gltf')
    
    // useGSAP(()=>{
    //     gsap.to(targetRef.current.position, {
    //         y: targetRef.current.position.y + 0.5,
    //         duration: 1.5,
    //         reapeat: -1,
    //         yoyo: true,
    //     })
    // })

    return (
        <Float floatIntensity={0.5}>
            <group {...props}>
                <mesh ref={targetRef} rotation={[0, Math.PI/5, 0]}>
                    <primitive object={scene}/>
                </mesh>
            </group>
        </Float>
    )
}

export default Target