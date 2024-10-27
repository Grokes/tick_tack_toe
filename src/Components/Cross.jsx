import { useGLTF } from '@react-three/drei'

function Cross({x, z, win}) {
	const { nodes, materials } = useGLTF('/public/tic_tac_toe_borad/Cross.gltf')
	let color = 'black'
	if (win == true) {
		color = 'red'
	}
	return (
		<mesh
			geometry={nodes.Object_8.geometry}
			material={materials['Material.003']}
			rotation={[-Math.PI / 2, 0, Math.PI / 4]}
			position={[x, 0.05, z]}
			scale={[0.189, 0.038, 0.038]}
		>
			<meshStandardMaterial color={color} />
		</mesh>
	)
}

export default Cross;