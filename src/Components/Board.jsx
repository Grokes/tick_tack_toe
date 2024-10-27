import React, { useState } from 'react'
import { useGLTF } from '@react-three/drei'
import Cell from './Cell'

function Board(props) {
	const [cells, setCells] = useState(Array(9).fill(null))
	const [isNextX, setIsNextX] = useState(true);
	const { nodes, materials } = useGLTF('/public/tic_tac_toe_borad/Cross.gltf')
	function setCellValue(index){
		let newCells = cells.slice()
		isNextX ? (newCells[index] = 1) : (newCells[index] = 2)
		setIsNextX(!isNextX)
		setCells(newCells)	
	}
	return (
		<>
			<group {...props} dispose={null}>
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
			{cells.map((cell, index) => {
				return <Cell index={index} value={cell} setCellValue={setCellValue} key={index}></Cell>
			})}
		</>
	)
}

export default Board
