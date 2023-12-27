import {Suspense} from 'react'
import { Canvas } from '@react-three/fiber'
import { OrbitControls,useGLTF,Preload } from '@react-three/drei'

const Hero = () => {
    const book = useGLTF('./book/scene.gltf')
  return (
 <mesh >
    <hemisphereLight intensity={1} groundColor="black"/>
    <pointLight intensity={1}/>
    <spotLight
    position={[-20,50,10]}
    angle={0.12}
    penumbra={1}
    castShadow/>
    <primitive object={book.scene}
    scale={0.5}
    position={[0,-0.75,0]}
    />
 </mesh>
  )
}
const BookCanvas= ()=>{
    return(
        <div className='h-screen w-full flex justify-center items-center flex-col' >
            <Canvas
            frameloop='demand'
            shadows
            camera={{position: [0,0,-3],fov:70}}
            gl={{preserveDrawingBuffer:true}}>
                <Suspense>
                    <OrbitControls
                    enableZoom={false}
                    maxPolarAngle={Math.PI/2}
                    minPolarAngle={Math.PI/2}
                    />
                    <Hero/>
                </Suspense>
                <Preload all/>
            </Canvas>
            <div className='text-7xl font-bold gradient-text text-transparent animate-gradient -mt-[170px]'>Hello There</div>
        </div>
    )
}

export default BookCanvas