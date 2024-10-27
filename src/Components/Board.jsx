import React from 'react'
import { useGLTF } from '@react-three/drei'
import Cell from './Cell'

function Board({board, isNextX, winner, stepNext}) {
	const { nodes, materials } = useGLTF('/public/tic_tac_toe_borad/Cross.gltf')
	return (
		<>
			<group>
				<mesh
					geometry={nodes.Object_4.geometry}
					material={materials['Material.005']}
					rotation={[-Math.PI / 2, 0, 0]}
					scale={[0.75, 0.75, 0.031]}
				/>
				<mesh
					geometry={nodes.Object_18.geometry}
					material={materials.SVGMat}
					position={[0.01, 0.035, 0.005]}
					scale={0.631}
				/>
			</group>
			{board.map((cell, index) => {
				return <Cell index={index} value={cell} stepNext={stepNext} winner={winner} key={index}></Cell>
			})}
		</>
	)
}

export default Board
