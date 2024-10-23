import React from 'react'
import { useGLTF } from '@react-three/drei'

export function Circle(props) {
	const { nodes, materials } = useGLTF('/public/tic_tac_toe_borad/Cross.gltf')
	return (
		<mesh
			geometry={nodes.Object_6.geometry}
			material={materials['Material.003']}
			position={[0.003, -0.021, 0.042]}
			scale={[0.153, 0.038, 0.153]}
		/>
	)
}

useGLTF.preload('/Cross.gltf')
