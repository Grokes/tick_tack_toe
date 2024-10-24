import React from 'react'
import { useGLTF } from '@react-three/drei'

export function Cross(props) {
	const { nodes, materials } = useGLTF('/public/tic_tac_toe_borad/Cross.gltf')
	return (
		<mesh
			geometry={nodes.Object_8.geometry}
			material={materials['Material.003']}
			position={[-0.467, -0.022, 0.038]}
			rotation={[-Math.PI / 2, 0, Math.PI / 4]}
			scale={[0.189, 0.038, 0.038]}
		/>
	)
}

useGLTF.preload('/Cross.gltf')
