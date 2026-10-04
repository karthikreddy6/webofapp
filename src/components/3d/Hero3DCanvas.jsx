import React, { useRef, useMemo } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { Float, RoundedBox, Cylinder, Sphere, MeshDistortMaterial, ContactShadows, Text } from '@react-three/drei'
import * as THREE from 'three'

// 3D Smartphone with Buvva App Screen
function PhoneModel({ mouse }) {
  const phoneRef = useRef()

  useFrame((state) => {
    if (!phoneRef.current) return
    // Smooth lerp rotation based on mouse position
    const targetX = (mouse.current.y * 0.25) + 0.05
    const targetY = (mouse.current.x * 0.35) - 0.2
    phoneRef.current.rotation.x = THREE.MathUtils.lerp(phoneRef.current.rotation.x, targetX, 0.08)
    phoneRef.current.rotation.y = THREE.MathUtils.lerp(phoneRef.current.rotation.y, targetY, 0.08)
  })

  return (
    <group ref={phoneRef} position={[0.2, 0, 0]}>
      {/* Phone Body Frame */}
      <RoundedBox args={[2.4, 4.8, 0.22]} radius={0.2} smoothness={4}>
        <meshStandardMaterial
          color="#151922"
          roughness={0.2}
          metalness={0.8}
        />
      </RoundedBox>

      {/* Titanium Edge Bezel */}
      <RoundedBox args={[2.44, 4.84, 0.2]} radius={0.22} smoothness={4} position={[0, 0, -0.01]}>
        <meshStandardMaterial
          color="#FF5200"
          emissive="#FF5200"
          emissiveIntensity={0.2}
          roughness={0.4}
          metalness={0.6}
        />
      </RoundedBox>

      {/* Screen Surface */}
      <mesh position={[0, 0, 0.115]}>
        <planeGeometry args={[2.22, 4.58]} />
        <meshStandardMaterial color="#0B0F19" roughness={0.1} />
      </mesh>

      {/* Screen Header / Status Bar */}
      <group position={[0, 2.05, 0.12]}>
        <RoundedBox args={[0.7, 0.12, 0.02]} radius={0.05} smoothness={2}>
          <meshBasicMaterial color="#000000" />
        </RoundedBox>
      </group>

      {/* Buvva In-App Top Bar */}
      <group position={[0, 1.7, 0.122]}>
        {/* App Title */}
        <Text position={[-0.55, 0.1, 0]} fontSize={0.16} color="#FF5200" anchorX="left" fontWeight="bold">
          buvva
        </Text>
        <Text position={[-0.55, -0.06, 0]} fontSize={0.09} color="#94A3B8" anchorX="left">
          Campus Food Court • Live
        </Text>

        {/* Live Status Pill */}
        <mesh position={[0.65, 0.04, 0]}>
          <planeGeometry args={[0.55, 0.2]} />
          <meshBasicMaterial color="#00855B" />
        </mesh>
        <Text position={[0.65, 0.04, 0.01]} fontSize={0.075} color="#FFFFFF" anchorX="center" anchorY="middle">
          ● OPEN
        </Text>
      </group>

      {/* Active Order Card */}
      <group position={[0, 0.85, 0.125]}>
        <RoundedBox args={[2.0, 1.25, 0.04]} radius={0.08} smoothness={2}>
          <meshStandardMaterial
            color="#1A2234"
            emissive="#FF5200"
            emissiveIntensity={0.08}
            roughness={0.3}
          />
        </RoundedBox>
        <Text position={[-0.85, 0.42, 0.03]} fontSize={0.09} color="#FF5200" anchorX="left" fontWeight="bold">
          LIVE TOKEN #42
        </Text>
        <Text position={[-0.85, 0.22, 0.03]} fontSize={0.13} color="#FFFFFF" anchorX="left" fontWeight="bold">
          Hyderabadi Dum Biryani
        </Text>
        <Text position={[-0.85, 0.04, 0.03]} fontSize={0.085} color="#94A3B8" anchorX="left">
          + Chilled Lemonade • Canteen A
        </Text>

        {/* Order Progress Bar */}
        <mesh position={[0, -0.22, 0.03]}>
          <planeGeometry args={[1.7, 0.08]} />
          <meshBasicMaterial color="#334155" />
        </mesh>
        <mesh position={[-0.25, -0.22, 0.035]}>
          <planeGeometry args={[1.2, 0.08]} />
          <meshBasicMaterial color="#FF5200" />
        </mesh>

        <Text position={[-0.85, -0.42, 0.03]} fontSize={0.08} color="#10B981" anchorX="left">
          ✓ Ready for Pickup in 2 mins
        </Text>
      </group>

      {/* Featured Food Items Cards on screen */}
      <group position={[0, -0.5, 0.125]}>
        {/* Item 1 */}
        <group position={[-0.5, 0.1, 0]}>
          <RoundedBox args={[0.92, 1.0, 0.03]} radius={0.06}>
            <meshStandardMaterial color="#131B2E" />
          </RoundedBox>
          <mesh position={[0, 0.18, 0.02]}>
            <circleGeometry args={[0.22, 32]} />
            <meshBasicMaterial color="#FF5200" />
          </mesh>
          <Text position={[0, -0.15, 0.02]} fontSize={0.085} color="#FFFFFF" anchorX="center" fontWeight="bold">
            Crispy Dosa
          </Text>
          <Text position={[0, -0.32, 0.02]} fontSize={0.09} color="#FF7A30" anchorX="center">
            ₹45
          </Text>
        </group>

        {/* Item 2 */}
        <group position={[0.5, 0.1, 0]}>
          <RoundedBox args={[0.92, 1.0, 0.03]} radius={0.06}>
            <meshStandardMaterial color="#131B2E" />
          </RoundedBox>
          <mesh position={[0, 0.18, 0.02]}>
            <circleGeometry args={[0.22, 32]} />
            <meshBasicMaterial color="#FF9F1C" />
          </mesh>
          <Text position={[0, -0.15, 0.02]} fontSize={0.085} color="#FFFFFF" anchorX="center" fontWeight="bold">
            Paneer Roll
          </Text>
          <Text position={[0, -0.32, 0.02]} fontSize={0.09} color="#FF7A30" anchorX="center">
            ₹60
          </Text>
        </group>
      </group>

      {/* Bottom 1-Tap Action Button on screen */}
      <group position={[0, -1.65, 0.125]}>
        <RoundedBox args={[1.95, 0.42, 0.03]} radius={0.12} smoothness={2}>
          <meshStandardMaterial
            color="#FF5200"
            roughness={0.2}
            emissive="#FF5200"
            emissiveIntensity={0.3}
          />
        </RoundedBox>
        <Text position={[0, 0, 0.02]} fontSize={0.12} color="#FFFFFF" anchorX="center" anchorY="middle" fontWeight="bold">
          ⚡ Tap to Pickup (QR)
        </Text>
      </group>
    </group>
  )
}

// 3D Delicious Food Bowl (Buvva Meal / Biryani Bowl)
function FoodBowl({ position, rotation = [0.4, 0, 0] }) {
  const bowlRef = useRef()

  useFrame((state) => {
    if (!bowlRef.current) return
    bowlRef.current.rotation.y += 0.008
  })

  return (
    <group ref={bowlRef} position={position} rotation={rotation} scale={0.85}>
      {/* Outer Ceramic Bowl */}
      <Cylinder args={[1.3, 0.8, 0.9, 32, 1, true]} position={[0, 0, 0]}>
        <meshStandardMaterial
          color="#FFFDF7"
          roughness={0.15}
          metalness={0.1}
          side={THREE.DoubleSide}
        />
      </Cylinder>
      {/* Bowl Base */}
      <Cylinder args={[0.82, 0.75, 0.12, 32]} position={[0, -0.45, 0]}>
        <meshStandardMaterial color="#E2E8F0" roughness={0.3} />
      </Cylinder>
      {/* Bowl Rim Ring Accent */}
      <Cylinder args={[1.32, 1.3, 0.06, 32]} position={[0, 0.42, 0]}>
        <meshStandardMaterial color="#FF5200" metalness={0.3} roughness={0.2} />
      </Cylinder>

      {/* Food Contents - Golden Steaming Rice / Curry Surface */}
      <mesh position={[0, 0.28, 0]} rotation={[-Math.PI / 2, 0, 0]}>
        <circleGeometry args={[1.22, 32]} />
        <meshStandardMaterial
          color="#F59E0B"
          roughness={0.8}
          bumpScale={0.1}
        />
      </mesh>

      {/* Garnish bits */}
      <mesh position={[0.2, 0.35, 0.2]}>
        <sphereGeometry args={[0.15, 12, 12]} />
        <meshStandardMaterial color="#10B981" roughness={0.5} />
      </mesh>
      <mesh position={[-0.3, 0.35, -0.1]}>
        <sphereGeometry args={[0.18, 12, 12]} />
        <meshStandardMaterial color="#DC2626" roughness={0.4} />
      </mesh>
      <mesh position={[0.1, 0.34, -0.3]}>
        <sphereGeometry args={[0.12, 12, 12]} />
        <meshStandardMaterial color="#34D399" roughness={0.4} />
      </mesh>

      {/* Chopsticks resting on rim */}
      <group position={[0.3, 0.52, 0]} rotation={[0.1, 0.2, 0.35]}>
        <Cylinder args={[0.03, 0.015, 2.3, 12]} position={[0, 0, 0]} rotation={[0, 0, Math.PI / 2]}>
          <meshStandardMaterial color="#B45309" roughness={0.4} />
        </Cylinder>
        <Cylinder args={[0.03, 0.015, 2.3, 12]} position={[0, 0, 0.1]} rotation={[0, 0, Math.PI / 2]}>
          <meshStandardMaterial color="#B45309" roughness={0.4} />
        </Cylinder>
      </group>
    </group>
  )
}

// 3D Gourmet Burger Model
function BurgerModel({ position, rotation = [0.2, 0.5, 0] }) {
  const burgerRef = useRef()

  useFrame(() => {
    if (!burgerRef.current) return
    burgerRef.current.rotation.y -= 0.007
  })

  return (
    <group ref={burgerRef} position={position} rotation={rotation} scale={0.75}>
      {/* Top Bun */}
      <mesh position={[0, 0.55, 0]}>
        <sphereGeometry args={[0.95, 32, 16, 0, Math.PI * 2, 0, Math.PI * 0.5]} />
        <meshStandardMaterial color="#D97706" roughness={0.5} />
      </mesh>

      {/* Sesame Seeds on Top */}
      {[...Array(8)].map((_, i) => (
        <mesh
          key={i}
          position={[
            Math.cos((i * Math.PI) / 4) * 0.45,
            0.85,
            Math.sin((i * Math.PI) / 4) * 0.45,
          ]}
        >
          <sphereGeometry args={[0.04, 8, 8]} />
          <meshStandardMaterial color="#FEF3C7" roughness={0.2} />
        </mesh>
      ))}

      {/* Melted Cheese Slice */}
      <mesh position={[0, 0.32, 0]} rotation={[0, Math.PI / 6, 0]}>
        <boxGeometry args={[1.5, 0.06, 1.5]} />
        <meshStandardMaterial color="#FBBF24" roughness={0.2} />
      </mesh>

      {/* Patty */}
      <Cylinder args={[0.9, 0.9, 0.28, 32]} position={[0, 0.16, 0]}>
        <meshStandardMaterial color="#582914" roughness={0.9} />
      </Cylinder>

      {/* Crisp Lettuce */}
      <Cylinder args={[1.05, 0.95, 0.1, 16]} position={[0, -0.04, 0]}>
        <meshStandardMaterial color="#22C55E" roughness={0.6} />
      </Cylinder>

      {/* Tomato Slice */}
      <Cylinder args={[0.9, 0.9, 0.12, 32]} position={[0, -0.16, 0]}>
        <meshStandardMaterial color="#EF4444" roughness={0.3} />
      </Cylinder>

      {/* Bottom Bun */}
      <Cylinder args={[0.92, 0.85, 0.3, 32]} position={[0, -0.38, 0]}>
        <meshStandardMaterial color="#D97706" roughness={0.5} />
      </Cylinder>
    </group>
  )
}

// 3D Chilled Drink / Boba Cup
function DrinkCup({ position }) {
  const drinkRef = useRef()

  useFrame(() => {
    if (!drinkRef.current) return
    drinkRef.current.rotation.y += 0.01
  })

  return (
    <group ref={drinkRef} position={position} scale={0.7}>
      {/* Cup Body */}
      <Cylinder args={[0.65, 0.48, 1.5, 32, 1, true]} position={[0, 0, 0]}>
        <meshPhysicalMaterial
          color="#FFFFFF"
          transmission={0.85}
          opacity={1}
          transparent
          roughness={0.1}
          ior={1.4}
        />
      </Cylinder>

      {/* Cold Drink Liquid */}
      <Cylinder args={[0.62, 0.47, 1.25, 32]} position={[0, -0.1, 0]}>
        <meshStandardMaterial color="#EA580C" roughness={0.2} opacity={0.9} transparent />
      </Cylinder>

      {/* Lid */}
      <Cylinder args={[0.68, 0.68, 0.12, 32]} position={[0, 0.8, 0]}>
        <meshStandardMaterial color="#F1F5F9" roughness={0.3} />
      </Cylinder>

      {/* Straw */}
      <Cylinder args={[0.05, 0.05, 1.8, 16]} position={[0.15, 0.95, 0]} rotation={[0.1, 0, -0.2]}>
        <meshStandardMaterial color="#FF5200" roughness={0.2} />
      </Cylinder>
    </group>
  )
}

// Floating Glowing Food Star / Token Badge
function FloatingBadge({ position, label, color = "#FF5200", delay = 0 }) {
  return (
    <Float speed={2.5} rotationIntensity={1.2} floatIntensity={1.8} position={position}>
      <mesh>
        <cylinderGeometry args={[0.42, 0.42, 0.08, 32]} />
        <meshStandardMaterial
          color={color}
          emissive={color}
          emissiveIntensity={0.4}
          roughness={0.2}
          metalness={0.8}
        />
      </mesh>
      <Text position={[0, 0, 0.06]} fontSize={0.22} color="#FFFFFF" anchorX="center" anchorY="middle" fontWeight="bold">
        {label}
      </Text>
    </Float>
  )
}

export default function Hero3DCanvas() {
  const mouse = useRef({ x: 0, y: 0 })

  const handlePointerMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect()
    const x = ((e.clientX - rect.left) / rect.width) * 2 - 1
    const y = -(((e.clientY - rect.top) / rect.height) * 2 - 1)
    mouse.current = { x, y }
  }

  return (
    <div
      className="relative w-full h-[520px] sm:h-[620px] lg:h-[700px] cursor-grab active:cursor-grabbing"
      onPointerMove={handlePointerMove}
    >
      <Canvas
        camera={{ position: [0, 0.2, 7.8], fov: 42 }}
        dpr={[1, 2]}
        gl={{ antialias: true, alpha: true }}
      >
        {/* Cinematic Studio Lights */}
        <ambientLight intensity={0.8} />
        {/* Brand Primary Orange Key Light */}
        <directionalLight position={[6, 8, 5]} intensity={1.8} color="#FFE6D5" castShadow />
        <pointLight position={[-5, 3, 2]} intensity={1.2} color="#FF5200" />
        {/* Soft Cyan/Purple Rim Light for depth */}
        <pointLight position={[3, -4, -2]} intensity={0.9} color="#38BDF8" />
        <pointLight position={[0, 4, -4]} intensity={0.7} color="#A855F7" />

        {/* Floating 3D Elements */}
        <Float speed={2} rotationIntensity={0.4} floatIntensity={0.8}>
          <PhoneModel mouse={mouse} />
        </Float>

        {/* Orbiting 3D Food Elements */}
        <Float speed={1.8} rotationIntensity={0.6} floatIntensity={1.2} position={[-2.7, 0.8, -0.5]}>
          <FoodBowl position={[0, 0, 0]} />
        </Float>

        <Float speed={2.2} rotationIntensity={0.8} floatIntensity={1.4} position={[2.8, -0.6, 0.2]}>
          <BurgerModel position={[0, 0, 0]} />
        </Float>

        <Float speed={1.5} rotationIntensity={0.5} floatIntensity={1.0} position={[-2.3, -1.8, 0.4]}>
          <DrinkCup position={[0, 0, 0]} />
        </Float>

        {/* Floating Coins / Tokens */}
        <FloatingBadge position={[-1.6, 2.2, 0.5]} label="0m" color="#10B981" />
        <FloatingBadge position={[2.5, 2.0, -0.2]} label="⚡" color="#FF5200" />
        <FloatingBadge position={[1.8, -2.2, 0.8]} label="₹" color="#F59E0B" />

        {/* Grounding Contact Shadows */}
        <ContactShadows
          position={[0, -2.8, 0]}
          opacity={0.65}
          scale={10}
          blur={2.4}
          far={5}
          color="#000000"
        />
      </Canvas>

      {/* Interactive Drag Hint */}
      <div className="absolute bottom-3 left-1/2 -translate-x-1/2 pointer-events-none flex items-center gap-2 px-3 py-1.5 rounded-full bg-slate-900/70 border border-slate-700/60 backdrop-blur-md text-xs text-slate-400">
        <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
        <span>Interactive 3D • Move cursor to inspect</span>
      </div>
    </div>
  )
}
