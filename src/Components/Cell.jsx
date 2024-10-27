import React, { useState } from 'react'
import Cross from './Cross'
import Circle from './Circle'

function Cell({ index, value, setCellValue }) {
	let x = 0
	let z = 0
	switch (index) {
		case 0:
			z = -0.49
			x = -0.49
			break
		case 1:
			z = -0.49
			x = 0
			break
		case 2:
			z = -0.49
			x = 0.49
			break
		case 3:
			z = 0
			x = -0.49
			break
		case 4:
			z = 0
			x = 0
			break
		case 5:
			z = 0
			x = 0.49
			break
		case 6:
			z = 0.49
			x = -0.49
			break
		case 7:
			z = 0.49
			x = 0
			break
		case 8:
			z = 0.49
			x = 0.49
			break
	}
	function MouseEnterHandler(event) {
		if (value === null) {
			setOpacity(0.5)
		}
	}
	function MouseLeaveHandler(event) {
		setOpacity(0)
	}
	function MouseClickHandler(event) {
		setOpacity(0)
		if (value == null){
			setCellValue(index)	
		}
		
	}
	const [opacity, setOpacity] = useState(0)
	return (
		<>
			<mesh
				rotation={[-Math.PI / 2, 0, 0]}
				scale={0.4}
				position={[x, 0.034, z]}
				onPointerEnter={() => MouseEnterHandler()}
				onPointerLeave={() => MouseLeaveHandler()}
				onClick={() => MouseClickHandler()}
			>
				<planeGeometry></planeGeometry>
				<meshStandardMaterial
					color='yellow'
					opacity={opacity}
					transparent={true}
				/>
			</mesh>
			{value == 1 && <Cross x={x} z={z}></Cross>}
			{value == 2 && <Circle x={x} z={z}></Circle>}
		</>
	)
}

export default Cell
