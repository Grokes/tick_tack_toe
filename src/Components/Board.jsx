import React from 'react'
import { useGLTF } from '@react-three/drei'
import { color } from 'three/webgpu'

export function Board(props) {
	const { nodes, materials } = useGLTF('/public/tic_tac_toe_borad/Cross.gltf')
	return (
		<group {...props} dispose={null}>
			<mesh
				geometry={nodes.Object_4.geometry}
				material={materials['Material.005']}
				position={[0.003, -0.09, 0.038]}
				rotation={[-Math.PI / 2, 0, 0]}
				scale={[0.686, 0.686, 0.031]}
			/>
			<mesh
				geometry={nodes.Object_18.geometry}
				material={materials.SVGMat}
				position={[0.009, -0.058, 0.042]}
				scale={0.631}
			/>
		</group>
	)
}

useGLTF.preload('/Cross.gltf')
