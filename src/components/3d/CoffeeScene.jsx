import { useRef, useMemo } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { Float, Sparkles } from '@react-three/drei'
import * as THREE from 'three'

// ── Fluffy Choux / Cream Puff ─────────────────────────────────────────────────
function ChouPuff() {
  const groupRef = useRef()

  useFrame((state) => {
    if (!groupRef.current) return
    groupRef.current.rotation.y = Math.sin(state.clock.elapsedTime * 0.35) * 0.25
  })

  return (
    <group ref={groupRef}>
      {/* Plate / saucer */}
      <mesh position={[0, -0.72, 0]}>
        <cylinderGeometry args={[1.3, 1.3, 0.10, 36]} />
        <meshStandardMaterial color="#FFF0F4" roughness={0.3} metalness={0.05} />
      </mesh>
      <mesh position={[0, -0.66, 0]}>
        <torusGeometry args={[1.2, 0.06, 8, 36]} />
        <meshStandardMaterial color="#F2AFBE" roughness={0.4} />
      </mesh>

      {/* Choux puff base — two stacked spheres */}
      <mesh position={[0, -0.1, 0]}>
        <sphereGeometry args={[0.72, 32, 32]} />
        <meshStandardMaterial color="#F5D8C0" roughness={0.5} />
      </mesh>
      <mesh position={[0, 0.42, 0]}>
        <sphereGeometry args={[0.54, 32, 32]} />
        <meshStandardMaterial color="#F5D8C0" roughness={0.5} />
      </mesh>

      {/* Rose cream top swirl */}
      <mesh position={[0, 0.88, 0]}>
        <sphereGeometry args={[0.30, 24, 24]} />
        <meshStandardMaterial color="#F2AFBE" roughness={0.35} metalness={0.05} />
      </mesh>
      <mesh position={[0, 1.10, 0]}>
        <sphereGeometry args={[0.18, 16, 16]} />
        <meshStandardMaterial color="#E0899C" roughness={0.3} />
      </mesh>
      <mesh position={[0, 1.24, 0]}>
        <sphereGeometry args={[0.10, 12, 12]} />
        <meshStandardMaterial color="#C4859A" roughness={0.3} />
      </mesh>

      {/* Sugar glaze drizzle — thin torus around top */}
      <mesh position={[0, 0.62, 0]} rotation={[0.2, 0, 0.1]}>
        <torusGeometry args={[0.46, 0.035, 8, 28]} />
        <meshStandardMaterial color="#FAD5DE" roughness={0.2} metalness={0.1} />
      </mesh>

      {/* Sprinkle dots */}
      {[0,1,2,3,4,5].map(i => {
        const angle = (i / 6) * Math.PI * 2
        const r = 0.52
        return (
          <mesh key={i} position={[Math.cos(angle) * r, 0.32, Math.sin(angle) * r]}>
            <sphereGeometry args={[0.055, 8, 8]} />
            <meshStandardMaterial color={i % 2 === 0 ? '#F2AFBE' : '#C4956A'} />
          </mesh>
        )
      })}
    </group>
  )
}

// ── Mini Macaron ──────────────────────────────────────────────────────────────
function Macaron({ position, color = '#F2AFBE', speed = 0.6, rotOffset = 0 }) {
  const ref = useRef()
  useFrame((state) => {
    const t = state.clock.elapsedTime * speed + rotOffset
    ref.current.rotation.y = t * 0.7
    ref.current.position.y = position[1] + Math.sin(t) * 0.22
  })
  return (
    <group ref={ref} position={position}>
      {/* Top shell */}
      <mesh position={[0, 0.12, 0]}>
        <sphereGeometry args={[0.28, 20, 10, 0, Math.PI * 2, 0, Math.PI / 2]} />
        <meshStandardMaterial color={color} roughness={0.4} side={THREE.DoubleSide} />
      </mesh>
      {/* Bottom shell */}
      <mesh position={[0, -0.12, 0]} rotation={[Math.PI, 0, 0]}>
        <sphereGeometry args={[0.28, 20, 10, 0, Math.PI * 2, 0, Math.PI / 2]} />
        <meshStandardMaterial color={color} roughness={0.4} side={THREE.DoubleSide} />
      </mesh>
      {/* Cream filling */}
      <mesh>
        <cylinderGeometry args={[0.265, 0.265, 0.10, 24]} />
        <meshStandardMaterial color="#FFF0F4" roughness={0.3} />
      </mesh>
    </group>
  )
}

// ── Floating Flower Petal ─────────────────────────────────────────────────────
function Petal({ position, speed = 0.5, rotOffset = 0, color = '#FAD5DE' }) {
  const ref = useRef()
  useFrame((state) => {
    const t = state.clock.elapsedTime * speed + rotOffset
    ref.current.rotation.z = Math.sin(t * 0.6) * 0.5
    ref.current.rotation.y = t * 0.4
    ref.current.position.y = position[1] + Math.sin(t) * 0.18
  })
  return (
    <mesh ref={ref} position={position}>
      <sphereGeometry args={[0.18, 12, 8]} />
      <meshStandardMaterial color={color} roughness={0.5} transparent opacity={0.85} />
    </mesh>
  )
}

// ── Mini Croissant ────────────────────────────────────────────────────────────
function MiniCroissant({ position, speed = 0.5, rotOffset = 0 }) {
  const ref = useRef()
  useFrame((state) => {
    const t = state.clock.elapsedTime * speed + rotOffset
    ref.current.rotation.y = t * 0.6
    ref.current.position.y = position[1] + Math.sin(t) * 0.2
  })
  return (
    <group ref={ref} position={position}>
      <mesh rotation={[0.3, 0, 0.4]}>
        <torusGeometry args={[0.20, 0.09, 8, 24, Math.PI * 1.25]} />
        <meshStandardMaterial color="#F5D8C0" roughness={0.6} />
      </mesh>
    </group>
  )
}

// ── Scene ─────────────────────────────────────────────────────────────────────
function Scene() {
  return (
    <>
      <ambientLight intensity={1.4} color="#FFF0F4" />
      <directionalLight position={[4, 8, 5]}  intensity={2.2} color="#F2AFBE" castShadow />
      <directionalLight position={[-4, 2, -3]} intensity={0.9} color="#C4956A" />
      <pointLight       position={[0, 4, 2]}  intensity={1.6} color="#FAD5DE" />

      {/* Central choux puff */}
      <Float speed={2} rotationIntensity={0.12} floatIntensity={0.7}>
        <ChouPuff />
      </Float>

      {/* Macarons orbiting */}
      <Macaron position={[-2.2,  0.4,  0.3]} color="#F2AFBE" speed={0.55} rotOffset={0}   />
      <Macaron position={[ 2.1,  0.6, -0.2]} color="#C4956A" speed={0.65} rotOffset={2.1} />
      <Macaron position={[-1.6, -0.8,  0.6]} color="#8BA888" speed={0.50} rotOffset={1.2} />
      <Macaron position={[ 0.3,  1.8, -0.9]} color="#FAD5DE" speed={0.70} rotOffset={0.8} />

      {/* Petals / dots */}
      <Petal position={[-2.5, -0.2, -0.4]} color="#FAD5DE" speed={0.45} rotOffset={0}  />
      <Petal position={[ 2.4,  1.0,  0.3]} color="#F2AFBE" speed={0.55} rotOffset={1.5} />
      <Petal position={[ 0.8, -1.6,  0.8]} color="#E0899C" speed={0.60} rotOffset={0.7} />

      {/* Mini croissants */}
      <MiniCroissant position={[-1.1,  1.7,  0.4]} speed={0.48} rotOffset={0.5} />
      <MiniCroissant position={[ 2.0,  1.3, -0.5]} speed={0.55} rotOffset={1.9} />

      {/* Rose sparkles */}
      <Sparkles count={55} scale={6} size={1.4} speed={0.3} color="#F2AFBE" opacity={0.75} />
      <Sparkles count={25} scale={4} size={0.8} speed={0.5} color="#C4956A" opacity={0.45} />
    </>
  )
}

// ── Export ────────────────────────────────────────────────────────────────────
export default function CoffeeScene() {
  return (
    <Canvas
      shadows={{ type: THREE.PCFShadowMap }}
      dpr={[1, 2]}
      camera={{ position: [0, 0.5, 6], fov: 45 }}
      style={{ background: 'transparent' }}
      gl={{ antialias: true, alpha: true }}
    >
      <Scene />
    </Canvas>
  )
}
