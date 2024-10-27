import React from 'react'
import { useGLTF } from '@react-three/drei'

function Circle({x, z}) {
	const { nodes, materials } = useGLTF('/public/tic_tac_toe_borad/Cross.gltf')
	return (
		<mesh
			geometry={nodes.Object_6.geometry}
			material={materials['Material.003']}
			scale={[0.153, 0.038, 0.153]}
			position={[x, 0.034, z]}
		/>
	)
}

export default Circle;
